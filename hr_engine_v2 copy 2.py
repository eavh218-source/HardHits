import statsapi
import pybaseball as pb
import pandas as pd
import numpy as np
import json
from datetime import datetime, timedelta

# --- 1. CONFIGURATION & PARK FACTORS ---
# 1.00 is neutral. > 1.10 is a launch pad.
PARK_FACTORS = {
    'Reds': 1.28, 'Dodgers': 1.21, 'Phillies': 1.16, 
    'Yankees': 1.12, 'Rockies': 1.11, 'Athletics': 1.09,
    'Mariners': 0.82, 'Padres': 0.94, 'Giants': 0.83
}

def calculate_barrels(df):
    """Statcast Barrel: EV >= 98 & LA 26-30 (Simplified standard)"""
    if df.empty: return 0
    barrels = df[(df['launch_speed'] >= 98) & (df['launch_angle'].between(26, 30))]
    return (len(barrels) / len(df)) * 100 if len(df) > 0 else 0

# --- 2. THE CORE SCORING ENGINE ---
def get_advanced_hitter_metrics(mlbid, first, last):
    try:
        # Fetch 30 day window for trends
        end_date = datetime.now().strftime('%Y-%m-%d')
        start_date = (datetime.now() - timedelta(days=30)).strftime('%Y-%m-%d')
        
        df = pb.statcast_batter(start_date, end_date, mlbid)
        if df.empty: return None

        df = df.dropna(subset=['launch_speed', 'launch_angle'])
        df['game_date'] = pd.to_datetime(df['game_date'])
        
        # Windows
        last_7 = df[df['game_date'] >= (datetime.now() - timedelta(days=7))]
        last_14 = df[df['game_date'] >= (datetime.now() - timedelta(days=14))]
        
        # 1. Batter Factors
        barrel_pct = calculate_barrels(df)
        recent_hr = len(df[df['events'] == 'home_run'])
        
        # 2. Exit Velocity Signals
        max_ev_7 = last_7['launch_speed'].max() if not last_7.empty else 0
        avg_ev_14 = last_14['launch_speed'].mean() if not last_14.empty else 0
        
        fb_df = df[df['bb_type'].isin(['fly_ball', 'line_drive'])]
        recent_fb_ev = fb_df[fb_df['game_date'] >= (datetime.now() - timedelta(days=14))]['launch_speed'].mean()
        
        # EV Trend (7 vs 30)
        avg_7 = last_7['launch_speed'].mean() if not last_7.empty else 0
        avg_30 = df['launch_speed'].mean()
        ev_trend = avg_7 - avg_30 if avg_7 > 0 else 0
        
        return {
            "barrel_pct": barrel_pct,
            "recent_hr_rate": recent_hr / len(df) if len(df) > 0 else 0,
            "max_ev": max_ev_7,
            "avg_ev": avg_ev_14,
            "fb_ev": recent_fb_ev,
            "ev_trend": ev_trend,
            "hand": df.iloc[0]['stand']
        }
    except Exception as e:
        return None

def get_pitcher_danger_score(name):
    """Analyzes pitcher HR vulnerability."""
    # For MVP, we return a baseline 'Danger' score based on statsapi
    # In full prod, you'd pull Statcast pitching_stats here
    return 12.5 # Average MLB HR/FB%

# --- 3. FINAL FORMULA INTEGRATION ---
def run_probability_model():
    print("--- ⚾ Processing HR Probability Model v2.0 ---")
    today = datetime.now().strftime('%Y-%m-%d')
    games = statsapi.schedule(date=today)
    payload = []

    for game in games[:5]: # Testing first 5 games
        print(f"Analyzing {game['away_name']} @ {game['home_name']}")
        
        park_name = game['venue_name']
        # Match park factor
        pf = 1.0
        for team, factor in PARK_FACTORS.items():
            if team in game['home_name']: pf = factor

        for side in ['away', 'home']:
            team_id = game[f'{side}_id']
            roster = statsapi.get('team_roster', {'teamId': team_id})['roster']
            opp_p_hand = "R" # Default

            for p in roster[:12]: # Top hitters
                if p['position']['code'] == '1': continue
                
                name = p['person']['fullName']
                p_id = p['person']['id']
                
                b_stats = get_advanced_hitter_metrics(p_id, "", "")
                if b_stats and b_stats['max_ev'] > 102:
                    
                    # NORMALIZE COMPONENTS (0 to 1)
                    s_barrel = min(b_stats['barrel_pct'] / 15, 1)
                    s_fb_ev = min(max(b_stats['fb_ev'] - 88, 0) / 12, 1)
                    s_trend = min(max(b_stats['ev_trend'] + 3, 0) / 6, 1)
                    
                    # PLATOON (0.05 Weight)
                    platoon = 1.0 if b_stats['hand'] != opp_p_hand else 0.5
                    
                    # SCORING FORMULA
                    # HR_Score = (Barrel% * 0.20) + (Recent EV Flyballs * 0.15) + (EV Trend * 0.10) ...
                    raw_score = (
                        (s_barrel * 0.20) + 
                        (s_fb_ev * 0.15) + 
                        (s_trend * 0.10) + 
                        (b_stats['recent_hr_rate'] * 5 * 0.15) + # Weighted HR rate
                        ((pf - 0.8) / 0.5 * 0.07) +              # Park Factor
                        (platoon * 0.05)
                    )
                    
                    # Multiply by baseline 4%
                    final_prob = round(raw_score * 12.0, 1) 

                    payload.append({
                        "name": name,
                        "team": game[f'{side}_name'][:3].upper(),
                        "probability": final_prob,
                        "ev_trend_val": round(b_stats['ev_trend'], 1),
                        "ev_trend_label": "Heating Up" if b_stats['ev_trend'] > 2 else "Stable",
                        "max_ev": int(b_stats['max_ev']),
                        "max_ev_pct": int((b_stats['max_ev'] / 118) * 100),
                        "fb_ev": int(b_stats['fb_ev']),
                        "fb_ev_pct": int((b_stats['fb_ev'] / 110) * 100),
                        "opp_pitcher": game.get('home_probable_pitcher' if side=='away' else 'away_probable_pitcher', 'TBD'),
                        "park_factor": "Launch Pad" if pf > 1.1 else ("Pitcher's Park" if pf < 0.9 else "Neutral")
                    })

    # Sort & Save
    payload = sorted(payload, key=lambda x: x['probability'], reverse=True)
    with open('dataFiles/hr_model_data.js', 'w') as f:
        f.write(f"const hrModelData = {json.dumps(payload, indent=2)};")
    
    print(f"✅ Success! {len(payload)} processed with full scoring logic.")

if __name__ == "__main__":
    run_probability_model()