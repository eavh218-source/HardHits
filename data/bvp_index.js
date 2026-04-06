// BvP Historical Data Index
// Load specific BvP date files as needed

const bvpHistoricalDates = [
  "2026-04-07",
  "2026-04-06",
  "2026-04-05",
  "2026-04-04",
  "2026-04-03",
  "2026-04-02",
  "2026-04-01",
  "2026-03-31",
  "2026-03-30",
  "2026-03-29",
  "2026-03-28",
  "2026-03-27",
  "2026-03-26",
  "2026-03-25",
];

function loadBvpHistoricalData(dateStr) {
    const key = dateStr.replace(/-/g, '_');

    if (window[`bvpData_${key}`] || window[`dailyMatchups_${key}`]) {
        return Promise.resolve();
    }

    const script = document.createElement('script');
    script.src = `../data/bvp_data_${dateStr}.js`;

    return new Promise((resolve, reject) => {
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load BvP data for ${dateStr}`));
        document.head.appendChild(script);
    });
}
