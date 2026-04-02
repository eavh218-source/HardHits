import statsapi
import pybaseball as pb
import pandas as pd
import json
from datetime import datetime

from paths import DATA_DIR

# 1. Team Abbreviation Mapping
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

# 2. Dynamic Date Setup
# Use current system date instead of hardcoded string
today_obj = datetime.now()
target_date = today_obj.strftime('%Y-%m-%d')
start_year = f"{today_obj.year - 3}-01-01" # Pull 3 years of historical data

print(f"Fetching live data for: {target_date}")

try:
    sched = statsapi.schedule(date=target_date)
except Exception as e:
    print(f"Error fetching schedule: {e}")
    sched = []

final_payload = []
daily_matchups = []

for game in sched:
    if game.get('status') == 'Postponed': continue
    
    # Time Formatting
    raw_time = game.get('game_datetime', '')
    game_time = "TBD"
    if raw_time and 'T' in raw_time:
        try:
            game_time = f"{raw_time.split('T')[1][:5]} UTC"
        except:
            game_time = "TBD"

    # Matchup Data
    away_f = game.get('away_name')
    home_f = game.get('home_name')
    away_p_full = game.get('away_probable_pitcher', 'TBD')
    home_p_full = game.get('home_probable_pitcher', 'TBD')
    
    daily_matchups.append({
        "time": game_time,
        "away_abbr": TEAM_MAP.get(away_f, away_f[:3].upper() if away_f else "TBD"),
        "away_p": away_p_full.split(' ')[-1] if away_p_full != "TBD" else "TBD",
        "home_abbr": TEAM_MAP.get(home_f, home_f[:3].upper() if home_f else "TBD"),
        "home_p": home_p_full.split(' ')[-1] if home_p_full != "TBD" else "TBD"
    })

    # Historical BvP Analysis
    matchups = [
        {'p': home_p_full, 'p_team': game.get('home_id'), 'opp_id': game.get('away_id'), 'opp_name': game.get('away_name')},
        {'p': away_p_full, 'p_team': game.get('away_id'), 'opp_id': game.get('home_id'), 'opp_name': game.get('home_name')}
    ]

    for m in matchups:
        if not m['p'] or m['p'] == "TBD": continue
        print(f"--- Analyzing {m['p']} vs {m['opp_name']} ---")
        
        try:
            roster_data = statsapi.get('team_roster', {'teamId': m['opp_id']})
            current_batters = [b['person']['fullName'].lower() for b in roster_data.get('roster', [])]

            name_parts = m['p'].split()
            p_id_df = pb.playerid_lookup(name_parts[-1], " ".join(name_parts[:-1]))
            
            if p_id_df.empty: continue
            mlb_id = int(p_id_df.iloc[0]['key_mlbam'])

            df = pb.statcast_pitcher(start_year, target_date, mlb_id)
            if df is None or df.empty: continue

            filtered_df = df[((df['launch_speed'] >= 101) | (df['events'] == 'home_run'))].copy()

            for _, row in filtered_df.iterrows():
                desc = str(row.get('des', ''))
                words = desc.split(' ')
                if len(words) < 2: continue
                
                potential_name = f"{words[0]} {words[1]}".strip().lower()

                if any(potential_name in b for b in current_batters):
                    evt = str(row['events']).replace('_', ' ').title() if pd.notnull(row['events']) else "Hit"
                    
                    # Ensure N/A distances are handled as 0
                    dist = int(row['hit_distance_sc']) if pd.notnull(row['hit_distance_sc']) else 0

                    final_payload.append({
                        "pitcher_name": m['p'],
                        "opponent_team": m['opp_name'],
                        "batter_name": potential_name.title(),
                        "launch_speed": float(row['launch_speed']) if pd.notnull(row['launch_speed']) else 0.0,
                        "distance": dist,
                        "events": evt,
                        "game_date": str(row['game_date'])
                    })
        except Exception as e:
            print(f"Error on {m['p']}: {e}")

# Save to JS file
output_path = DATA_DIR / 'bvp_data.js'
with open(output_path, 'w') as f:
    f.write(f"const bvpDate = '{target_date}';\n")
    f.write(f"const dailyMatchups = {json.dumps(daily_matchups, indent=2)};\n")
    f.write(f"const bvpData = {json.dumps(final_payload, indent=2)};")

print(f"\nSUCCESS: Data written for {target_date}")