"""
Consolidated Historical Data Generator
Aggregates daily HR model predictions and results from March 25 - April 2, 2026
"""

import json
import re
from pathlib import Path
from datetime import datetime, timedelta

DATA_DIR = Path("data")

def parse_js_data(file_path):
    """Extract JSON from JavaScript window/const assignment"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove variable assignment
        content = re.sub(r'^(window\.|const )\w+ = ', '', content)
        content = content.rstrip(';')
        
        return json.loads(content)
    except Exception as e:
        print(f"Error parsing {file_path}: {e}")
        return []

def main():
    print("=== 📊 Historical Data File Generator ===\n")
    
    # Start with existing files and fill gaps
    dates_to_check = []
    start = datetime(2026, 3, 25)
    end = datetime.now()
    
    current = start
    while current.date() <= end.date():
        dates_to_check.append(current.strftime('%Y-%m-%d'))
        current += timedelta(days=1)
    
    print(f"Creating individual files from {dates_to_check[0]} to {dates_to_check[-1]}\n")
    
    # Load consolidated data
    consolidated_predictions = []
    consolidated_results = []
    
    # Load existing consolidated files if they exist
    consolidated_pred_file = DATA_DIR / 'hr_model_consolidated.js'
    consolidated_results_file = DATA_DIR / 'hr_results_consolidated.js'
    
    if consolidated_pred_file.exists():
        consolidated_predictions = parse_js_data(consolidated_pred_file)
        print(f"Loaded {len(consolidated_predictions)} predictions from consolidated file")
    
    if consolidated_results_file.exists():
        consolidated_results = parse_js_data(consolidated_results_file)
        print(f"Loaded {len(consolidated_results)} results from consolidated file")
    
    # Group by date
    predictions_by_date = {}
    results_by_date = {}
    
    for pred in consolidated_predictions:
        date = pred.get('date', 'unknown')
        if date not in predictions_by_date:
            predictions_by_date[date] = []
        predictions_by_date[date].append(pred)
    
    for result in consolidated_results:
        date = result.get('date', 'unknown')
        if date not in results_by_date:
            results_by_date[date] = []
        results_by_date[date].append(result)
    
    # Create individual files for each date
    print("\nCreating individual date files...")
    
    for date_str in dates_to_check:
        # Create predictions file
        predictions = predictions_by_date.get(date_str, [])
        pred_file = DATA_DIR / f'hr_model_{date_str}.js'
        
        with open(pred_file, 'w', encoding='utf-8') as f:
            f.write(f"window.hrModelData_{date_str.replace('-', '_')} = {json.dumps(predictions, indent=2)};")
        
        # Create results file
        results = results_by_date.get(date_str, [])
        results_file = DATA_DIR / f'hr_results_{date_str}.js'
        
        with open(results_file, 'w', encoding='utf-8') as f:
            f.write(f"window.hrResultsData_{date_str.replace('-', '_')} = {json.dumps(results, indent=2)};")
        
        print(f"  {date_str}: ✓ {len(predictions)} predictions, {len(results)} results")
    
    print(f"\n✅ Created {len(dates_to_check)} date-specific file pairs")
    print(f"📁 Files: hr_model_YYYY-MM-DD.js and hr_results_YYYY-MM-DD.js")
    
    # Create an index file for easy loading
    index_content = """// Historical Data Index
// Load specific date files as needed

const historicalDates = [
"""
    
    for date_str in reversed(dates_to_check):
        index_content += f'  "{date_str}",\n'
    
    index_content += """];

function loadHistoricalData(dateStr) {
    // Dynamically load model data for a specific date
    const script = document.createElement('script');
    script.src = `../data/hr_model_${dateStr}.js`;
    document.head.appendChild(script);
    
    // Dynamically load results data for a specific date
    const resultsScript = document.createElement('script');
    resultsScript.src = `../data/hr_results_${dateStr}.js`;
    document.head.appendChild(resultsScript);
    
    return new Promise((resolve) => {
        resultsScript.onload = () => resolve();
    });
}
"""
    
    with open(DATA_DIR / 'historical_index.js', 'w', encoding='utf-8') as f:
        f.write(index_content)
    
    print(f"✅ Created historical_index.js for easy data loading")

if __name__ == "__main__":
    main()
