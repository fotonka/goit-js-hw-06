function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");
btnEl.addEventListener("click", onClick);

let randomColor = getRandomHexColor();

function onClick(event) {
  const color = (event.currentTarget.style.backgroundColor = randomColor);
  console.log(color);
  spanEl.innerText = color;
  console.log(spanEl);
}
