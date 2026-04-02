import statsapi
import pybaseball as pb
import pandas as pd
import json
from datetime import datetime, timedelta
import re

from paths import DATA_DIR

# --- CONFIGURATION ---
START_DATE = datetime(2026, 3, 25)
END_DATE = datetime(2026, 4, 2)  # April 2 is today

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

def get_historical_metrics(mlbid, ref_date):
    """Fetches Statcast data relative to the provided reference date."""
    try:
        end_date_str = ref_date.strftime('%Y-%m-%d')
        start_date_str = (ref_date - timedelta(days=30)).strftime('%Y-%m-%d')
        
        df = pb.statcast_batter(start_date_str, end_date_str, mlbid)
        
        if df.empty: return None

        df = df.dropna(subset=['launch_speed', 'launch_angle'])
        df['game_date'] = pd.to_datetime(df['game_date'])
        
        last_7_window = ref_date - timedelta(days=7)
        last_7 = df[df['game_date'] >= last_7_window]
        
        barrel_pct = calculate_barrels(df)
        max_ev = df['launch_speed'].max()
        avg_30 = df['launch_speed'].mean()
        avg_7 = last_7['launch_speed'].mean() if not last_7.empty else avg_30
        
        ev_trend = avg_7 - avg_30
        
        fb_df = df[df['bb_type'].isin(['fly_ball', 'line_drive'])]
        fb_ev = fb_df['launch_speed'].mean() if not fb_df.empty else 85
        
        fb_ev_pct = (fb_ev / 100) * 100 if fb_ev > 0 else 0
        max_ev_pct = (max_ev / 110) * 100 if max_ev > 0 else 0
        
        return {
            "barrel_pct": round(barrel_pct, 1),
            "max_ev": round(max_ev, 1),
            "fb_ev": round(fb_ev, 1),
            "ev_trend": round(ev_trend, 2),
            "max_ev_pct": round(max_ev_pct, 1),
            "fb_ev_pct": round(fb_ev_pct, 1)
        }
    except Exception as e:
        print(f"  [Skip] MLB ID {mlbid}: {str(e)[:50]}")
        return None

def generate_predictions_for_date(target_date):
    """Generate HR probability predictions for a specific date."""
    target_date_str = target_date.strftime('%Y-%m-%d')
    
    try:
        games = statsapi.schedule(date=target_date_str)
    except:
        return []
    
    payload = []
    
    for game in games[:8]:
        home_team = game.get('home_name', '')
        away_team = game.get('away_name', '')
        
        pf = 1.0
        for team, factor in PARK_FACTORS.items():
            if team in home_team:
                pf = factor
        
        for side in ['away', 'home']:
            team_id = game.get(f'{side}_id')
            if not team_id:
                continue
                
            try:
                roster = statsapi.get('team_roster', {'teamId': team_id}).get('roster', [])
            except:
                continue
            
            for player in roster[:9]:
                person = player.get('person', {})
                mlbid = person.get('id')
                full_name = person.get('fullName', '')
                
                if not mlbid or not full_name:
                    continue
                
                metrics = get_historical_metrics(mlbid, target_date)
                if not metrics:
                    continue
                
                team_full = home_team if side == 'home' else away_team
                team_abbr = TEAM_MAP.get(team_full, 'UNK')
                
                power_score = (metrics['max_ev_pct'] * 0.20)
                form_score = (metrics['barrel_pct'])
                trend_score = min(max((metrics['ev_trend'] / 5) * 100, 0), 100) * 0.10
                park_score = (pf * 10)
                
                probability = min((power_score + form_score + trend_score + park_score) / 5, 10)
                
                ev_trend_val = metrics['ev_trend']
                ev_trend_label = "Hot" if ev_trend_val > 1.5 else "Stable"
                
                payload.append({
                    "date": target_date_str,
                    "name": full_name,
                    "team": team_abbr,
                    "probability": round(probability, 1),
                    "breakdown": {
                        "Power": round(metrics['max_ev_pct'], 0),
                        "Form": round(min(metrics['barrel_pct'] * 1.5, 100), 0),
                        "Trend": round(min(max(trend_score, 0), 100), 0),
                        "Park": round(min(pf * 25, 100), 0)
                    },
                    "ev_trend_val": round(ev_trend_val, 2),
                    "ev_trend_label": ev_trend_label,
                    "max_ev": round(metrics['max_ev'], 1),
                    "max_ev_pct": round(metrics['max_ev_pct'], 0),
                    "fb_ev": round(metrics['fb_ev'], 1),
                    "fb_ev_pct": round(metrics['fb_ev_pct'], 0),
                    "opp_pitcher": "TBD",
                    "park_factor": "Neutral" if 0.95 <= pf <= 1.05 else ("Favorable" if pf > 1.05 else "Unfavorable")
                })
    
    return payload

def fetch_results_for_date(target_date):
    """Fetch actual home run results for a specific date."""
    target_date_str = target_date.strftime('%Y-%m-%d')
    
    try:
        data = pb.statcast(start_dt=target_date_str, end_dt=target_date_str)
        hrs = data[data['events'] == 'home_run'].copy()
    except Exception as e:
        print(f"  [Results] Could not fetch for {target_date_str}: {str(e)[:40]}")
        return []
    
    if hrs.empty:
        return []
    
    results = []
    for _, row in hrs.iterrows():
        description = row['des']
        match = re.match(r"^(.*?) homers", description)
        
        if match:
            batter_name = match.group(1)
        else:
            name_parts = row['player_name'].split(", ")
            batter_name = f"{name_parts[1]} {name_parts[0]}" if len(name_parts) > 1 else row['player_name']
        
        results.append({
            "date": target_date_str,
            "name": batter_name,
            "ev": int(row['launch_speed']) if pd.notnull(row['launch_speed']) else 0,
            "dist": int(row['hit_distance_sc']) if pd.notnull(row['hit_distance_sc']) else 0,
            "launch_angle": int(row['launch_angle']) if pd.notnull(row['launch_angle']) else 0,
            "status": "🎯 HOME RUN"
        })
    
    return results

def run_historical_generation():
    print("=== 📊 Historical Data Generator ===")
    print(f"Generating data from {START_DATE.strftime('%Y-%m-%d')} to {(END_DATE - timedelta(days=1)).strftime('%Y-%m-%d')}\n")
    
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    
    all_predictions = []
    all_results = []
    
    current_date = START_DATE
    day_count = 0
    
    while current_date < END_DATE:
        day_count += 1
        date_str = current_date.strftime('%Y-%m-%d')
        print(f"[{day_count}] {date_str}")
        
        predictions = generate_predictions_for_date(current_date)
        all_predictions.extend(predictions)
        print(f"  ✓ {len(predictions)} predictions")
        
        results = fetch_results_for_date(current_date)
        all_results.extend(results)
        print(f"  ✓ {len(results)} actual HRs")
        
        current_date += timedelta(days=1)
    
    # Save All Predictions
    with open(DATA_DIR / 'hr_model_historical.js', 'w', encoding='utf-8') as f:
        f.write(f"const hrModelHistoricalData = {json.dumps(all_predictions, indent=2)};")
    print(f"\n✅ Saved {len(all_predictions)} predictions → hr_model_historical.js")
    
    # Save All Results
    with open(DATA_DIR / 'hr_results_historical.js', 'w', encoding='utf-8') as f:
        f.write(f"window.hrResultsHistoricalData = {json.dumps(all_results, indent=2)};")
    print(f"✅ Saved {len(all_results)} results → hr_results_historical.js")

if __name__ == "__main__":
    run_historical_generation()
