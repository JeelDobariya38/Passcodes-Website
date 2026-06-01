import { githubAPIFetch } from "./github-cache.js";

const RELEASE_API_URI = "repos/PasscodesApp/Passcodes/releases";

let allReleases = [];
let currentFilter = "all";
let searchQuery = "";

document.addEventListener("DOMContentLoaded", init);

async function init() {
    setupControls();

    try {
        const releases = await githubAPIFetch({
            routeURI: RELEASE_API_URI,
            cacheKey: "other_release",
            ttl: 1000 * 60 * 60 * 24 * 10, // 10 days
        });

        allReleases = Array.isArray(releases) ? releases : [];

        applyFilters();
    } catch (error) {
        console.error("Failed to fetch releases:", error);

        const container = document.getElementById("releases-container");
        const loading = document.getElementById("loading-text");

        if (loading) {
            loading.style.display = "none";
        }

        container.innerHTML =
            "<p>Failed to load releases. Please try again later.</p>";
    }
}

function setupControls() {
    const searchInput = document.getElementById("release-search");
    const filterButtons = document.querySelectorAll(".filter-btn");

    searchInput?.addEventListener("input", (event) => {
        searchQuery = event.target.value.trim().toLowerCase();
        applyFilters();
    });

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach((btn) => btn.classList.remove("active"));

            button.classList.add("active");
            currentFilter = button.dataset.filter;

            applyFilters();
        });
    });
}

function applyFilters() {
    let filteredReleases = [...allReleases];

    if (currentFilter !== "all") {
        filteredReleases = filteredReleases.filter(
            (release) => getReleaseType(release) === currentFilter,
        );
    }

    if (searchQuery) {
        filteredReleases = filteredReleases.filter((release) => {
            const tagName = (release.tag_name || "").toLowerCase();

            const releaseName = (release.name || "").toLowerCase();

            return (
                tagName.includes(searchQuery) ||
                releaseName.includes(searchQuery)
            );
        });
    }

    renderReleases(filteredReleases);
}

function getReleaseType(release) {
    const title = (release.name || "").toLowerCase();

    if (title.includes("alpha")) {
        return "alpha";
    }

    if (title.includes("stable")) {
        return "stable";
    }

    if (title.includes("beta")) {
        return "beta";
    }

    return "beta";
}

function renderReleases(releases) {
    const container = document.getElementById("releases-container");
    const loading = document.getElementById("loading-text");

    container.innerHTML = "";

    if (loading) {
        loading.style.display = "none";
    }

    if (!releases.length) {
        container.innerHTML = "<p>No releases match your search criteria.</p>";
        return;
    }

    releases.forEach((release) => {
        const version = release.tag_name;
        const type = getReleaseType(release);

        const apkAsset = release.assets.find(
            (asset) =>
                asset.name.toLowerCase().includes("universal") &&
                asset.name.toLowerCase().endsWith(".apk"),
        );

        if (!apkAsset) {
            console.warn(`No universal APK found for ${version}`);
            return;
        }

        const isLatest = release.id === allReleases[0]?.id;

        const card = document.createElement("div");

        card.className = `release-card ${isLatest ? "latest" : ""}`;

        card.innerHTML = `
            <div class="release-top">
                <h3>${version}</h3>
                <span class="tag ${type}">
                    ${type}
                </span>
            </div>

            ${isLatest ? '<p class="release-date">Latest Release</p>' : ""}

            <div class="release-actions">
                <a
                    href="${apkAsset.browser_download_url}"
                    class="btn btn-small btn-filled"
                >
                    <i class="fa-solid fa-download"></i>
                    Download
                </a>

                <a
                    href="${release.html_url}"
                    class="btn btn-small btn-outline"
                >
                    Release Notes
                </a>
            </div>
        `;

        container.appendChild(card);
    });
}
