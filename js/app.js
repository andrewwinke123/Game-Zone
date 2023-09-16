/*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissors']


/*-------------------------------- Variables --------------------------------*/
let playersChoice, computersChoice, msg


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

function play(evt) {
  getPlayerChoice(evt)
  console.log(playerChoice)
}