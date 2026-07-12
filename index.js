import { githubAPIFetch } from "./github-cache.js";
import { formatDownloadCount } from "./utils.js";

const downloadButton = document.getElementById("download-btn");
const downloadCount = document.getElementById("download-count");

const deviceDialog = document.getElementById("unsupported-device-dialog");
const closeDeviceDialogButton = document.getElementById("close-device-dialog");
const downloadAnywayLink = document.getElementById("download-apk-anyway");

const githubStarDialog = document.getElementById("github-star-dialog");
const laterButton = document.getElementById("later-btn");

function isAndroidDevice() {
    return /Android/i.test(navigator.userAgent);
}

function showGitHubStarDialog() {
    if (!githubStarDialog || githubStarDialog.open) {
        return;
    }

    githubStarDialog.showModal();

    localStorage.setItem("passcodes_star_dialog_shown", "true");
}

function closeDialogOnBackdropClick(dialog) {
    dialog?.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
}

function setupDownloadButton(downloadUrl, fileName = "") {
    if (!downloadButton) {
        return;
    }

    downloadButton.href = downloadUrl;

    if (fileName) {
        downloadButton.download = fileName;
    }

    if (downloadAnywayLink) {
        downloadAnywayLink.href = downloadUrl;

        if (fileName) {
            downloadAnywayLink.download = fileName;
        }
    }

    downloadButton.addEventListener("click", (event) => {
        if (isAndroidDevice()) {
            window.setTimeout(showGitHubStarDialog, 500);
            return;
        }

        event.preventDefault();
        deviceDialog?.showModal();
    });
}

function setupDialogs() {
    closeDeviceDialogButton?.addEventListener("click", () => {
        deviceDialog?.close();
    });

    laterButton?.addEventListener("click", () => {
        githubStarDialog?.close();
    });

    downloadAnywayLink?.addEventListener("click", () => {
        deviceDialog?.close();

        window.setTimeout(showGitHubStarDialog, 500);
    });

    closeDialogOnBackdropClick(deviceDialog);
    closeDialogOnBackdropClick(githubStarDialog);
}

async function loadLatestDownload() {
    try {
        const data = await githubAPIFetch({
            routeURI: "repos/PasscodesApp/Passcodes/releases/latest",
            cacheKey: "latest_release",
            ttl: 1000 * 60 * 60 * 24 * 2,
        });

        if (!data.assets) {
            return;
        }

        const apk = data.assets.find(
            (file) =>
                file.name.toLowerCase().includes("universal") &&
                file.name.toLowerCase().endsWith(".apk"),
        );

        if (apk && downloadButton) {
            setupDownloadButton(apk.browser_download_url, apk.name);

            downloadButton.innerHTML =
                `<i class="fa-solid fa-download"></i> ` +
                `Download Latest (${data.tag_name})`;

            downloadButton.style.pointerEvents = "auto";
            downloadButton.style.opacity = "1";
        }

        const totalDownloads = data.assets.reduce(
            (sum, asset) => sum + asset.download_count,
            0,
        );

        if (totalDownloads > 0 && downloadCount) {
            downloadCount.innerHTML =
                `<i class="fa-solid fa-arrow-down"></i> ` +
                `${formatDownloadCount(totalDownloads)} downloads`;

            downloadCount.style.display = "";
        }
    } catch (error) {
        console.error("Error loading latest release", error);

        if (!downloadButton) {
            return;
        }

        const fallbackUrl =
            "https://github.com/PasscodesApp/Passcodes/releases/latest";

        setupDownloadButton(fallbackUrl);

        downloadButton.innerHTML =
            `<i class="fa-solid fa-download"></i> ` + "Download Latest";

        downloadButton.style.pointerEvents = "auto";
        downloadButton.style.opacity = "1";
    }
}

setupDialogs();
loadLatestDownload();
