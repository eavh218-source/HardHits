import json
import re
from datetime import datetime, timedelta, timezone
from zoneinfo import ZoneInfo

import pandas as pd
import pybaseball as pb
import statsapi

from paths import DATA_DIR

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

DATE_FILE_RE = re.compile(r"bvp_data_(\d{4}-\d{2}-\d{2})\.js$")


def format_game_time(raw_time):
    if not raw_time:
        return "TBD"

    try:
        normalized = raw_time.replace('Z', '+00:00')
        game_dt = datetime.fromisoformat(normalized)
        if game_dt.tzinfo is None:
            game_dt = game_dt.replace(tzinfo=timezone.utc)

        eastern_dt = game_dt.astimezone(ZoneInfo('America/New_York'))
        return eastern_dt.strftime('%I:%M %p ET').lstrip('0')
    except Exception:
        return "TBD"


def short_pitcher_name(full_name):
    return full_name.split(' ')[-1] if full_name and full_name != 'TBD' else 'TBD'


def analyze_bvp_for_date(target_date):
    target_obj = datetime.strptime(target_date, '%Y-%m-%d')
    start_year = f"{target_obj.year - 3}-01-01"

    print(f"Fetching BvP data for: {target_date}")
    try:
        sched = statsapi.schedule(date=target_date)
    except Exception as e:
        print(f"Error fetching schedule for {target_date}: {e}")
        sched = []

    final_payload = []
    daily_matchups = []

    for game in sched:
        if game.get('status') == 'Postponed':
            continue

        away_f = game.get('away_name')
        home_f = game.get('home_name')
        away_p_full = game.get('away_probable_pitcher', 'TBD')
        home_p_full = game.get('home_probable_pitcher', 'TBD')

        daily_matchups.append({
            "date": target_date,
            "time": format_game_time(game.get('game_datetime', '')),
            "away_abbr": TEAM_MAP.get(away_f, away_f[:3].upper() if away_f else "TBD"),
            "away_p": short_pitcher_name(away_p_full),
            "home_abbr": TEAM_MAP.get(home_f, home_f[:3].upper() if home_f else "TBD"),
            "home_p": short_pitcher_name(home_p_full)
        })

        matchups = [
            {'p': home_p_full, 'opp_id': game.get('away_id'), 'opp_name': game.get('away_name')},
            {'p': away_p_full, 'opp_id': game.get('home_id'), 'opp_name': game.get('home_name')}
        ]

        for matchup in matchups:
            if not matchup['p'] or matchup['p'] == 'TBD':
                continue

            print(f"--- Analyzing {matchup['p']} vs {matchup['opp_name']} ---")

            try:
                roster_data = statsapi.get('team_roster', {'teamId': matchup['opp_id']})
                current_batters = [b['person']['fullName'].lower() for b in roster_data.get('roster', [])]

                name_parts = matchup['p'].split()
                p_id_df = pb.playerid_lookup(name_parts[-1], " ".join(name_parts[:-1]))
                if p_id_df.empty:
                    continue

                mlb_id = int(p_id_df.iloc[0]['key_mlbam'])
                df = pb.statcast_pitcher(start_year, target_date, mlb_id)
                if df is None or df.empty:
                    continue

                filtered_df = df[((df['launch_speed'] >= 101) | (df['events'] == 'home_run'))].copy()

                for _, row in filtered_df.iterrows():
                    desc = str(row.get('des', ''))
                    words = desc.split(' ')
                    if len(words) < 2:
                        continue

                    potential_name = f"{words[0]} {words[1]}".strip().lower()
                    if any(potential_name in batter for batter in current_batters):
                        evt = str(row['events']).replace('_', ' ').title() if pd.notnull(row['events']) else 'Hit'
                        dist = int(row['hit_distance_sc']) if pd.notnull(row['hit_distance_sc']) else 0

                        final_payload.append({
                            "date": target_date,
                            "pitcher_name": matchup['p'],
                            "opponent_team": matchup['opp_name'],
                            "batter_name": potential_name.title(),
                            "launch_speed": round(float(row['launch_speed']), 1) if pd.notnull(row['launch_speed']) else 0.0,
                            "distance": dist,
                            "events": evt,
                            "game_date": str(row['game_date'])
                        })
            except Exception as e:
                print(f"Error on {matchup['p']}: {e}")

    final_payload = sorted(final_payload, key=lambda x: (x['distance'], x['launch_speed']), reverse=True)
    return daily_matchups, final_payload


