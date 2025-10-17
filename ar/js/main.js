// menu
document.addEventListener("DOMContentLoaded", () => {
    const openMenuButton = document.querySelector(".btn-open-menu");
    const menu = document.getElementById("menu");
    const closeMenuButton = document.getElementById("closeMenu");
    const body_Element = document.querySelector("body");
    openMenuButton.addEventListener("click", () => {
        menu.classList.toggle("open");
        body_Element.classList.toggle("over-hidden");
    });
    closeMenuButton.addEventListener("click", () => {
        menu.classList.remove("open");
        body_Element.classList.remove("over-hidden");
    });
    menuItems.forEach((item) => {
        item.addEventListener("click", () => {
            menu.classList.remove("open");
            body_Element.classList.remove("over-hidden");
        });
    });
    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !openMenuButton.contains(e.target)) {
            menu.classList.remove("open");
            body_Element.classList.remove("over-hidden");
        }
    });
    menu.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});
// ---- close chat ----
const chatToggle = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatBox");
chatToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    chatBox.classList.toggle("open");
});
document.addEventListener("click", (e) => {
    if (
        chatBox.classList.contains("open") &&
        !chatBox.contains(e.target) &&
        !chatToggle.contains(e.target)
    ) {
        chatBox.classList.remove("open");
    }
});