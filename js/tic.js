
/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/*-------------------------------- Variables --------------------------------*/
let board
let turn
let winner
let tie

/*------------------------ Cached Element References ------------------------*/
const ticGameContainerEl = document.getElementById('tic-game-container')
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.getElementById('message')
const resetEl = document.getElementById('reset')

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(square) {
  square.addEventListener('click', handleClick)
})


/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = -1
  winner = false
  tie = false
  render()
}

function render() {
  updateBoard()
  updateMessage()
}

function updateBoard() {//board[idx], idx
  board.forEach(function(boardValue, idx) {
    if (boardValue === 1) {
      //Display x
      squareEls[idx].textContent = 'X'
      squareEls[idx].style.backgroundColor = 'lightsalmon'
    } else if (boardValue === -1) {
      //Display 0
      squareEls[idx].textContent = 'O'
      squareEls[idx].style.backgroundColor = 'lightseagreen'
    } else {
      //Display nothing
      squareEls[idx].textContent = ''
      squareEls[idx].style.backgroundColor = 'grey'
    }
  })
}

function updateMessage() {
  if (winner === false && tie === false) {
    messageEl.textContent = `It's ${turn === 1 ? 'X' : 'O'}'s turn!`
  } else if (winner === false && tie === true) {
    messageEl.textContent = `It's a tie.`
  } else {
    messageEl.textContent = `${turn === -1 ? 'X' : 'O'} WINS!!!`
    resetEl.style = ''
  }
}

function handleClick(evt) {
  const sqrIdx = parseInt(evt.target.id.slice(2))
  //// const sqrIdx = evt.target.id[2]
  //// const sqrIdx = evt.target.id.replace('sq', '')
  if (board[sqrIdx] || winner) return
  placePiece(sqrIdx)
  checkForTie()
  checkForWinner()
  render()
}

function checkForWinner() {
  if (
    Math.abs(board[0] + board[1] + board[2]) === 3 ||
    Math.abs(board[3] + board[4] + board[5]) === 3 ||
    Math.abs(board[6] + board[7] + board[8]) === 3 ||
    Math.abs(board[0] + board[3] + board[6]) === 3 ||
    Math.abs(board[1] + board[4] + board[7]) === 3 ||
    Math.abs(board[2] + board[5] + board[8]) === 3 ||
    Math.abs(board[2] + board[4] + board[6]) === 3 ||
    Math.abs(board[0] + board[4] + board[8]) === 3
    ) {
    winner = true
  }
}

function checkForTie() {
  if (board.includes(null) && !winner) {
    return
  } else {
    tie = true
  }
}

function placePiece(idx) {  
  board[idx] = turn
  turn *= -1
}

// 1) Define the required variables used to track the state of the game

// 2) Store cached element references

// 3) Upon loading, the game state should be initialized, and a function should be 
//    called to render this game state

// 4) The state of the game should be rendered to the user

// 5) Define the required constants

// 6) Handle a player clicking a square with a `handleClick` function

// 7) Create Reset functionality