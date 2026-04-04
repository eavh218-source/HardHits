import statsapi
import pybaseball as pb
import pandas as pd
import json
import re
from datetime import datetime, timedelta

from paths import DATA_DIR

# --- 1. CONFIGURATION & PARK FACTORS ---
PARK_FACTORS = {
    'Reds': 1.28, 'Dodgers': 1.21, 'Phillies': 1.16, 
    'Yankees': 1.12, 'Rockies': 1.11, 'Athletics': 1.09,
    'Mariners': 0.82, 'Padres': 0.94, 'Giants': 0.83
}

TEAM_MAP = {
    'Arizona Diamondbacks': 'ARI', 'Atlanta Braves': 'ATL', 'Baltimore Orioles': 'BAL',
    'Boston Red Sox': 'BOS', 'Chicago Cubs': 'CHC', 'Chicago White Sox': 'CHW',
    'Cincinnati Reds': 'CIN', 'Cleveland Guardians': 'CLE', 'Colorado Rockies': 'COL',
    'Detroit Tigers': 'DET', 'Houston Astros': 'HOU', 'Kansas City Royals': 'KCR',
    'Los Angeles Angels': 'LAA', 'Los Angeles Dodgers': 'LAD', 'Miami Marlins': 'MIA',
    'Milwaukee Brewers': 'MIL', 'Minnesota Twins': 'MIN', 'New York Mets': 'NYM',
    'New York Yankees': 'NYY', 'Oakland Athletics': 'OAK', 'Philadelphia Phillies': 'PHI',
    'Pittsburgh Pirates': 'PIT', 'San Diego Padres': 'SDP', 'San Francisco Giants': 'SFG',
    'Seattle Mariners': 'SEA', 'St. Louis Cardinals': 'STL', 'Tampa Bay Rays': 'TBR',
    'Texas Rangers': 'TEX', 'Toronto Blue Jays': 'TOR', 'Washington Nationals': 'WSH'
}

def calculate_barrels(df):
    """Statcast Barrel: EV >= 98 & LA between 26-30 degrees"""
    if df.empty: return 0
    barrels = df[(df['launch_speed'] >= 98) & (df['launch_angle'].between(26, 30))]
    return (len(barrels) / len(df)) * 100 if len(df) > 0 else 0

def normalize_name(name):
    return str(name or '').strip().lower()


def get_team_abbr(team_name):
    team_name = str(team_name or '').strip()
    if not team_name:
        return 'TBD'
    return TEAM_MAP.get(team_name, team_name[:3].upper())


def load_bvp_data():
    bvp_path = DATA_DIR / 'bvp_data.js'
    if not bvp_path.exists():
        return []

    try:
        content = bvp_path.read_text(encoding='utf-8')
        match = re.search(r'const bvpData = (\[.*\]);', content, re.S)
        if not match:
            return []
        return json.loads(match.group(1))
    except Exception as e:
        print(f"Warning: failed to load BvP data: {e}")
        return []

def calculate_bvp_boost(hitter_name, pitcher_name, bvp_data):
    if not hitter_name or not pitcher_name or pitcher_name == 'TBD' or not bvp_data:
        return 0.0, ''

    matches = [
        row for row in bvp_data
        if normalize_name(row.get('batter_name')) == normalize_name(hitter_name)
        and normalize_name(row.get('pitcher_name')) == normalize_name(pitcher_name)
    ]

    if not matches:
        return 0.0, ''

    hr_count = sum(1 for row in matches if 'home run' in str(row.get('events', '')).lower())
    hard_hit_count = sum(1 for row in matches if float(row.get('launch_speed', 0) or 0) >= 100)
    avg_ev = sum(float(row.get('launch_speed', 0) or 0) for row in matches) / len(matches)

    boost = 0.0
    boost += min(hr_count * 0.45, 0.9)
    boost += min(max(hard_hit_count - hr_count, 0) * 0.20, 0.4)

    if avg_ev >= 105:
        boost += 0.15
    elif avg_ev >= 100:
        boost += 0.10

    boost = round(min(boost, 1.2), 2)
    summary = f"{hr_count} HR, {hard_hit_count} hard-hit events vs {pitcher_name}"
    return boost, summary

def get_advanced_hitter_metrics(mlbid):
    try:
        # Fetch 30 day window
        end_date = datetime.now().strftime('%Y-%m-%d')
        start_date = (datetime.now() - timedelta(days=30)).strftime('%Y-%m-%d')
        
        df = pb.statcast_batter(start_date, end_date, mlbid)
        
        # Early season fallback: If no 2026 data, pull end of 2025
        if df.empty:
            df = pb.statcast_batter("2025-09-01", "2025-10-01", mlbid)
            if df.empty: return None

        df = df.dropna(subset=['launch_speed', 'launch_angle'])
        df['game_date'] = pd.to_datetime(df['game_date'])
        
        last_7 = df[df['game_date'] >= (datetime.now() - timedelta(days=7))]
        
        # Metrics
        barrel_pct = calculate_barrels(df)
        max_ev = df['launch_speed'].max()
        avg_30 = df['launch_speed'].mean()
        avg_7 = last_7['launch_speed'].mean() if not last_7.empty else avg_30
        
        ev_trend = avg_7 - avg_30
        
        fb_df = df[df['bb_type'].isin(['fly_ball', 'line_drive'])]
        fb_ev = fb_df['launch_speed'].mean() if not fb_df.empty else 85
        
        return {
            "barrel_pct": barrel_pct,
            "max_ev": max_ev,
            "fb_ev": fb_ev,
            "ev_trend": ev_trend,
            "has_recent": not last_7.empty
        }
    except:
        return None

