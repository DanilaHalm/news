const loading = document.querySelector(".loading");
const btnContainer = document.querySelector(".button-container");
const btnsElements = document.querySelectorAll(".btn");
const card = document.querySelector(".card");

const btns = [...btnsElements];

btns.map((btn) => {
  btn.addEventListener("click", () => {
    btnContainer.style.display = "none";
    card.style.display = "flex";
  });
});

setTimeout(() => {
  loading.style.display = "none";
  btnContainer.style.display = "flex";
}, 3000);
