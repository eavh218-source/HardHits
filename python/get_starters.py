import pandas as pd
import requests
from datetime import datetime
import os
import json

from paths import DATA_DIR

FILENAME = "today_matchups.json"

def fetch_probables():
    print("🚀 Fetching today's probable pitchers...")
    today = datetime.now().strftime('%Y-%m-%d')
    
    # Using MLB's official internal API endpoint for probables
    url = f"https://statsapi.mlb.com/api/v1/schedule?sportId=1&date={today}&hydrate=probablePitcher,team"
    
    try:
        response = requests.get(url).json()
        matchups = []
        
        for date in response.get('dates', []):
            for game in date.get('games', []):
                teams = game.get('teams', {})
                away = teams.get('away', {})
                home = teams.get('home', {})
                
                # Away Pitcher info
                if 'probablePitcher' in away:
                    matchups.append({
                        'pitcher_name': away['probablePitcher']['fullName'],
                        'pitcher_id': away['probablePitcher']['id'],
                        'pitcher_team': away['team']['abbreviation'],
                        'opponent_team': home['team']['abbreviation']
                    })
                
                # Home Pitcher info
                if 'probablePitcher' in home:
                    matchups.append({
                        'pitcher_name': home['probablePitcher']['fullName'],
                        'pitcher_id': home['probablePitcher']['id'],
                        'pitcher_team': home['team']['abbreviation'],
                        'opponent_team': away['team']['abbreviation']
                    })

        DATA_DIR.mkdir(parents=True, exist_ok=True)
        with open(DATA_DIR / FILENAME, 'w') as f:
            json.dump(matchups, f, indent=4)
            
        print(f"✅ Found {len(matchups)} probable starters for today.")
        return matchups
    except Exception as e:
        print(f"❌ Failed to fetch starters: {e}")
        return []

if __name__ == "__main__":
    fetch_probables()