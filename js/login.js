const loginButton = document.getElementById("login-btn");
const logoutButton = document.getElementById("logout-btn");

if(loginButton) {
    loginButton.addEventListener("click",() => {
        window.location.href = "home.html";
    });
}

if(logoutButton) {
    logoutButton.addEventListener("click",() => {
        window.location.href = "index.html";
    });
}