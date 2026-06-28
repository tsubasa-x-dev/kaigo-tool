import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNAIdHeYOktnsI8W0vKWugUR9VjuBqrqA",
  authDomain: "kaigo-tool.firebaseapp.com",
  projectId: "kaigo-tool",
  storageBucket: "kaigo-tool.firebasestorage.app",
  messagingSenderId: "865922528873",
  appId: "1:865922528873:web:dd8fd2d6cc01b235fe94f8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 💡 1. ログイン画面のボタンが押されたら、ログインしてホームへ行く
const loginBtn = document.getElementById("login-btn");
if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        signInWithPopup(auth, provider).then(() => {
            window.location.href = "home.html"; 
        });
    });
}

// 💡 2. ホーム画面のボタンが押されたら、ログアウトしてログイン画面へ戻る
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        signOut(auth).then(() => {
            window.location.href = "index.html"; 
        });
    });
}


