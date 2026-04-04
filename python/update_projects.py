import json

from paths import DATA_DIR

PROJECTS_JSON = DATA_DIR / 'projects.json'
PROJECTS_JS = DATA_DIR / 'projects_data.js'


def load_projects():
    if PROJECTS_JSON.exists():
        with open(PROJECTS_JSON, 'r', encoding='utf-8') as f:
            return json.load(f)
    return []


def save_projects(projects):
    with open(PROJECTS_JSON, 'w', encoding='utf-8') as f:
        json.dump(projects, f, indent=2)

    with open(PROJECTS_JS, 'w', encoding='utf-8') as f:
        f.write(f"const projectData = {json.dumps(projects, indent=2)};")


def sync_projects_data():
    projects = load_projects()
    save_projects(projects)
    print(f"✅ Synced {len(projects)} projects to projects_data.js")


def add_project(title, description, status="Planned"):
    projects = load_projects()
    projects.append({
        "title": title,
        "description": description,
        "status": status
    })
    save_projects(projects)
    print(f"✅ Added: {title}")


if __name__ == "__main__":
    sync_projects_data()