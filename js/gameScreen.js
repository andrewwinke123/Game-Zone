
/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let playerName = "" 

/*------------------------ Cached Element References ------------------------*/
const gameScreenEl = document.getElementById('game-screen')
const nameInputEl = document.getElementById('name-input')
const nameSubmitEl = document.getElementById('name-submit')
const nameInputContainerEl = document.getElementById('name-input-container')
const rockGameLinkEl = document.getElementById('rock-game')
const ticGameLinkEl = document.getElementById('tic-game')
const snakeGameLinkEl = document.getElementById('snake-game')
const rockGameContainerEl = document.getElementById('rock-game-container')
const ticGameContainerEl = document.getElementById('tic-game-container')
const snakeGameContainerEl = document.getElementById('snake-game-container')

/*----------------------------- Event Listeners -----------------------------*/
nameSubmitEl.addEventListener('click', setName)
rockGameLinkEl.addEventListener('click', showRockGame)
ticGameLinkEl.addEventListener('click', showTicGame)
snakeGameLinkEl.addEventListener('click', showSnakeGame)

//back button
const backToGameScreenFromRockEl = document.getElementById('back-to-game-screen-from-rock')
const backToGameScreenFromTicEl = document.getElementById('back-to-game-screen-from-tic')
const backToGameScreenFromSnakeEl = document.getElementById('back-to-game-screen-from-snake')

//back button
backToGameScreenFromRockEl.addEventListener('click', showGameScreen)
backToGameScreenFromTicEl.addEventListener('click', showGameScreen)
backToGameScreenFromSnakeEl.addEventListener('click', showGameScreen)

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

function showRockGame(event) {
  event.preventDefault() // Prevent the default action of the anchor tag
  gameScreenEl.style.display = "none" 
  rockGameContainerEl.style.display = "block" 
}

function showTicGame(event) {
  event.preventDefault() // Prevent the default action of the anchor tag
  gameScreenEl.style.display = "none" 
  ticGameContainerEl.style.display = "block" 
}
function showSnakeGame(event) {
  event.preventDefault() // Prevent the default action of the anchor tag
  gameScreenEl.style.display = "none" 
  snakeGameContainerEl.style.display = "block" 
}

function showGameScreen() {
  gameScreenEl.style.display = "block" // Show the game screen
  rockGameContainerEl.style.display = "none" // Hide the rock game container
  ticGameContainerEl.style.display = "none" // Hide the tic game container
  snakeGameContainerEl.style.display = "none" // Hide the snake game container
}