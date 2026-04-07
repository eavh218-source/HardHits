(function (global) {
    const DEFAULT_API_BASE = global.HARDHITS_API_BASE_URL || 'http://127.0.0.1:8000';

    function easternDateString(offsetDays) {
        const formatter = new Intl.DateTimeFormat('en-CA', {
            timeZone: 'America/New_York',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        const baseText = formatter.format(new Date());
        const baseDate = new Date(baseText + 'T00:00:00Z');
        baseDate.setUTCDate(baseDate.getUTCDate() + (offsetDays || 0));
        return baseDate.toISOString().slice(0, 10);
    }

    function formatEtTime(isoValue) {
        if (!isoValue) {
            return '';
        }

        try {
            const date = new Date(isoValue);
            return date.toLocaleTimeString('en-US', {
                timeZone: 'America/New_York',
                hour: 'numeric',
                minute: '2-digit'
            }) + ' ET';
        } catch (error) {
            console.warn('Unable to format ET time from API payload:', error);
            return '';
        }
    }

    async function fetchJson(path, timeoutMs) {
        const targetUrl = DEFAULT_API_BASE + path;
        const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
        const timeout = window.setTimeout(function () {
            if (controller) {
                controller.abort();
            }
        }, timeoutMs || 2500);

        try {
            const response = await fetch(targetUrl, {
                headers: { 'Accept': 'application/json' },
                signal: controller ? controller.signal : undefined,
            });

            if (!response.ok) {
                throw new Error('API request failed: ' + response.status + ' ' + response.statusText);
            }

            return await response.json();
        } finally {
            window.clearTimeout(timeout);
        }
    }

    global.HardHitsApi = {
        baseUrl: DEFAULT_API_BASE,
        easternDateString: easternDateString,
        formatEtTime: formatEtTime,
        fetchJson: fetchJson,
    };
})(window);
