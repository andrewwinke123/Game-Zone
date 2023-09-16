import { confetti } from './confetti.js'
import * as gameAudio from './audio.js'


/*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissors']


/*-------------------------------- Variables --------------------------------*/
let playerChoice, computerChoice, msg
let playerScore = 0
let computerScore = 0


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
    msg = 'You LOOOOOOSE'
    computerScore++
    gameAudio.playLoseSound()
  } else if (playerChoice === choices[1] && computerChoice === choices[2]) {
    msg = 'You LOOOOOOSE'
    computerScore++
    gameAudio.playLoseSound()
  } else if (playerChoice === choices[2] && computerChoice === choices[0]) {
    msg = 'You LOOOOOOSE'
    computerScore++
    gameAudio.playLoseSound()
  } else {
    msg = 'Congrats! you WIN!!!!'
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

function render() {
  const msgEl = document.createElement('span')
  msgEl.className = 'popup-message'
  msgEl.textContent = msg

  resultDisplayEl.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}.`
  resultDisplayEl.appendChild(msgEl)
  
  playerScoreEl.textContent = `Your score: ${playerScore}`
  computerScoreEl.textContent = `Computer score: ${computerScore}`
}