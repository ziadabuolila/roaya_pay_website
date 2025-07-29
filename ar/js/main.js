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
// menu
document.addEventListener("DOMContentLoaded", () => {
    const openMenuButton = document.querySelector(".btn-open-menu");
    const menu = document.getElementById("menu");
    const closeMenuButton = document.getElementById("closeMenu");
    const body_Element = document.querySelector("body");
    openMenuButton.addEventListener("click", () => {
        menu.classList.toggle("open");
        body_Element.classList.toggle("over-hidden")
    });
    closeMenuButton.addEventListener("click", () => {
        menu.classList.remove("open");
        body_Element.classList.remove("over-hidden")
    });
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menu.classList.remove("open");
        body_Element.classList.remove("over-hidden")
        });
    });
    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !openMenuButton.contains(e.target)) {
            menu.classList.remove("open");
        body_Element.classList.remove("over-hidden")
        }
    });
    menu.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});
