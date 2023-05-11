document.addEventListener('DOMContentLoaded', function () {

const meatBtn = document.getElementById("köttKnapp");
const vegetarianBtn = document.getElementById("vegKnapp");
const drinksBtn = document.getElementById("dryckKnapp");

const meatList = document.getElementById("köttLista");
const vegetarianList = document.getElementById("vegLista");
const drinksList = document.getElementById("dryckLista");


meatBtn.addEventListener("click", () => {
  meatList.style.display = "flex";
  vegetarianList.style.display = "none";
  drinksList.style.display = "none";
});

vegetarianBtn.addEventListener("click", () => {
  meatList.style.display = "none";
  vegetarianList.style.display = "flex";
  drinksList.style.display = "none";
});

drinksBtn.addEventListener("click", () => {
  meatList.style.display = "none";
  vegetarianList.style.display = "none";
  drinksList.style.display = "flex";
});

})