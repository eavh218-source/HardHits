"""
Generate Historical HR Results
Fetches actual home run data for each historical date
"""

import json
from datetime import datetime, timedelta
from pathlib import Path
from hr_validator import fetch_hrs_for_date

DATA_DIR = Path("data")

def main():
    print("=== 🏏 Historical HR Results Generator ===\n")

    # Date range: March 25 to April 1, 2026
    dates_to_fetch = []
    start = datetime(2026, 3, 25)
    end = datetime(2026, 4, 2)

    current = start
    while current < end:
        dates_to_fetch.append(current.strftime('%Y-%m-%d'))
        current += timedelta(days=1)

    print(f"Fetching HR results for dates: {dates_to_fetch[0]} to {dates_to_fetch[-1]}\n")

    all_results = []

    for date_str in dates_to_fetch:
        results = fetch_hrs_for_date(date_str)
        all_results.extend(results)

        # Save individual file
        file_path = DATA_DIR / f'hr_results_{date_str}.js'
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(f"window.hrResultsData_{date_str.replace('-', '_')} = {json.dumps(results, indent=2)};")

        print(f"  {date_str}: ✓ {len(results)} HRs")

    # Save consolidated results with dates
    consolidated_file = DATA_DIR / 'hr_results_consolidated.js'
    with open(consolidated_file, 'w', encoding='utf-8') as f:
        f.write(f"window.hrResultsHistoricalData = {json.dumps(all_results, indent=2)};")

    print(f"\n✅ Generated results for {len(dates_to_fetch)} dates")
    print(f"📊 Total HRs found: {len(all_results)}")
    print(f"💾 Files: hr_results_YYYY-MM-DD.js + hr_results_consolidated.js")

if __name__ == "__main__":
    main()