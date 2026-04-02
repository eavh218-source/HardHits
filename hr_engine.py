import statsapi
import pybaseball as pb
import pandas as pd
import json
import os
from datetime import datetime, timedelta

# --- 1. CONFIGURATION & PARK FACTORS ---
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

def run_probability_model():
    print("--- ⚾ HR Probability Engine (daily) ---")
    if not os.path.exists('dataFiles'): os.makedirs('dataFiles')
    
    today = datetime.now().strftime('%Y-%m-%d')
    games = statsapi.schedule(date=today)
    
    payload = []

    # Analyze first few games
    for game in games[:4]:
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
                stats = get_advanced_hitter_metrics(p_id)
                
                if stats and stats['max_ev'] > 104:
                    # Normalized scoring
                    s_power = min(stats['barrel_pct'] / 15 * 100, 100)
                    s_form = min(max(stats['fb_ev'] - 88, 0) / 12 * 100, 100)
                    s_trend = min(max(stats['ev_trend'] + 3, 0) / 6 * 100, 100)
                    s_park = min(((pf - 0.8) / 0.5) * 100, 100)

                    # Final Prob (approx 2% - 14%)
                    final_prob = round((s_power*0.2 + s_form*0.15 + s_trend*0.1 + s_park*0.05) / 4.5, 1)

                    payload.append({
                        "name": name,
                        "team": game[f'{side}_name'][:3].upper(),
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
                        "opp_pitcher": game.get('home_probable_pitcher' if side=='away' else 'away_probable_pitcher', 'TBD'),
                        "park_factor": "Launch Pad" if pf > 1.1 else "Neutral"
                    })

    # Save
    payload = sorted(payload, key=lambda x: x['probability'], reverse=True)
    with open('dataFiles/hr_model_data.js', 'w') as f:
        f.write(f"const hrModelData = {json.dumps(payload, indent=2)};")
    
    print(f"\n✅ Success! {len(payload)} threats updated in Dashboard.")

if __name__ == "__main__":
    run_probability_model()
