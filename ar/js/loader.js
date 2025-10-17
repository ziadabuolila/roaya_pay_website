// loader
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
            document.getElementById("main-content").style.display = "block";
        }, 500);
    }, 2000);
});