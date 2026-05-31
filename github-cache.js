// This file is use to cached GitHub api reponse for end user in thier browser
// so we can save github api calls & not hit rate-limiting.

const CACHE_PREFIX = "passcodes_cache_";
const DEFAULT_TTL = 1000 * 60 * 60 * 6; // 6 hours

export async function githubAPIFetch({
    cacheKey,
    routeURI,
    ttl = DEFAULT_TTL,
}) {
    const key = CACHE_PREFIX + cacheKey;
    const url = `https://api.github.com/${routeURI}`;

    try {
        const cached = localStorage.getItem(key);

        if (cached) {
            const parsed = JSON.parse(cached);

            if (parsed.timestamp && Date.now() - parsed.timestamp < ttl) {
                return parsed.data;
            }
        }
    } catch (err) {
        console.warn(`Failed reading cache "${cacheKey}"`, err);
    }

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        const data = await response.json();

        localStorage.setItem(
            key,
            JSON.stringify({
                timestamp: Date.now(),
                data,
            }),
        );

        return data;
    } catch (err) {
        console.error(`Fetch failed for ${url}`, err);

        const cached = localStorage.getItem(key);

        if (cached) {
            return JSON.parse(cached).data;
        }

        throw err;
    }
}
