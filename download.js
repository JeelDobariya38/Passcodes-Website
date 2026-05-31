import { githubAPIFetch } from "./github-cache.js";

const RELEASE_API_URI = `repos/PasscodesApp/Passcodes/releases`;

document.addEventListener("DOMContentLoaded", async () => {
    let releases = await githubAPIFetch({
        routeURI: RELEASE_API_URI,
        cacheKey: "other_release",
        ttl: 1000 * 60 * 60 * 24 * 10, // 10 Days
    });
    renderReleases(releases);
});

function renderReleases(releases) {
    const container = document.getElementById("releases-container");
    const loading = document.getElementById("loading-text");

    container.innerHTML = "";
    loading.style.display = "none";

    releases.forEach((release, index) => {
        const version = release.tag_name;
        const isLatest = index === 0;

        const title = (release.name || "").toLowerCase();

        let type = "beta"; // default

        if (title.includes("alpha")) {
            type = "alpha";
        } else if (title.includes("stable")) {
            type = "stable";
        } else if (title.includes("beta")) {
            type = "beta";
        }

        const apkAsset = release.assets.find(
            (asset) =>
                asset.name.toLowerCase().includes("universal") &&
                asset.name.toLowerCase().endsWith(".apk"),
        );

        if (!apkAsset) {
            console.warn(`No universal APK for ${version}`);
            return;
        }

        const downloadLink = apkAsset.browser_download_url;
        const notesLink = release.html_url;

        const card = document.createElement("div");
        card.className = `release-card ${isLatest ? "latest" : ""}`;

        card.innerHTML = `
            <div class="release-top">
                <h3>${version}</h3>
                <span class="tag ${type}">${type}</span>
            </div>

            ${isLatest ? '<p class="release-date">Latest Release</p>' : ""}

            <div class="release-actions">
                <a href="${downloadLink}" class="btn btn-small btn-filled">
                    <i class="fa-solid fa-download"></i> Download
                </a>
                <a href="${notesLink}" class="btn btn-small btn-outline">
                    Release Notes
                </a>
            </div>
        `;

        container.appendChild(card);
    });
}
