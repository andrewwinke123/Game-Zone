/*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissors']


/*-------------------------------- Variables --------------------------------*/
let playerChoice, computerChoice, msg


/*------------------------ Cached Element References ------------------------*/
const resultDisplayEl = document.getElementById('result-display')


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
  } else if (playerChoice === choices[0] && computerChoice === choices[1]) {
    msg = 'You LOOOOOOSE'
  } else if (playerChoice === choices[1] && computerChoice === choices[2]) {
    msg = 'You LOOOOOOSE'
  } else if (playerChoice === choices[2] && computerChoice === choices[0]) {
    msg = 'You LOOOOOOSE'
  } else {
    msg = 'Congrats! you WIN!!!!'
  }
}

function play(evt) {
  getPlayerChoice(evt)
  console.log(playerChoice)
}

function render() {
  resultDisplayEl.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. ${msg}`
}