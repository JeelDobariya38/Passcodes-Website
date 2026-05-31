import { githubAPIFetch } from "./github-cache.js";

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
