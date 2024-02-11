// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoK7LjAJHgxAD8ehc2MeDaLgviBQJZFo4",
  authDomain: "love-26f28.firebaseapp.com",
  projectId: "love-26f28",
  storageBucket: "love-26f28.appspot.com",
  messagingSenderId: "732951078899",
  appId: "1:732951078899:web:5c47358dd916c22a125486",
  measurementId: "G-505NNQ0PED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const siButton = document.getElementById("si");
const noButton = document.getElementById("no");

let noClicks = 0;

noButton.addEventListener("click", () => {
  noClicks++;
  noButton.textContent = `Segura${"?".repeat(noClicks)} `;
});

siButton.addEventListener("click", () => {
  const container = document.querySelector(".container");
  container.innerHTML = `
    <img class="ojosvale" src="img/ojos.PNG">
    <p class="emocion">♥ Te amo ♥</p>
    <p class="emocion">Que piciosa</p>
  `;
});
