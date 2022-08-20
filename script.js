let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(_event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  document.getElementById("main-title").textContent= "Dom T's Homepage";

//
  // Part 2
  document.querySelector("body").style.backgroundColor="orange";

//
  // Part 3
  // const rmLstItm = document.querySelector("li:last-child")
  // rmLstItm.parentElement.removeChild(rmLstItm);//this works - class example
  
  //  const domFavThings = document.getElementById('favorite-things');
  //  domFavThings.removeChild(domFavThings.lastElementChild); // this works

  document.getElementById("favorite-things").lastElementChild.remove(); 
 
//
  // Part 4
  // Select all `.special-title` class elements and change their `font-size` to `2rem`. Remember you might have to iterate through the list of elements

  // const specialTitle = document.querySelectorAll(".special-title");
  // for (let title of specialTitle) {
  //     title.style.fontsize = '2rem'
  // } this works

   document.getElementsByClassName("special-title")[0].style.fontSize = '2rem';

  // Part 5
  // Turns out DOM never raced in **Chicago**. Access the **Past Races** list and remove **Chicago**.

  // const pastRace = document.getElementById('past-races');
  //   pastRace.removeChild(pastRace.children[3]); //this works


  document.getElementById('past-races').removeChild(document.getElementById('past-races').children[3]);

  // Part 6
  // Let's add to DOM's **Past Races** list. Create a new `<li>` element, change the new `<li>` text to the name of a city, and append it to the **Past Races** list.

  // const newPastList = document.createElement('li');
  // newPastList.textContent = "Turin"
  // document.getElementById('past-races').appendChild(newPastList)//this works

  document.getElementById('past-races').appendChild(document.createElement('li')).textContent = "Turin";

  // Part 7
  // Create a new `.blog-post` corresponding to the new city added in **Part 6**. Create a new `<div>` with class of `.blog-post`, a new `<h2>` with text, and a new `<p>` with some text. 
  
  const newDivElement = document.createElement("div");
  const mainDiv = document.querySelector(".main");

  newDivElement.classList.add("blog-post");
  newDivElement.classList.add("purple");

  const h2Element = document.createElement("h1");
  const pElement = document.createElement("p");

  h2Element.textContent = "Turin";
  pElement.textContent = "BURNING RUBBER THRU ITALY! #Fast10 #fastX release May 2023!"

  mainDiv.appendChild(newDivElement);
  newDivElement.appendChild(h2Element);
  newDivElement.appendChild(pElement);

  // Part 8
  // When you reload the page, the `script.js` file loads a random DOM quote. Let's play with the included function:

// const randomQuote = function() {
//   document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
// };

// Query select the `#quote-title` ID element and add a **click** event handler. That event handler should use the function `randomQuote` whenever `#quote-title` is clicked.

const randomQuoteElement = document.getElementById("quote-title");
randomQuoteElement.addEventListener('click', (_evt)=>{
  randomQuote()
})

  // Part 9
  // Select all `.blog-post` class elements. Iterate through the list of `.blog-post` class elements and apply two event handlers to each node. The first event handler should be listening for `mouseout` events while the second handler should be listening for `mouseenter` events.

    // - The `mouseout` handler should toggle the class `.purple`
    // - The `mouseenter` handler should toggle the class `.red`

    // > Hint:

    // > Remember the document node property `.classList` and the document node method `.toggle()`.

    const blogPostElement = document.querySelectorAll(".blog-post");
    blogPostElement.forEach((item) =>{
      item.addEventListener("mouseout",(_evt)=>{
        item.classList.toggle("red");
        item.classList.toggle("purple");
      })
      item.addEventListener("mouseenter", (_evt)=>{
        item.classList.toggle("purple");
        item.classList.toggle("red");
      })
    })







});
