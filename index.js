const DOMSelectors = {
  image: document.querySelector("Image"),
  cardHeader: document.querySelector("Title"),
  button: document.querySelector(".sub"),
  description: document.querySelector("Description"),
  container: document.querySelector(".container"),
  form: document.querySelector("form"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector(".Title").value);
  // console.log(DOMSelectors.cardHeader);
  cards();
});



function cards() {
  const card = [
    (header = DOMSelectors.cardHeader),
    (img = DOMSelectors.image),
    (desc = DOMSelectors.description),
  ];

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"><h2 class="card-header">${card.header}</h2><img src="${card.img}" alt="" ></div>`
  );
}











// DOMSelectors.button.addEventListener("click", function (event) {
//   console.groupCollapsed(event.target.parentElement);
//   event.target.parentElement.style.backgroundColor = "red";
// });




// document.formRemove()
// h1.remove()