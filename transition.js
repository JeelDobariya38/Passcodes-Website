document.addEventListener("DOMContentLoaded", () => {
    requestAnimationFrame(() => {
        document.body.classList.add("page-loaded");
    });

    document.querySelectorAll(".nav-btn").forEach((link) => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");

            if (!href || href.startsWith("http") || href.startsWith("#")) {
                return;
            }

            e.preventDefault();

            document.body.classList.add("page-leaving");

            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
});
