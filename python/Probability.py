from pybaseball import statcast_batter, playerid_lookup
from datetime import datetime, timedelta
import pandas as pd
import numpy as np

def get_ev_trend(first_name, last_name):
    # 1. Get Player ID
    try:
        pl_info = playerid_lookup(last_name, first_name)
        mlbid = pl_info.iloc[0]['key_mlbam']
    except:
        return f"Could not find ID for {first_name} {last_name}"

    # 2. Setup Dates
    today = datetime.now()
    start_date = (today - timedelta(days=30)).strftime('%Y-%m-%d')
    end_date = today.strftime('%Y-%m-%d')
    
    # 3. Fetch Statcast Data (Batting)
    print(f"Fetching 30-day data for {first_name} {last_name}...")
    df = statcast_batter(start_date, end_date, mlbid)
    
    if df.empty:
        return {"error": "No data found for date range"}

    # Filter for Batted Ball Events (BBE) only
    df = df.dropna(subset=['launch_speed'])
    df['game_date'] = pd.to_datetime(df['game_date'])

    # 4. Split into Windows
    seven_days_ago = today - timedelta(days=7)
    
    last_7_df = df[df['game_date'] >= seven_days_ago]
    last_30_df = df # The whole pull is 30 days
    
    # 5. Calculate Averages
    avg_7 = last_7_df['launch_speed'].mean() if not last_7_df.empty else 0
    avg_30 = last_30_df['launch_speed'].mean() if not last_30_df.empty else 0
    
    # 6. Trend Logic
    trend = avg_7 - avg_30
    signal = "Stable"
    multiplier = 1.0
    
    if trend > 2.0:
        signal = "Heating Up 🔥"
        multiplier = 1.15
    elif trend < -2.0:
        signal = "Cooling Off ❄️"
        multiplier = 0.85

    return {
        "name": f"{first_name} {last_name}",
        "avg_7": round(avg_7, 1),
        "avg_30": round(avg_30, 1),
        "trend": round(trend, 2),
        "signal": signal,
        "multiplier": multiplier
    }

# --- TEST IT ---
if __name__ == "__main__":
    # Test with a known power hitter
    result = get_ev_trend("Aaron", "Judge")
    print(result)