// tic tac toe

// 1. make the board
// 1 board <div>
// 9 cells <div>
// player1 /player2
// indicate whose turn it is
// 2. cells need to be clickable
// clicking adds values
// ** once there is a value, it can't be changed
// clear the board, reload the page (optional)
// 3. clear the baord(optional)
// 4. 2 players
// flag for current player
// each player is assigned either X or O
// 5. create an array of current cell values
//  refresh on each change
// 6.create all possible win conditions (array of 8 arrays)

const board = document.getElementById("board");
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");

const PLAYER_1_ICON = "X";
const PLAYER_2_ICON = "O";

let COUNTER = 0;

let currentPlayer = "1";
player1.classList.add("active");

const win = () => {
  board.removeEventListener("click", handleClick);
  alert(`Player ${currentPlayer} wins!`);
};

const checkWin = () => {
  // ROWS
  if (grid[0] === grid[1] && grid[1] === grid[2]) win();
  if (grid[3] === grid[4] && grid[4] === grid[5]) win();
  if (grid[6] === grid[7] && grid[7] === grid[8]) win();

  // COLUMNS
  if (grid[0] === grid[3] && grid[3] === grid[6]) win();
  if (grid[1] === grid[4] && grid[4] === grid[7]) win();
  if (grid[2] === grid[5] && grid[5] === grid[8]) win();

  // DIAGONALS
  if (grid[0] === grid[4] && grid[4] === grid[8]) win();
  if (grid[2] === grid[4] && grid[4] === grid[6]) win();
};

const grid = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const togglePlayer = () => {
  currentPlayer = currentPlayer === "1" ? "2" : "1";
  player1.classList.toggle("active");
  player2.classList.toggle("active");
};

const handleClick = () => {
  const cell = event.target.id;
  const currentDiv = document.getElementById(cell);
  const cellId = cell.split("").slice(-1);
  if (!currentDiv.innerText.length && typeof grid[cellId] === "number") {
    if (currentPlayer === "1") {
      currentDiv.innerText = PLAYER_1_ICON;
      grid[cellId] = PLAYER_1_ICON;
    } else {
      currentDiv.innerText = PLAYER_2_ICON;
      grid[cellId] = PLAYER_2_ICON;
    }
    COUNTER += 1;
    if (COUNTER < 9) {
      checkWin();
      togglePlayer();
    } else {
      alert("It's a draw!");
    }
  }
};

board.addEventListener("click", handleClick);
