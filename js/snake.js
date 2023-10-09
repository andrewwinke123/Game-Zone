
/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let lastRenderTime = 0
const snakeSpeed = 2

/*------------------------ Cached Element References ------------------------*/
const snakeGameContainerEl = document.getElementById('snake-game-container')


/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/
function main(currentTime) {
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / snakeSpeed) return
  
  console.log('render')
  lastRenderTime = currentTime
}

window.requestAnimationFrame(main)