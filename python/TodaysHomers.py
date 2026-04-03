import requests
import json
from datetime import datetime, timedelta

from paths import DATA_DIR

def fetch_hr_data(date_str):
    print(f"--- Fetching LIVE Statcast Data for {date_str} ---")
    sched_url = f"https://statsapi.mlb.com/api/v1/schedule/games/?sportId=1&date={date_str}"
    found_hrs = []

    try:
        response = requests.get(sched_url)
        sched_data = response.json()
        dates = sched_data.get('dates', [])
        games = dates[0].get('games', []) if dates else []
    except Exception as e:
        print(f"Failed to fetch schedule: {e}")
        games = []

    for game in games:
        game_id = game['gamePk']
        away_team = game['teams']['away']['team']['name']
        home_team = game['teams']['home']['team']['name']
        
        state = game.get('status', {}).get('abstractGameState', '')
        # Only skip if the game hasn't started yet
        if state == 'Preview': continue

        print(f"Analyzing {away_team} @ {home_team}...")
        live_url = f"https://statsapi.mlb.com/api/v1.1/game/{game_id}/feed/live"
        
        try:
            live_data = requests.get(live_url).json()
            all_plays = live_data.get('liveData', {}).get('plays', {}).get('allPlays', [])
            
            for play in all_plays:
                result = play.get('result', {})
                if result.get('event', '').lower() == 'home run':
                    hit_data = play.get('hitData', {})
                    
                    if not hit_data.get('totalDistance'):
                        for event in play.get('playEvents', []):
                            if 'hitData' in event:
                                hit_data = event['hitData']
                                break

                    matchup = play.get('matchup', {})
                    batter = matchup.get('batter', {}).get('fullName', 'Unknown')
                    pitcher = matchup.get('pitcher', {}).get('fullName', 'Unknown')
                    is_top = play.get('about', {}).get('isTopInning', True)
                    
                    b_team = away_team if is_top else home_team
                    p_team = home_team if is_top else away_team

                    ev = hit_data.get('launchSpeed', 0)
                    la = hit_data.get('launchAngle', 0)
                    dist = hit_data.get('totalDistance', 0)

                    if ev > 0 or dist > 0:
                        print(f"   ✅ Found Stats: {batter} - {dist} FT / {ev} MPH")
                        found_hrs.append({
                            "date": date_str,
                            "batter": batter,
                            "name": batter,
                            "batter_team": b_team,
                            "team": b_team,
                            "pitcher": pitcher,
                            "pitcher_team": p_team,
                            "exit_velo": ev,
                            "ev": ev,
                            "launch_angle": la,
                            "distance": dist,
                            "dist": dist,
                            "status": "🎯 HOME RUN"
                        })
        except Exception as e:
            print(f"   Error: {e}")
    
    return found_hrs

# --- MAIN LOGIC ---
today = datetime.now().strftime('%Y-%m-%d')
hr_list = fetch_hr_data(today)
target_date = today

# If no data for today, fetch yesterday's data
if not hr_list:
    yesterday = (datetime.now() - timedelta(1)).strftime('%Y-%m-%d')
    print(f"\nNo data for today ({today}). Falling back to yesterday...")
    hr_list = fetch_hr_data(yesterday)
    target_date = yesterday

# --- EXPORT ---
output_path = DATA_DIR / 'todays_hrs.js'
dated_output_path = DATA_DIR / f"todays_hrs_{target_date}.js"
dated_results_path = DATA_DIR / f"hr_results_{target_date}.js"
date_key = target_date.replace('-', '_')

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(f"const hrUpdateDate = '{target_date}';\n")
    f.write(f"const todaysHRData = {json.dumps(hr_list, indent=2)};")

with open(dated_output_path, 'w', encoding='utf-8') as f:
    f.write(f"window.hrUpdateDate_{date_key} = '{target_date}';\n")
    f.write(f"window.todaysHRData_{date_key} = {json.dumps(hr_list, indent=2)};")

with open(dated_results_path, 'w', encoding='utf-8') as f:
    f.write(f"window.hrResultsData_{date_key} = {json.dumps(hr_list, indent=2)};")

print(f"\nSUCCESS: Captured {len(hr_list)} entries for {target_date}.")
print(f"Saved: {output_path.name}, {dated_output_path.name}, and {dated_results_path.name}")