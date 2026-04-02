import json
import re

# Read the consolidated data
with open('c:/code/HardHits/data/hr_model_consolidated.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the JSON array
match = re.search(r'const hrModelHistoricalData = (\[.*\]);', content, re.DOTALL)
if not match:
    print("Could not find data array")
    exit(1)

data = json.loads(match.group(1))

# Fix April 1 entries
for entry in data:
    if entry.get('date') == '2026-04-01':
        # Add missing fields
        if 'breakdown' not in entry:
            # Calculate breakdown based on available data
            power = round((entry.get('max_ev', 100) / 110) * 100, 0)
            form = 75  # Default form score
            trend = 50 if entry.get('ev_trend_val', 0) > 0 else 25
            park = 39  # Default park factor

            entry['breakdown'] = {
                "Power": int(power),
                "Form": int(form),
                "Trend": int(trend),
                "Park": int(park)
            }

        if 'ev_trend_label' not in entry:
            ev_trend = entry.get('ev_trend_val', 0)
            entry['ev_trend_label'] = "Hot" if ev_trend > 1.5 else "Stable"

        if 'max_ev_pct' not in entry:
            max_ev = entry.get('max_ev', 100)
            entry['max_ev_pct'] = round((max_ev / 110) * 100, 0)

        if 'fb_ev_pct' not in entry:
            fb_ev = entry.get('fb_ev', 85)
            entry['fb_ev_pct'] = round((fb_ev / 100) * 100, 0)

        if 'opp_pitcher' not in entry:
            entry['opp_pitcher'] = "TBD"

        if 'park_factor' not in entry:
            entry['park_factor'] = "Neutral"

# Write back the fixed data
fixed_content = f"const hrModelHistoricalData = {json.dumps(data, indent=2)};"

with open('c:/code/HardHits/data/hr_model_consolidated.js', 'w', encoding='utf-8') as f:
    f.write(fixed_content)

print("✅ Fixed April 1 entries in consolidated data")