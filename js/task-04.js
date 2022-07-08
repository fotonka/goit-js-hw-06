let valueEl = Number(document.querySelector("#value").textContent);

let counterEl = document.querySelector("#value");

const incrBtn = document.querySelector('button[data-action="increment');
const decrBtn = document.querySelector('button[data-action="decrement');

incrBtn.addEventListener("click", () => {
  valueEl += 1;
  counterEl.innerText = valueEl;
});

decrBtn.addEventListener("click", () => {
  valueEl -= 1;
  counterEl.innerText = valueEl;
});
