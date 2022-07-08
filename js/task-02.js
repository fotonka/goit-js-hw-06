const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");
const list = ingredients.reduce((str, elem) => str + `<li>${elem}</li>`, "");
ulEl.innerHTML = list;
