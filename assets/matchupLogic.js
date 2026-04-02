document.addEventListener('DOMContentLoaded', function() {
    if (typeof bvpData === 'undefined') return;

    // 1. HELPER: UTC to Eastern Time (-4 Hours)
    function formatET(utcStr) {
        if (!utcStr || utcStr === 'TBD') return 'TBD';
        try {
            let [time] = utcStr.split(' ');
            let [hours, minutes] = time.split(':').map(Number);
            let etHours = hours - 4;
            if (etHours < 0) etHours += 24;
            let period = etHours >= 12 ? 'PM' : 'AM';
            let displayHours = etHours % 12 || 12;
            return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period} ET`;
        } catch (e) { return utcStr; }
    }

    // 2. BUILD TICKER
    const ticker = document.getElementById('matchup-ticker');
    if (ticker) {
        const seenGames = new Set();
        bvpData.forEach(item => {
            const gameKey = `${item.opponent_team}-${item.pitcher_name}`;
            if (!seenGames.has(gameKey)) {
                seenGames.add(gameKey);
                ticker.innerHTML += `
                    <div class="ticker-card">
                        <div class="ticker-time">${formatET(item.game_time)}</div>
                        <div class="ticker-matchup">${item.opponent_team} @ ${item.pitcher_name}</div>
                    </div>`;
            }
        });
    }

    // 3. LEADERBOARD
    const hrs = bvpData.filter(h => h.events.toLowerCase().includes('home run'));
    const top12 = [...hrs].sort((a,b) => b.distance - a.distance).slice(0, 12);
    const grid = document.getElementById('top-12-grid');
    if (grid) {
        top12.forEach((hit, i) => {
            grid.innerHTML += `
                <div class="leader-card">
                    <div style="font-size:0.6rem; color:var(--text-muted); font-weight:800;">#${i+1} LONGEST HR</div>
                    <div class="dist-val">${hit.distance} FT</div>
                    <div style="font-size:0.85rem; font-weight:600; margin-top:4px;">${hit.batter_name}</div>
                    <div style="font-size:0.7rem; color:var(--text-muted);">off ${hit.pitcher_name}</div>
                </div>`;
        });
    }

    // 4. PITCHER GROUPS
    const grouped = hrs.reduce((acc, h) => {
        acc[h.pitcher_name] = acc[h.pitcher_name] || { opp: h.opponent_team, rawTime: h.game_time, hits: [] };
        acc[h.pitcher_name].hits.push(h);
        return acc;
    }, {});

    const container = document.getElementById('matchup-container');
    if (container) {
        Object.keys(grouped).sort().forEach(p => {
            const data = grouped[p];
            const id = p.replace(/\s+/g, '-');
            container.innerHTML += `
                <div class="pitcher-group">
                    <div class="pitcher-header" onclick="togglePane('${id}')">
                        <div class="pitcher-info">
                            <strong style="text-transform:uppercase; color:var(--accent); font-size:1.1rem;">${p}</strong>
                            <span style="color:var(--text-muted); font-size:0.75rem; font-weight:600;">
                                ${formatET(data.rawTime)} — ${data.opp} @ ${p}
                            </span>
                        </div>
                        <span style="color:var(--accent); font-weight:800; font-size:0.75rem;">${data.hits.length} HRS ALLOWED</span>
                    </div>
                    <div id="${id}" class="details-pane hidden">
                        <table>
                            <thead><tr><th>Batter</th><th>Distance</th><th>Exit Velo</th><th>Date</th></tr></thead>
                            <tbody>
                                ${data.hits.sort((a,b) => b.distance - a.distance).map(h => `
                                    <tr>
                                        <td style="font-weight:700;">${h.batter_name}</td>
                                        <td style="color:var(--accent); font-weight:800;">${h.distance} FT</td>
                                        <td>${h.launch_speed} MPH</td>
                                        <td style="color:var(--text-muted); font-size:0.85rem;">${h.game_date}</td>
                                    </tr>`).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>`;
        });
    }
});

// UI Functions (Global Scope)
function togglePane(id) {
    const pane = document.getElementById(id);
    if(pane) pane.classList.toggle('hidden');
}

function toggleAll() {
    const panes = document.querySelectorAll('.details-pane');
    const btn = document.getElementById('global-btn');
    const isExp = btn.innerText === "EXPAND ALL";
    panes.forEach(p => isExp ? p.classList.remove('hidden') : p.classList.add('hidden'));
    btn.innerText = isExp ? "COLLAPSE ALL" : "EXPAND ALL";
}