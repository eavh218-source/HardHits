from pybaseball import statcast
import pandas as pd
from datetime import datetime, timedelta
import os
import json

# --- CONFIGURATION ---
SAVE_PATH = r"C:\code\HardHits\dataFiles"
FILENAME = "data.js" # Changed to .js to bypass browser security

def update_dashboard():
    # 1. Get Yesterday's Date
    yesterday_dt = datetime.now() - timedelta(1)
    date_str = yesterday_dt.strftime('%Y-%m-%d')
    display_date = yesterday_dt.strftime('%B %d, %Y')
    
    print(f"Fetching 101+ MPH hits for {date_str}...")
    
    try:
        # 2. Pull Statcast Data
        data = statcast(start_dt=date_str, end_dt=date_str)
        
        # 3. Filter for 101+ MPH (Lowered from 105)
        # Note: 'player_name' in statcast is usually the Pitcher. 
        # We need to find the batter. 
        # We'll keep both for the dashboard.
        bbe = data.dropna(subset=['launch_speed', 'launch_angle'])
        hard_hits = bbe[bbe['launch_speed'] >= 101].copy()
        
        # 4. Prepare Data for JS
        # We include 'des' (description) which often contains the batter name in text
        # or we just use the 'batter' ID if needed, but 'player_name' is usually the pitcher.
        # For a simple dashboard, let's grab the key columns:
        dashboard_list = hard_hits[[
            'player_name',    # Pitcher
            'des',            # Description (e.g. "Aaron Judge homers...")
            'launch_speed', 
            'launch_angle', 
            'events', 
            'hit_distance_sc'
        ]].to_dict(orient='records')

        # 5. Create the JavaScript File
        if not os.path.exists(SAVE_PATH):
            os.makedirs(SAVE_PATH)
            
        js_content = f"const reportDate = '{display_date}';\n"
        js_content += f"const statcastData = {json.dumps(dashboard_list, indent=4)};"
        
        with open(os.path.join(SAVE_PATH, FILENAME), 'w', encoding='utf-8') as f:
            f.write(js_content)
            
        print(f"✅ Created data.js with {len(dashboard_list)} hits.")
        
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    update_dashboard()