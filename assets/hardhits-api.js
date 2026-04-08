(function (global) {
    const API_STORAGE_KEY = 'hardhits.apiBaseUrl';
    const FALLBACK_API_BASE = 'http://127.0.0.1:8000';

    function cleanBaseUrl(value) {
        return String(value || '').trim().replace(/\/+$/, '');
    }

    function readQueryApiBase() {
        try {
            const params = new URLSearchParams(global.location && global.location.search ? global.location.search : '');
            return cleanBaseUrl(params.get('api'));
        } catch (error) {
            return '';
        }
    }

    function readStoredApiBase() {
        try {
            return cleanBaseUrl(global.localStorage ? global.localStorage.getItem(API_STORAGE_KEY) : '');
        } catch (error) {
            return '';
        }
    }

    function sameOriginApiBase() {
        try {
            if (!global.location || !global.location.origin) {
                return '';
            }
            return cleanBaseUrl(global.location.origin);
        } catch (error) {
            return '';
        }
    }

    function resolveApiBaseUrl() {
        const explicit = cleanBaseUrl(global.HARDHITS_API_BASE_URL);
        if (explicit) {
            return explicit;
        }

        const queryBase = readQueryApiBase();
        if (queryBase) {
            try {
                if (global.localStorage) {
                    global.localStorage.setItem(API_STORAGE_KEY, queryBase);
                }
            } catch (error) {
                // ignore storage errors
            }
            return queryBase;
        }

        const storedBase = readStoredApiBase();
        if (storedBase) {
            return storedBase;
        }

        const host = String((global.location && global.location.hostname) || '').toLowerCase();
        const originBase = sameOriginApiBase();
        if (originBase && host && !host.endsWith('github.io')) {
            return originBase;
        }

        return FALLBACK_API_BASE;
    }

    let apiBaseUrl = resolveApiBaseUrl();

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

    function setBaseUrl(nextBaseUrl, options) {
        const cleaned = cleanBaseUrl(nextBaseUrl);
        if (!cleaned) {
            return apiBaseUrl;
        }

        apiBaseUrl = cleaned;
        const persist = !options || options.persist !== false;
        if (persist) {
            try {
                if (global.localStorage) {
                    global.localStorage.setItem(API_STORAGE_KEY, cleaned);
                }
            } catch (error) {
                // ignore storage errors
            }
        }
        return apiBaseUrl;
    }

    async function fetchJson(path, timeoutMs) {
        const normalizedPath = /^https?:\/\//i.test(String(path || '')) ? String(path) : apiBaseUrl + path;
        const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
        const timeout = window.setTimeout(function () {
            if (controller) {
                controller.abort();
            }
        }, timeoutMs || 2500);

        try {
            const response = await fetch(normalizedPath, {
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
        get baseUrl() {
            return apiBaseUrl;
        },
        setBaseUrl: setBaseUrl,
        easternDateString: easternDateString,
        formatEtTime: formatEtTime,
        fetchJson: fetchJson,
    };
})(window);
