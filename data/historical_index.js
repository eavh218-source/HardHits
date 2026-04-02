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
    
    return new Promise((resolve) => {
        let loadedCount = 0;
        const checkLoaded = () => {
            loadedCount++;
            if (loadedCount === 2) {
                resolve();
            }
        };
        modelScript.onload = checkLoaded;
        resultsScript.onload = checkLoaded;
    });
}
