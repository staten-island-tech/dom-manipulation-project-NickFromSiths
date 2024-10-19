const DOMSelectors = {
  image: document.querySelector("#image"),
  cardHeader: document.querySelector("#title"),
  button: document.querySelector(".sub"),
  description: document.querySelector("#description"),
  container: document.querySelector(".container"),

};

DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log(DOMSelectors.description.value, DOMSelectors.cardHeader.value, DOMSelectors.image.value);
  // console.log(DOMSelectors.cardHeader);
  cards();
});


function cards() {
  const card = {
    header: DOMSelectors.cardHeader.value,
    desc: DOMSelectors.description.value,
    img: DOMSelectors.image.value,
    
  };


  console.log(card);
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"> 
      <div class="cardcontainer">
        <h2 class="Title">${card.header}</h2> 
        <p class="Description">${card.desc}</p> 
        <img src="${card.img}" alt="${card.header}" class="Image"></img>
        <button id="remove">Delete</button>
      </div> 
    </div>`
  );
  const DOMselector = {remove: document.querySelector("#remove"),}
  DOMselector.remove.addEventListener("click", function(event){
    event.preventDefault();
    DOMSelectors.container.removeChild();
  });
}











// DOMSelectors.button.addEventListener("click", function (event) {
//   console.groupCollapsed(event.target.parentElement);
//   event.target.parentElement.style.backgroundColor = "red";
// });




// document.formRemove()
// h1.remove()