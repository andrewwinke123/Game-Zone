
/*-------------------------------- Constants --------------------------------*/
const snakeSpeed = 5
const snakeBody = [{ x: 11, y: 11}]
const expansionRate = 3
const gridSize = 21


/*-------------------------------- Variables --------------------------------*/
let lastRenderTime = 0
let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }
let food = getRandomFoodPosition()
let newSegments = 0
let gameOver = false

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
  if (gameOver) {
      if (confirm('You lost. Press ok to restart.')) {
          resetGame()
          draw() // Redraw immediately to reflect the reset state
      } else {
          return // Don't continue if the user didn't confirm
      }
  }

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
  updateFood()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function updateSnake() {
  const inputDirection = getInputDireciton()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y

  // Check if the snake has hit the boundaries or itself
  if (outsideGrid(getSnakeHead()) || snakeIntersection()) {
    gameOver = true;
  }

  addSegments()
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



function updateFood() {
  if (onSnake(food)) {
    expandSnake(expansionRate)
    food = getRandomFoodPosition()
  }
}

function drawFood(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function expandSnake(amount) {
  newSegments += amount
}

function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position)
  })
}


function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }
  newSegments = 0
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}

function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * gridSize) + 1,
    y: Math.floor(Math.random() * gridSize) + 1
  }
}

function getSnakeHead() {
  return snakeBody[0]
}

function outsideGrid(position) {
  return (
    position.x < 1 || position.x > gridSize ||
    position.y < 1 || position.y > gridSize
  )
}

function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true })
}

function resetGame() {
  snakeBody.splice(0, snakeBody.length, { x: 11, y: 11 })
  newSegments = 0
  inputDirection = { x: 0, y: 0 }
  lastInputDirection = { x: 0, y: 0 }
  food = getRandomFoodPosition()
  gameOver = false
}

