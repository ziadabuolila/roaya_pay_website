// loader
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
            const welcome = document.getElementById("welcome-card");
            welcome.style.display = "block";
            welcome.classList.add("slideDown");
            setTimeout(() => {
                welcome.classList.remove("slideDown");
                welcome.classList.add("slideUp");
                setTimeout(() => {
                    welcome.style.display = "none";
                    document.getElementById("main-content").style.display = "block";
                }, 1000);
            }, 3000);
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
// ---- btn login ----
document.addEventListener("DOMContentLoaded", function() {
    const resetBtn = document.getElementById("login-btn");
    resetBtn.addEventListener("click", function(e) {
        e.preventDefault();
        window.location.href = "../login_en/login.html";
    });
});
// ---- close chat ----
const chatToggle = document.getElementById('chatToggle');
const chatBox = document.getElementById('chatBox');
chatToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    chatBox.classList.toggle('open');
});
document.addEventListener('click', (e) => {
    if (chatBox.classList.contains('open') &&
        !chatBox.contains(e.target) &&
        !chatToggle.contains(e.target)) {
        chatBox.classList.remove('open');
    }
});