"""Refresh `data/historical_index.js` from the dated HR model/result files on disk.

Usage:
    python python/refresh_historical_index.py
"""

from __future__ import annotations

import json
import re
from pathlib import Path

from paths import DATA_DIR

DATE_PATTERN = re.compile(r"hr_(model|results)_(\d{4}-\d{2}-\d{2})\.js$")
INDEX_PATH = DATA_DIR / "historical_index.js"

INDEX_TEMPLATE = """// Historical Data Index
// Load specific date files as needed

const historicalDates = __DATES__;

function loadHistoricalData(dateStr) {
    return new Promise((resolve, reject) => {
        if (!dateStr) {
            reject(new Error('Missing historical date.'));
            return;
        }

        const key = dateStr.replace(/-/g, '_');
        let modelLoaded = Boolean(window[`hrModelData_${key}`]);
        let resultsLoaded = Boolean(window[`hrResultsData_${key}`]);

        function finalize() {
            if (modelLoaded && resultsLoaded) {
                resolve();
            }
        }

        if (modelLoaded && resultsLoaded) {
            resolve();
            return;
        }

        if (!modelLoaded) {
            const modelScript = document.createElement('script');
            modelScript.src = `../data/hr_model_${dateStr}.js`;
            modelScript.onload = () => {
                modelLoaded = true;
                finalize();
            };
            modelScript.onerror = () => reject(new Error(`Failed to load HR model data for ${dateStr}`));
            document.head.appendChild(modelScript);
        }

        if (!resultsLoaded) {
            const resultsScript = document.createElement('script');
            resultsScript.src = `../data/hr_results_${dateStr}.js`;
            resultsScript.onload = () => {
                resultsLoaded = true;
                finalize();
            };
            resultsScript.onerror = () => reject(new Error(`Failed to load HR results data for ${dateStr}`));
            document.head.appendChild(resultsScript);
        }

        setTimeout(() => {
            if (!modelLoaded || !resultsLoaded) {
                reject(new Error(`Timeout loading historical data for ${dateStr}`));
            }
        }, 10000);
    });
}
"""


def collect_available_dates() -> list[str]:
    model_dates: set[str] = set()
    result_dates: set[str] = set()

    for path in DATA_DIR.glob("hr_*.js"):
        match = DATE_PATTERN.match(path.name)
        if not match:
            continue
        file_type, date_str = match.groups()
        if file_type == "model":
            model_dates.add(date_str)
        elif file_type == "results":
            result_dates.add(date_str)

    return sorted(model_dates & result_dates, reverse=True)


def write_historical_index() -> Path:
    dates = collect_available_dates()
    content = INDEX_TEMPLATE.replace("__DATES__", json.dumps(dates, indent=2))
    INDEX_PATH.write_text(content, encoding="utf-8")
    return INDEX_PATH


if __name__ == "__main__":
    output = write_historical_index()
    print(f"Updated {output} with {len(collect_available_dates())} historical HR dates.")
