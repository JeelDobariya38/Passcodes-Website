import { githubAPIFetch } from "./github-cache.js";
import { formatDownloadCount } from "./utils.js";

async function loadLatestDownload() {
    try {
        const data = await githubAPIFetch({
            routeURI: "repos/PasscodesApp/Passcodes/releases/latest",
            cacheKey: "latest_release",
            ttl: 1000 * 60 * 60 * 24 * 2, // 2 Days
        });

        if (!data.assets) return;
        const apk = data.assets.find(
            (file) =>
                file.name.toLowerCase().includes("universal") &&
                file.name.endsWith(".apk"),
        );

        if (apk) {
            const btn = document.getElementById("download-btn");

            btn.href = apk.browser_download_url;
            btn.download = apk.browser_download_url.split("/").pop();
            btn.innerHTML = `<i class="fa-solid fa-download"></i> Download Latest (${data.tag_name})`;
            btn.style.pointerEvents = "auto";
            btn.style.opacity = "1";
        }

        // Calculate total downloads across all assets of this release
        const totalDownloads = data.assets.reduce(
            (sum, asset) => sum + asset.download_count,
            0,
        );

        if (totalDownloads > 0) {
            const countEl = document.getElementById("download-count");

            countEl.innerHTML = `<i class="fa-solid fa-arrow-down"></i> ${formatDownloadCount(totalDownloads)} downloads`;
            countEl.style.display = "";
        }
    } catch (err) {
        console.error("Error loading latest release", err);
        const btn = document.getElementById("download-btn");
        btn.innerHTML = `<i class="fa-solid fa-download"></i> Download Latest`;
        btn.href = "https://github.com/PasscodesApp/Passcodes/releases/latest";
        btn.style.pointerEvents = "auto";
        btn.style.opacity = "1";
    }
}

loadLatestDownload();
