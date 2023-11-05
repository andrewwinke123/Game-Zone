
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

// Universal back button reference
const backToGameScreenBtn = document.getElementById('back-to-game-screen')


/*----------------------------- Event Listeners -----------------------------*/
nameSubmitEl.addEventListener('click', setName)
rockGameLinkEl.addEventListener('click', showRockGame)
ticGameLinkEl.addEventListener('click', showTicGame)
snakeGameLinkEl.addEventListener('click', showSnakeGame)
backToGameScreenBtn.addEventListener('click', showGameScreen)

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
  event.preventDefault()
  hideAllGameContainers()
  rockGameContainerEl.style.display = "block"
}

function showTicGame(event) {
  event.preventDefault()
  hideAllGameContainers()
  ticGameContainerEl.style.display = "block"
}

function showSnakeGame(event) {
  event.preventDefault()
  hideAllGameContainers()
  snakeGameContainerEl.style.display = "block"
}

function hideAllGameContainers() {
  gameScreenEl.style.display = "none"
  rockGameContainerEl.style.display = "none"
  ticGameContainerEl.style.display = "none"
  snakeGameContainerEl.style.display = "none"
}

function showGameScreen() {
  gameScreenEl.style.display = "block"
  rockGameContainerEl.style.display = "none"
  ticGameContainerEl.style.display = "none"
  snakeGameContainerEl.style.display = "none"
}