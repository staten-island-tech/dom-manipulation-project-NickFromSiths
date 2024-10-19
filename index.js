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


function resetInput(){
  const form = [DOMSelectors.image, DOMSelectors.cardHeader, DOMSelectors.description]
  form.forEach(DOMSelectors => {
    DOMSelectors.form.reset();
  });
}




function cards() {
  const card = {
    header: DOMSelectors.cardHeader.value,
    desc: DOMSelectors.description.value,
    img: DOMSelectors.image.value,
  };

  console.log(card);
  
  const specific = 
    `<div class="card"> 
      <div class="cardcontainer">
        <h2 class="Title">${card.header}</h2> 
        <p class="Description">${card.desc}</p> 
        <img src="${card.img}" alt="${card.header}" class="Image"></img>
      </div>
      <button id="remove">Delete</button>
    </div>`;

  DOMSelectors.container.insertAdjacentHTML("beforeend", specific);
  resetInput();
  deletecard();
};

function deletecard(){
  const remov = document.querySelectorAll("#remove")
  remov.forEach(button => {
    button.addEventListener("click", function(event){
      event.preventDefault();
      const card = button.closest(".card")
      card.remove();
    })
  });
};



//gpt was giving me code that some of it didnt even work




// const removecard = document.querySelector("#remove");
// // removecard.addEventListener("click", function(event){
// //   event.preventDefault();
// //   const card = removecard.closest(".card");
// //   card.remove();
// // });





// function remove(){

// };
  // remove();


// DOMSelectors.container.Element.remove(specific);


// DOMSelectors.button.addEventListener("click", function (event) {
//   console.groupCollapsed(event.target.parentElement);
//   event.target.parentElement.style.backgroundColor = "red";
// });




// document.formRemove()
// h1.remove()