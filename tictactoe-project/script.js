// Initialize Modal for Player Names

window.onload = function () {
  player1Name();
}

// Show New Game Button Function

function showButton(){
    let displayNewGame = document.querySelector('.resetButton')
    displayNewGame.style.display = "block";
}

// Hide New Game Button Function

function hideButton(){
    let displayNewGame = document.querySelector('.resetButton')
    displayNewGame.style.display = "none";
}

// hide Nav Buttons
function hideNavButtons(){
  let displayNavButton = document.querySelector('.navButtons')
  displayNavButton.style.display = "none";
}

// show Nav Buttons
function showNavButtons(){
  let displayNavButton = document.querySelector('.navButtons')
  displayNavButton.style.display = "block";
}

// Player names function in modal

let textPlayer1 = "";
let textPlayer2 = "";

function player1Name() {
    
      swal("Enter name for Player 1:", {
        content: "input",
        button: "Confirm",
      })
      .then((value) => {
        textPlayer1 =  document.getElementById("player1name").innerHTML = `${value}`;
        if (`${value}` === null || `${value}` === "") {
          alert("Player 1 Name cannot be blank!");
          player1Name();
      } else {
        player2Name();
      }
    }
  )};
  
function player2Name() {

  swal("Enter name for Player 2:", {
    content: "input",
    button: "Confirm",
  })
  .then((value) => {
    textPlayer2 =  document.getElementById("player2name").innerHTML = `${value}`;
    if (textPlayer2 === null || textPlayer2 === "") {
      alert("Player 2 Name cannot be blank!");
      player2Name();
  } else{
    playerNameChange();
    swal("Great!", "Let's play Tic Tac Toe!", "success", {
      button: "Let's Go!"
    });
  }
}
)};

// Function for storing move history thru JSON.stringify
function historyCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
// Initialize board / History array to store move history / Player's turn counter/conditions

let board = [
  ["","",""],
  ["","",""],
  ["","",""]
];
let history = [];
while(board.length)history.push(board.splice(0,3));
let playersTurn = 0; 
let playerWinner = false;
let scoreP1 = 1;
let scoreP2 = 1;


function playerTurn() {
    if (playersTurn % 2 === 1 ){
        const player1 = "❌";
        return player1;
    } else {
        const player2 = "〇";
        return player2;
    }
  }

// Function of board's movement when a player clicked in the board

function triggerCellMovement(event) {
    playersTurn++
    let currentCell = parseInt(event.currentTarget.firstElementChild.dataset.id);
    let cellToAddToken = document.querySelector(`[data-id = '${currentCell}']`);

      if (cellToAddToken.innerHTML !== '') {
        alert('Cell is already taken! Choose another cell.');
        return playersTurn--;
      } else {
      if (playerTurn() === "❌") {
        cellToAddToken.textContent = playerTurn();
        board[currentCell] = "❌";
        history.push(historyCopy(board).slice());
        playerNameChange();
        checkWin();
        tieCheck();
     }
      if (playerTurn() === "〇") {
        cellToAddToken.textContent = playerTurn();
        board[currentCell] = "〇";
        history.push(historyCopy(board).slice());
        playerNameChange();
        checkWin();
        tieCheck();
      } 
    }
    }

// Function to check if the game is a tie

function tieCheck() {
  if (!playerWinner){
  if (playersTurn > 8) { 
    let displayPlayer = document.querySelector('.displayInfo');
    displayPlayer.innerHTML = "Draw! 🙅🏻";
    removeCellClick();
    showButton();
    showNavButtons();
    playerWinner = false;
    return false;
  }
}
}

// Event listener for player's move/click in the board

function triggerCellClick() {
    const cells = document.querySelectorAll('.grid-container');
    cells.forEach( cell => {
    cell.addEventListener('click', triggerCellMovement);
    });
  }

// Function to disable click in the board after win/draw
  
function removeCellClick() {
    const cells = document.querySelectorAll('.grid-container');
    cells.forEach( cell => {
    cell.removeEventListener('click', triggerCellMovement);
    });
  }

triggerCellClick();

// Change info status in depending on player's turn

function playerNameChange() {
      let displayPlayer = document.querySelector('.displayInfo');
      if (playerTurn() === "❌") {
          displayPlayer.innerHTML = `${textPlayer2}'s turn`;
      }  
      if (playerTurn() === "〇") {
          displayPlayer.innerHTML = `${textPlayer1}'s turn`;
      }
  }

// Function to check if there's a winner
  function checkWin() {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    winCombinations.forEach( winningCombos => {
      let cell1 = winningCombos[0];
      let cell2 = winningCombos[1];
      let cell3 = winningCombos[2];
      if (
        board[cell1] === playerTurn() &&
        board[cell2] === playerTurn() &&
        board[cell3] === playerTurn()
      ) {
  
        
        const cells = document.querySelectorAll('.grid-container');
        cells.forEach( cell => {
          let cellId = cell.firstElementChild.dataset.id;	
  
          if (cellId == cell1 || cellId == cell2 || cellId == cell3 ) {
            cell.classList.add('change-color-winner');
          }
        });
        
        let displayPlayer = document.querySelector('.displayInfo');
        if (playerTurn() === "❌") {
          displayPlayer.innerHTML = `${textPlayer1}, You are the Winner! 🎉`;
          removeCellClick();
          showButton();
          showNavButtons();
          player1Score();
          playerWinner = true;
          return true;

        } if (playerTurn() === "〇") {
          displayPlayer.innerHTML = `${textPlayer2}, You are the Winner! 🎉`;
          removeCellClick();
          showButton();
          showNavButtons();
          player2Score();
          playerWinner = true;
          return true;
        }
      }
    });
}

// Reset board after win / Reset all (not including the score)

function triggerBoardReset(){

    playersTurn = 0;
    playerWinner = false;

    board = [
      ["","",""],
      ["","",""],
      ["","",""]
    ];
    history = [];
    while(board.length)history.push(board.splice(0,3));

    let cellSelector = document.querySelectorAll(".characters");
    cellSelector.forEach (characterBox =>{
        characterBox.textContent = '';
    });

    let changeColorSelector = document.querySelectorAll(".grid-container");
    changeColorSelector.forEach(gridBox => {
        gridBox.classList.remove("change-color-winner");
    });

    let displayPlayer = document.querySelector('.displayInfo');
    displayPlayer.innerHTML = `${textPlayer1}'s turn`;

    triggerCellClick();
    hideButton();
    hideNavButtons();

}

// Scoring Function

function player1Score(){
  if (playerWinner === false){
  let displayScore1 = document.querySelector('#scorePlayer1');
  displayScore1.innerHTML = scoreP1;
  return scoreP1 ++;
}
}

function player2Score(){
  if (playerWinner === false){
  let displayScore1 = document.querySelector('#scorePlayer2');
  displayScore1.innerHTML = scoreP2;
  return scoreP2 ++;
}
}

// Move History Functions

function previousFunction() {
    if(playersTurn >= 2){
      playersTurn --;
      let cellSelector = document.querySelectorAll(".characters");
      cellSelector.forEach(cellPieces =>{
        let historyGrid = history[playersTurn];
        cellPieces.textContent = historyGrid[cellPieces.getAttribute(`data-id`)];
      });
    }
}
  
function nextFunction(){

  if(playersTurn >= 0){
    playersTurn ++;
    let cellSelector = document.querySelectorAll(".characters");
    cellSelector.forEach(cellPieces =>{
      let historyGrid = history[playersTurn];
      cellPieces.textContent = historyGrid[cellPieces.getAttribute(`data-id`)];
    });
  } 
}

  
    












