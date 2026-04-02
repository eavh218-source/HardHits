import subprocess
import json
from datetime import datetime, timedelta
from pathlib import Path

DATA_DIR = Path("data")
PYTHON_DIR = Path("python")

# Generate predictions for each date from March 25 to April 1
START_DATE = datetime(2026, 3, 25)
END_DATE = datetime(2026, 4, 2)

print("=== 📊 Batch Historical Data Generator ===\n")

all_predictions = []
all_results = []
dates_processed = 0

current_date = START_DATE
while current_date < END_DATE:
    date_str = current_date.strftime('%Y-%m-%d')
    print(f"Processing {date_str}...")
    
    # Update hr_engine_historical.py with the target date
    hr_engine_path = PYTHON_DIR / 'hr_engine_historical.py'
    with open(hr_engine_path, 'r') as f:
        content = f.read()
    
    # Replace the TARGET_DATE_STR variable
    import re
    content = re.sub(
        r'TARGET_DATE_STR = "[^"]*"',
        f'TARGET_DATE_STR = "{date_str}"',
        content
    )
    
    with open(hr_engine_path, 'w') as f:
        f.write(content)
    
    # Run hr_engine_historical.py
    try:
        result = subprocess.run(
            ['python', str(PYTHON_DIR / 'hr_engine_historical.py')],
            capture_output=True,
            text=True,
            timeout=60
        )
        print(f"  ✓ Executed for {date_str}")
    except subprocess.TimeoutExpired:
        print(f"  ⚠ Timeout for {date_str}")
    except Exception as e:
        print(f"  ✗ Error for {date_str}: {e}")
    
    # Load the generated file
    model_file = DATA_DIR / f'hr_model_{date_str}.js'
    if model_file.exists():
        with open(model_file, 'r') as f:
            content = f.read()
            try:
                # Extract JSON from the JavaScript
                json_str = content.replace('const hrModelData = ', '').rstrip(';')
                predictions = json.loads(json_str)
                # Add date field if not present
                for pred in predictions:
                    pred['date'] = date_str
                all_predictions.extend(predictions)
                print(f"  ✓ Loaded {len(predictions)} predictions from generated file")
            except:
                print(f"  ✗ Could not parse generated file")
    
    dates_processed += 1
    current_date += timedelta(days=1)

# Save master historical data file
print(f"\nSaving aggregated data...")
with open(DATA_DIR / 'hr_model_historical_master.js', 'w') as f:
    f.write(f"const hrModelHistoricalData = {json.dumps(all_predictions, indent=2)};")

print(f"✅ Complete! Processed {dates_processed} dates with {len(all_predictions)} total predictions")
print(f"📁 Saved to: data/hr_model_historical_master.js")
