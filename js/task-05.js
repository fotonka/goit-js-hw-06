let inputEl = document.querySelector("#name-input");
inputEl.addEventListener("input", inputChanged);

let outputEl = document.querySelector("#name-output");

function inputChanged(event) {
  inputEl = event.currentTarget.value;

  if (inputEl === "") {
    outputEl.innerText = "Anonymous";
  } else {
    outputEl.innerText = inputEl;
  }
}
