const DOMSelectors = {
  header: document.querySelector("h1"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector(".btn"),
  form: document.querySelector("form"),
};

DOMSelectors.button.addEventListener("click", function (event) {
  console.groupCollapsed(event.target.parentElement);
  event.target.parentElement.style.backgroundColor = "red";
});
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
});
