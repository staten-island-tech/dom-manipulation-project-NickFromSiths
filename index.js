const DOMSelectors = {
  image: document.querySelector("img"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector("btn"),
  description: document.querySelector(".Description"),
  container: document.querySelector(".container"),
};

// DOMSelectors.button.addEventListener("click", function (event) {
//   console.groupCollapsed(event.target.parentElement);
//   event.target.parentElement.style.backgroundColor = "red";
// });
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
  cards();
});

// document.formRemove()
// h1.remove()

function cards() {
  const card = [
    (header = DOMSelectors.cardHeader),
    (img = DOMSelectors.image),
    (desc = DOMSelectors.description),
  ];

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"><h2 class="card-header">${card.header}</h2><img src="${card.img}"></div>`
  );
}
