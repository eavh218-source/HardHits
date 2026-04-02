import json
import os

from paths import DATA_DIR

def add_project(title, description, status="Planned"):
    file_path = DATA_DIR / 'projects.json'
    
    # 1. Load existing data
    if os.path.exists(file_path):
        with open(file_path, 'r') as f:
            projects = json.load(f)
    else:
        projects = []

    # 2. Add new project
    projects.append({
        "title": title,
        "description": description,
        "status": status
    })

    # 3. Save back to JSON
    with open(file_path, 'w') as f:
        json.dump(projects, f, indent=2)
    
    # 4. Also wrap it in a .js file for easy HTML import
    with open(DATA_DIR / 'projects_data.js', 'w') as f:
        f.write(f"const projectData = {json.dumps(projects, indent=2)};")

    print(f"✅ Added: {title}")

# Example Usage:
# add_project("Bullpen Fatigue Tracker", "Track pitches thrown over the last 3 days for every reliever.")