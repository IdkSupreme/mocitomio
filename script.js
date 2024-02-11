
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
