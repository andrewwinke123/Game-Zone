
/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let lastRenderTime = 0

/*------------------------ Cached Element References ------------------------*/
const snakeGameContainerEl = document.getElementById('snake-game-container')


/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/
function main(currentTime) {
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  window.requestAnimationFrame(main)
  lastRenderTime = currentTime
}

window.requestAnimationFrame(main)