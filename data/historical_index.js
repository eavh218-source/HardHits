// Historical Data Index
// Load specific date files as needed

const historicalDates = [
  "2026-03-25",
  "2026-03-26",
  "2026-03-27",
  "2026-03-28",
  "2026-03-29",
  "2026-03-30",
  "2026-03-31",
  "2026-04-01",
];

function loadHistoricalData(dateStr) {
    // Dynamically load model data for a specific date
    const modelScript = document.createElement('script');
    modelScript.src = `../data/hr_model_${dateStr}.js`;
    document.head.appendChild(modelScript);
    
    // Dynamically load results data for a specific date
    const resultsScript = document.createElement('script');
    resultsScript.src = `../data/hr_results_${dateStr}.js`;
    document.head.appendChild(resultsScript);
    
    return new Promise((resolve, reject) => {
        let loadedCount = 0;
        const checkLoaded = () => {
            loadedCount++;
            if (loadedCount === 2) {
                resolve();
            }
        };

        const errorHandler = (evt) => {
            reject(new Error(`Failed to load historical data for ${dateStr}`));
        };

        modelScript.onload = checkLoaded;
        resultsScript.onload = checkLoaded;

        modelScript.onerror = errorHandler;
        resultsScript.onerror = errorHandler;

        // Prevent forever waiting by enforcing timeout
        setTimeout(() => {
            if (loadedCount !== 2) {
                reject(new Error(`Timeout loading historical data for ${dateStr}`));
            }
        }, 6000);
    });
}
