
/*-------------------------------- Constants --------------------------------*/
const snakeSpeed = 2
const snakeBody = [{ x: 11, y: 11}]


/*-------------------------------- Variables --------------------------------*/
let lastRenderTime = 0

/*------------------------ Cached Element References ------------------------*/
const snakeGameContainerEl = document.getElementById('snake-game-container')
const  gameBoard = document.getElementById('snake-game-board')


/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/
function main(currentTime) {
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / snakeSpeed) return
  
  console.log('render')
  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)


function update() {
  updateSnake()
}

function draw() {
  drawSnake(gameBoard)
}

function updateSnake() {

}

function drawSnake() {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.x
    snakeElement.style.gridColumnStart = segment.y
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}