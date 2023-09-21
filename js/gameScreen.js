
/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let playerName = "" 

/*------------------------ Cached Element References ------------------------*/
const gameScreenEl = document.getElementById('game-screen')
const nameInputEl = document.getElementById('name-input')
const nameSubmitEl = document.getElementById('name-submit')
const nameInputContainerEl = document.getElementById('name-input-container')

/*----------------------------- Event Listeners -----------------------------*/
nameSubmitEl.addEventListener('click', setName)


/*-------------------------------- Functions --------------------------------*/
function setName() {
  playerName = nameInputEl.value
  if (playerName) { // If the name isn't empty
    gameScreenEl.style.display = "block"  // Show the game
    nameInputContainerEl.style.display = "none" // Hide the name input
  } else {
    alert("Please enter your name!")
  }
}