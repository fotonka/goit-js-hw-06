const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newIngredientsList = [...ingredients];
const productsEl = document.querySelector(".ingredients");

productsEl.forEach(function (elem) {
  const liEl = document.createElement("li");
  liEl.textContent = elem;
});
