
document.addEventListener("DOMContentLoaded", () => {
    const shortcuts = document.querySelectorAll(".shortcut");

    shortcuts.forEach(shortcut => {
        shortcut.addEventListener("click", () => {
            const link = shortcut.getAttribute("data-link");
            if (link) {
                window.open(link, "_blank");
            }
        });
    });
});
