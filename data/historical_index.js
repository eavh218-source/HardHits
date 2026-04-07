// Historical Results Index
// Load specific model/results files as needed

const historicalDates = [
  "2026-04-07",
  "2026-04-06",
  "2026-04-05",
  "2026-04-04",
  "2026-04-03",
  "2026-04-01",
  "2026-03-31",
  "2026-03-30",
  "2026-03-29",
  "2026-03-28",
  "2026-03-27",
  "2026-03-26"
];

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
            modelScript.onerror = () => reject(new Error(`Failed to load model data for ${dateStr}`));
            document.head.appendChild(modelScript);
        }

        if (!resultsLoaded) {
            const resultsScript = document.createElement('script');
            resultsScript.src = `../data/hr_results_${dateStr}.js`;
            resultsScript.onload = () => {
                resultsLoaded = true;
                finalize();
            };
            resultsScript.onerror = () => reject(new Error(`Failed to load results data for ${dateStr}`));
            document.head.appendChild(resultsScript);
        }

        setTimeout(() => {
            if (!modelLoaded || !resultsLoaded) {
                reject(new Error(`Timeout loading historical data for ${dateStr}`));
            }
        }, 10000);
    });
}
