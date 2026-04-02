import statsapi
import pybaseball as pb
import pandas as pd
import json
import os
from datetime import datetime, timedelta

# --- 1. THE DATA LOOKUP ENGINE (NOW USING MLBID DIRECTLY) ---
def get_hitter_stats(mlbid):
    try:
        # Pull 2026 Data (Opening Day to Now)
        df_2026 = pb.statcast_batter("2026-03-20", datetime.now().strftime('%Y-%m-%d'), mlbid)
        
        # Pull late 2025 Data (For a reliable baseline)
        df_2025 = pb.statcast_batter("2025-08-01", "2025-10-01", mlbid)
        
        if df_2026.empty and df_2025.empty:
            return None

        all_data = pd.concat([df_2026, df_2025]).dropna(subset=['launch_speed'])
        
        # Calculate Trend: 2026 Avg vs 2025 Avg
        avg_2026 = df_2026['launch_speed'].mean() if not df_2026.empty else 0
        avg_2025 = df_2025['launch_speed'].mean() if not df_2025.empty else 0
        trend = avg_2026 - avg_2025 if avg_2026 > 0 else 0
        
        fb_df = all_data[all_data['bb_type'].isin(['fly_ball', 'line_drive'])]
        
        return {
            "trend": trend,
            "max_ev": all_data['launch_speed'].max(),
            "fb_ev": fb_df['launch_speed'].mean() if not fb_df.empty else 0,
            "has_recent": not df_2026.empty
        }
    except:
        return None

# --- 2. THE MAIN RUNNER ---
def run_daily_model():
    print("--- ⚾ HR Probability Engine: Direct ID Mode ---")
    if not os.path.exists('dataFiles'): os.makedirs('dataFiles')
    
    today = datetime.now().strftime('%Y-%m-%d')
    games = statsapi.schedule(date=today)
    payload = []
    
    # Analyze the first 3 games
    for game in games[:3]:
        print(f"\nMatchup: {game['away_name']} @ {game['home_name']}")
        
        # Get actual lineups or probable rosters
        for team_type in ['away', 'home']:
            team_id = game[f'{team_type}_id']
            # Get roster with IDs included
            roster = statsapi.get('team_roster', {'teamId': team_id})['roster']
            
            # Scan top hitters (avoiding pitchers)
            for p in roster:
                if p['position']['code'] == '1': continue # Skip Pitchers
                
                name = p['person']['fullName']
                p_id = p['person']['id']
                
                print(f"  Analysing {name}...", end="\r")
                stats = get_hitter_stats(p_id)
                
                if stats and stats['max_ev'] > 105:
                    print(f"  🔥 POWER FOUND: {name} ({int(stats['max_ev'])} MPH)")
                    
                    # Probability Logic
                    prob = 4.0
                    if stats['has_recent']: prob += 1.5
                    if stats['trend'] > 1.5: prob += 2.5
                    if stats['max_ev'] > 112: prob += 4.0
                    
                    payload.append({
                        "name": name,
                        "team": game[f'{team_type}_name'][:3].upper(),
                        "probability": round(prob, 1),
                        "ev_trend_val": round(stats['trend'], 1),
                        "ev_trend_label": "Hot" if stats['trend'] > 1 else "Stable",
                        "max_ev": int(stats['max_ev']),
                        "max_ev_pct": int((stats['max_ev'] / 120) * 100),
                        "fb_ev": int(stats['fb_ev']),
                        "fb_ev_pct": int((stats['fb_ev'] / 112) * 100),
                        "opp_pitcher": game.get('home_probable_pitcher' if team_type=='away' else 'away_probable_pitcher', 'TBD'),
                        "pitcher_hand": "RHP",
                        "park_factor": "Neutral"
                    })

    # Save and Sort
    payload = sorted(payload, key=lambda x: x['probability'], reverse=True)
    with open('dataFiles/hr_model_data.js', 'w') as f:
        f.write(f"const hrModelData = {json.dumps(payload, indent=2)};")
    
    print(f"\n\n✅ Success! {len(payload)} hitters updated in Dashboard.")

if __name__ == "__main__":
    run_daily_model()