"use strict";
window.addEventListener("load", () => {
  document.querySelector(".loading").style.display = "flex";
  setTimeout(() => {
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".advice_box").style.display = "flex";
    document.querySelector(".advice_box").style.opacity = "1";
  }, 5000);

  document.querySelector(".advice_box").style.display = "flex";
});
const advice = document.querySelector(".advice");
const btnCont = document.querySelector(".btn-cont");

btnCont.addEventListener("click", () => {
  btnCont.disabled = true;
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => (advice.textContent = data.slip.advice));

  setTimeout(() => {
    btnCont.disabled = false;
  }, 3000);
});
