const login_btn = document.getElementById("login-btn");
document.addEventListener("DOMContentLoaded", function() {
    const resetBtn = document.getElementById("login-btn");
    resetBtn.addEventListener("click", function(e) {
        e.preventDefault();
        window.location.href = "http://173.249.58.27:8443/merchant/login";
    });
});