const textEl = document.querySelector("#text"); // отримали посилання на дом ноду на якийсь елемент з айдішніком text
const inputEl = document.querySelector("#font-size-control"); // те саме тільки з інпутом

inputEl.addEventListener("input", () => {
  // поставили слухач на inputEl
  const size = inputEl.value; //створили змінну size значення якої inputEl.value(це рядок)
  textEl.style.fontSize = size + "px"; // додали інлайн стиль для textEl, міняємо розмір шрифта
});
