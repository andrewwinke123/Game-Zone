import { confetti } from './confetti.js'
import * as gameAudio from './audio.js'


/*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissors']


/*-------------------------------- Variables --------------------------------*/
let playerChoice, computerChoice, msg
let playerScore = 0
let computerScore = 0
let playerName = "" 


/*------------------------ Cached Element References ------------------------*/
const resultDisplayEl = document.getElementById('result-display')
const playerScoreEl = document.getElementById('player-score')
const computerScoreEl = document.getElementById('computer-score')



/*----------------------------- Event Listeners -----------------------------*/
document.getElementById('rock').addEventListener('click', play)
document.getElementById('paper').addEventListener('click', play)
document.getElementById('scissors').addEventListener('click', play)






/*-------------------------------- Functions --------------------------------*/

function getPlayerChoice(evt) {
  playerChoice = evt.target.id
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length)
  computerChoice = choices[randomIndex]
}

function compare() {
  if (playerChoice === computerChoice) {
    msg = 'You tied!'
    gameAudio.playLoseSound()
  } else if (playerChoice === choices[0] && computerChoice === choices[1]) {
    msg = 'You lose.'
    computerScore++
    gameAudio.playLoseSound()
  } else if (playerChoice === choices[1] && computerChoice === choices[2]) {
    msg = 'You lose.'
    computerScore++
    gameAudio.playLoseSound()
  } else if (playerChoice === choices[2] && computerChoice === choices[0]) {
    msg = 'You lose.'
    computerScore++
    gameAudio.playLoseSound()
  } else {
    msg = 'You WIN!!!!'
    playerScore++
    gameAudio.playWinSound()
    confetti.start(1000)
  }
}

function play(evt) {
  getPlayerChoice(evt)
  getComputerChoice()
  compare()
  render()
}

// highlight function
function highlightChoice(choice, className) {
  const btn = document.getElementById(choice)
  if (className === 'highlight-both') {
    btn.classList.add('highlight-both')
  } else {
    btn.classList.add(className)
  }
}

// Remove highlights from all buttons
function clearHighlights() {
  choices.forEach(choice => {
    const btn = document.getElementById(choice)
    btn.classList.remove('highlight-computer', 'highlight-player', 'highlight-both')
  })
}

function render() {
  const msgEl = document.createElement('span')
  msgEl.className = 'popup-message'
  msgEl.textContent = msg


  clearHighlights()
  // Highlight computer's and player's choices
  if (playerChoice === computerChoice) {
    // Both chose the same, highlight grey
    highlightChoice(playerChoice, 'highlight-both')
  } else {
    // Different choices, highlight individually
    highlightChoice(computerChoice, 'highlight-computer')
    highlightChoice(playerChoice, 'highlight-player')
  }

  resultDisplayEl.textContent = `${msgEl.textContent}`
  // Move the result-display to the position above the player's choice button
  const buttonPosition = document.getElementById(playerChoice).getBoundingClientRect()
  resultDisplayEl.style.left = `${buttonPosition.left}px`
  resultDisplayEl.style.top = `${buttonPosition.top - resultDisplayEl.clientHeight - 20}px`

  playerScoreEl.textContent = `${playerName}'s score: ${playerScore}`
  computerScoreEl.textContent = `Computer score: ${computerScore}`
  setTimeout(clearHighlights, 4000)
}