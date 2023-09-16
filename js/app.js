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

function play(evt) {
  getPlayerChoice(evt)
  console.log(playerChoice)
}



// 4) Handle generating random selections for the computer player

// 5) Compare the player choice to the computer choice, and check for a winner

// 6) Render a win/lose/tie message to the player