def save_standard_file(target_date, daily_matchups, final_payload):
    output_path = DATA_DIR / 'bvp_data.js'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(f"const bvpDate = '{target_date}';\n")
        f.write(f"const dailyMatchups = {json.dumps(daily_matchups, indent=2)};\n")
        f.write(f"const bvpData = {json.dumps(final_payload, indent=2)};")


def save_tomorrow_file(target_date, daily_matchups, final_payload):
    output_path = DATA_DIR / 'bvp_data_tomorrow.js'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(f"const bvpTomorrowDate = '{target_date}';\n")
        f.write(f"const tomorrowMatchups = {json.dumps(daily_matchups, indent=2)};\n")
        f.write(f"const bvpTomorrowData = {json.dumps(final_payload, indent=2)};")


def save_dated_file(target_date, daily_matchups, final_payload):
    date_key = target_date.replace('-', '_')
    output_path = DATA_DIR / f'bvp_data_{target_date}.js'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(f"window.bvpDate_{date_key} = '{target_date}';\n")
        f.write(f"window.dailyMatchups_{date_key} = {json.dumps(daily_matchups, indent=2)};\n")
        f.write(f"window.bvpData_{date_key} = {json.dumps(final_payload, indent=2)};")


def update_bvp_index():
    dates = []
    for path in DATA_DIR.glob('bvp_data_*.js'):
        match = DATE_FILE_RE.match(path.name)
        if match:
            dates.append(match.group(1))

    dates = sorted(set(dates), reverse=True)

    index_content = """// BvP Historical Data Index\n// Load specific BvP date files as needed\n\nconst bvpHistoricalDates = [\n"""
    for date_str in dates:
        index_content += f'  "{date_str}",\n'

    index_content += """];

function loadBvpHistoricalData(dateStr) {
    const key = dateStr.replace(/-/g, '_');

    if (window[`bvpData_${key}`] || window[`dailyMatchups_${key}`]) {
        return Promise.resolve();
    }

    const script = document.createElement('script');
    script.src = `../data/bvp_data_${dateStr}.js`;

    return new Promise((resolve, reject) => {
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load BvP data for ${dateStr}`));
        document.head.appendChild(script);
    });
}
"""

    with open(DATA_DIR / 'bvp_index.js', 'w', encoding='utf-8') as f:
        f.write(index_content)


def main():
    print("=== ⚾ BvP Analytics Generator ===")
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    today = datetime.now().strftime('%Y-%m-%d')
    tomorrow = (datetime.now() + timedelta(days=1)).strftime('%Y-%m-%d')

    today_matchups, today_payload = analyze_bvp_for_date(today)
    save_standard_file(today, today_matchups, today_payload)
    save_dated_file(today, today_matchups, today_payload)
    print(f"SUCCESS: Today's BvP data written for {today} ({len(today_payload)} entries)")

    tomorrow_matchups, tomorrow_payload = analyze_bvp_for_date(tomorrow)
    save_tomorrow_file(tomorrow, tomorrow_matchups, tomorrow_payload)
    save_dated_file(tomorrow, tomorrow_matchups, tomorrow_payload)
    print(f"SUCCESS: Tomorrow's BvP data written for {tomorrow} ({len(tomorrow_payload)} entries)")

    update_bvp_index()
    print("SUCCESS: bvp_index.js updated")


if __name__ == '__main__':
    main()