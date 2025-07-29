window.addEventListener("load", () => {
    setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.style.opacity = 0;
    setTimeout(() => {
        loader.style.display = "none";
        document.getElementById("content").style.display = "block";
        document.body.style.overflow = "auto";
    }, 500);
    }, 1850);
});