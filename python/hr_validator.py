import pybaseball as pb
import json
import pandas as pd

from paths import DATA_DIR
import re
from datetime import datetime, timedelta

def run_validator():
    # 1. Set the date to yesterday
    yesterday = (datetime.now() - timedelta(days=1)).strftime('%Y-%m-%d')
    print(f"--- 🔍 HR Validator | Checking Results for: {yesterday} ---")
    
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    # 2. Fetch Statcast data
    try:
        data = pb.statcast(start_dt=yesterday, end_dt=yesterday)
        # Filter for home runs
        hrs = data[data['events'] == 'home_run'].copy()
    except Exception as e:
        print(f"Error fetching data: {e}")
        return

    if hrs.empty:
        print(f"No home runs recorded on {yesterday}.")
        return

    # 3. Extract BATTER names from the play description
    results = []
    for _, row in hrs.iterrows():
        # The 'des' column looks like: "Juan Soto homers (1) on a fly ball..."
        # We extract everything before "homers"
        description = row['des']
        match = re.match(r"^(.*?) homers", description)
        
        if match:
            batter_name = match.group(1)
        else:
            # Fallback to the Statcast name format if regex fails
            name_parts = row['player_name'].split(", ")
            batter_name = f"{name_parts[1]} {name_parts[0]}" if len(name_parts) > 1 else row['player_name']
        
        results.append({
            "name": batter_name,
            "ev": int(row['launch_speed']) if pd.notnull(row['launch_speed']) else 0,
            "dist": int(row['hit_distance_sc']) if pd.notnull(row['hit_distance_sc']) else 0,
            "launch_angle": int(row['launch_angle']) if pd.notnull(row['launch_angle']) else 0,
            "status": "🎯 HOME RUN"
        })

    # 4. Save with window scope for easy HTML access
    with open(DATA_DIR / 'hr_results_data.js', 'w', encoding='utf-8') as f:
        f.write(f"window.hrResultsData = {json.dumps(results, indent=2)};")
    
    print(f"✅ Success! Logged {len(results)} actual Home Runs hit by BATTERS.")

if __name__ == "__main__":
    run_validator()