def generate_probability_payload(target_date, bvp_data):
    games = statsapi.schedule(date=target_date)
    payload = []

    for game in games:
        print(f"Analyzing: {game['away_name']} @ {game['home_name']}")

        pf = 1.0
        for team, factor in PARK_FACTORS.items():
            if team in game['home_name']:
                pf = factor

        for side in ['away', 'home']:
            team_id = game[f'{side}_id']
            try:
                roster = statsapi.get('team_roster', {'teamId': team_id})['roster']
            except:
                continue

            for p in roster:
                if p['position']['code'] == '1':
                    continue

                name = p['person']['fullName']
                p_id = p['person']['id']

                print(f"  Checking {name}...", end="\r")
                stats = get_advanced_hitter_metrics(p_id)

                if stats and stats['max_ev'] > 104:
                    s_power = min(stats['barrel_pct'] / 15 * 100, 100)
                    s_form = min(max(stats['fb_ev'] - 88, 0) / 12 * 100, 100)
                    s_trend = min(max(stats['ev_trend'] + 3, 0) / 6 * 100, 100)
                    s_park = min(((pf - 0.8) / 0.5) * 100, 100)

                    opp_pitcher = game.get('home_probable_pitcher' if side == 'away' else 'away_probable_pitcher') or 'TBD'
                    bvp_boost, bvp_summary = calculate_bvp_boost(name, opp_pitcher, bvp_data)

                    base_prob = (s_power * 0.2 + s_form * 0.15 + s_trend * 0.1 + s_park * 0.05) / 4.5
                    final_prob = round(min(base_prob + bvp_boost, 14.0), 1)

                    payload.append({
                        "date": target_date,
                        "name": name,
                        "team": get_team_abbr(game.get(f'{side}_name')),
                        "probability": final_prob,
                        "breakdown": {
                            "Power": int(s_power),
                            "Form": int(s_form),
                            "Trend": int(s_trend),
                            "Park": int(s_park)
                        },
                        "ev_trend_val": round(stats['ev_trend'], 1),
                        "ev_trend_label": "Heating Up" if stats['ev_trend'] > 1.5 else "Stable",
                        "max_ev": int(stats['max_ev']),
                        "max_ev_pct": int((stats['max_ev'] / 120) * 100),
                        "fb_ev": int(stats['fb_ev']),
                        "fb_ev_pct": int((stats['fb_ev'] / 112) * 100),
                        "opp_pitcher": opp_pitcher,
                        "opp_pitcher_full": opp_pitcher,
                        "park_factor": "Launch Pad" if pf > 1.1 else "Neutral",
                        "bvp_boost": bvp_boost,
                        "bvp_summary": bvp_summary
                    })

    return sorted(payload, key=lambda x: x['probability'], reverse=True)


def save_probability_payload(payload, target_date, default_filename=None, default_var_name=None):
    date_key = target_date.replace('-', '_')
    dated_output = DATA_DIR / f"hr_model_{target_date}.js"

    with open(dated_output, 'w', encoding='utf-8') as f:
        f.write(f"window.hrModelData_{date_key} = {json.dumps(payload, indent=2)};")

    if default_filename and default_var_name:
        with open(DATA_DIR / default_filename, 'w', encoding='utf-8') as f:
            f.write(f"const {default_var_name} = {json.dumps(payload, indent=2)};")

    return dated_output


def run_probability_model():
    print("--- ⚾ HR Probability Engine (daily) ---")
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    today = datetime.now().strftime('%Y-%m-%d')
    tomorrow = (datetime.now() + timedelta(days=1)).strftime('%Y-%m-%d')
    bvp_data = load_bvp_data()

    if bvp_data:
        print(f"Loaded {len(bvp_data)} BvP records for matchup-aware boosts")

    print(f"\nBuilding today's predictions for {today}")
    today_payload = generate_probability_payload(today, bvp_data)
    today_output = save_probability_payload(today_payload, today, 'hr_model_data.js', 'hrModelData')

    print(f"\nBuilding tomorrow's predictions for {tomorrow}")
    tomorrow_payload = generate_probability_payload(tomorrow, bvp_data)
    tomorrow_output = save_probability_payload(tomorrow_payload, tomorrow, 'hr_model_tomorrow.js', 'hrModelTomorrowData')

    print(f"\n✅ Success! {len(today_payload)} threats updated for today and {len(tomorrow_payload)} for tomorrow.")
    print(f"Saved: hr_model_data.js, {today_output.name}, hr_model_tomorrow.js, and {tomorrow_output.name}")

if __name__ == "__main__":
    run_probability_model()
