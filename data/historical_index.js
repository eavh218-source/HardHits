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
