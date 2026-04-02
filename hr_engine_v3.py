import statsapi
import pybaseball as pb
import pandas as pd
import json
import os
from datetime import datetime, timedelta

# --- CONFIGURATION ---
# Set the historical date you want to analyze
TARGET_DATE_STR = "2026-04-01" 
TARGET_DATE = datetime.strptime(TARGET_DATE_STR, '%Y-%m-%d')

PARK_FACTORS = {
    'Reds': 1.28, 'Dodgers': 1.21, 'Phillies': 1.16, 
    'Yankees': 1.12, 'Rockies': 1.11, 'Athletics': 1.09,
    'Mariners': 0.82, 'Padres': 0.94, 'Giants': 0.83
}

def calculate_barrels(df):
    """Statcast Barrel: EV >= 98 & LA between 26-30 degrees"""
    if df.empty: return 0
    barrels = df[(df['launch_speed'] >= 98) & (df['launch_angle'].between(26, 30))]
    return (len(barrels) / len(df)) * 100 if len(df) > 0 else 0

def get_historical_metrics(mlbid, ref_date):
    """Fetches Statcast data relative to the provided reference date."""
    try:
        # Looking back 30 days from the Target Date
        end_date_str = ref_date.strftime('%Y-%m-%d')
        start_date_str = (ref_date - timedelta(days=30)).strftime('%Y-%m-%d')
        
        df = pb.statcast_batter(start_date_str, end_date_str, mlbid)
        
        if df.empty: return None

        df = df.dropna(subset=['launch_speed', 'launch_angle'])
        df['game_date'] = pd.to_datetime(df['game_date'])
        
        # 7-day trend relative to Target Date
        last_7_window = ref_date - timedelta(days=7)
        last_7 = df[df['game_date'] >= last_7_window]
        
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
            "ev_trend": ev_trend
        }
    except Exception as e:
        return None

def run_backdated_model():
    print(f"--- ⚾ Backdated HR Probability Engine (Simulating: {TARGET_DATE_STR}) ---")
    if not os.path.exists('dataFiles'): os.makedirs('dataFiles')
    
    # Fetch schedule for the specific historical day
    games = statsapi.schedule(date=TARGET_DATE_STR)
    payload = []

    for game in games[:5]:  # Limited to 5 games for performance
        print(f"Analyzing: {game['away_name']} @ {game['home_name']}")
        
        pf = 1.0
        for team, factor in PARK_FACTORS.items():
            if team in game['home_name']: pf = factor

        for side in ['away', 'home']:
            team_id = game[f'{side}_id']
            try:
                roster = statsapi.get('team_roster', {'teamId': team_id})['roster']
            except:
                continue
            
            for p in roster:
                if p['position']['code'] == '1': continue
                
                name = p['person']['fullName']
                p_id = p['person']['id']
                
                print(f"  Checking {name}...", end="\r")
                stats = get_historical_metrics(p_id, TARGET_DATE)
                
                if stats and stats['max_ev'] > 104:
                    s_power = min(stats['barrel_pct'] / 15 * 100, 100)
                    s_form = min(max(stats['fb_ev'] - 88, 0) / 12 * 100, 100)
                    s_trend = min(max(stats['ev_trend'] + 3, 0) / 6 * 100, 100)
                    s_park = min(((pf - 0.8) / 0.5) * 100, 100)

                    final_prob = round((s_power*0.2 + s_form*0.15 + s_trend*0.1 + s_park*0.05) / 4.5, 1)

                    payload.append({
                        "name": name,
                        "team": game[f'{side}_name'][:3].upper(),
                        "probability": final_prob,
                        "ev_trend_val": round(stats['ev_trend'], 1),
                        "max_ev": int(stats['max_ev']),
                        "fb_ev": int(stats['fb_ev'])
                    })

    # --- SAVE LOGIC ---
    # Filename with DASHES to match HTML request: hr_model_2026-04-01.js
    output_path = f'dataFiles/hr_model_{TARGET_DATE_STR}.js' 
    
    # Variable with UNDERSCORES for JS compatibility: hrModelData_2026_04_01
    var_date = TARGET_DATE_STR.replace('-', '_')
    
    payload = sorted(payload, key=lambda x: x['probability'], reverse=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        # 'window.' ensures the variable is globally accessible to the dashboard
        f.write(f"window.hrModelData_{var_date} = {json.dumps(payload, indent=2)};")
    
    print(f"\n✅ Historical data for {TARGET_DATE_STR} saved to {output_path}")

if __name__ == "__main__":
    run_backdated_model()