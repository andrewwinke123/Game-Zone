let winSound = new Audio('../media/Congratulations, You Won!.mp3')
let loseSound = new Audio('../media/The Price is Right Losing Horn - Sound Effect (HD).mp3')

function playWinSound() {
  winSound.play()
}

function playLoseSound() {
  loseSound.play()
}

export {
  playWinSound,
  playLoseSound,
}