const ulEl = document.querySelectorAll(".item");
const ulElCount = ulEl.length;
console.log("Number of Categories:", ulElCount);

ulEl.forEach(function (elem) {
  const nameOfElements = elem.querySelector("h2");
  const numberOfElements = elem.querySelectorAll("li");
  console.log(`Category: ${nameOfElements.textContent}`);
  console.log(`Elements: ${numberOfElements.length}`);
});
