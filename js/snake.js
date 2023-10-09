
/*-------------------------------- Constants --------------------------------*/
const snakeSpeed = 2
const snakeBody = [{ x: 11, y: 11}]


/*-------------------------------- Variables --------------------------------*/
let lastRenderTime = 0
let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

/*------------------------ Cached Element References ------------------------*/
const snakeGameContainerEl = document.getElementById('snake-game-container')
const  gameBoard = document.getElementById('snake-game-board')


/*----------------------------- Event Listeners -----------------------------*/
window.addEventListener('keydown', evt => {
  switch (evt.key) {
    case 'ArrowUp':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: -1 }
      break
      case 'ArrowDown':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 }
      break
      case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      break
      case 'ArrowRight':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      break
  }
})

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
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
}

function updateSnake() {
  const inputDirection = getInputDireciton()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
}

function drawSnake(gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}

function getInputDireciton() {
  lastInputDirection = inputDirection
  return inputDirection
}