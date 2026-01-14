// ==============================
// STATE MANAGEMENT
// ==============================
const gameState = {
  player1: {
    name: "",
    wins: 0,
    losses: 0,
    draws: 0,
  },
  player2: {
    name: "",
    wins: 0,
    losses: 0,
    draws: 0,
  },
  lastWinner: null, // 'player1', 'player2', or 'draw'
};

// ==============================
// DOM ELEMENTS
// ==============================
// Setup Screen Elements
const setupScreen = document.getElementById("setupScreen");
const counterScreen = document.getElementById("counterScreen");
const player1Input = document.getElementById("player1Input");
const player2Input = document.getElementById("player2Input");
const startButton = document.getElementById("startButton");

// Counter Screen Elements
const player1Name = document.getElementById("player1Name");
const player2Name = document.getElementById("player2Name");
const player1NameStats = document.getElementById("player1NameStats");
const player2NameStats = document.getElementById("player2NameStats");

const player1Wins = document.getElementById("player1Wins");
const player1Losses = document.getElementById("player1Losses");
const player1Draws = document.getElementById("player1Draws");

const player2Wins = document.getElementById("player2Wins");
const player2Losses = document.getElementById("player2Losses");
const player2Draws = document.getElementById("player2Draws");

const lastGame = document.getElementById("lastGame");

const player1Button = document.getElementById("player1Button");
const player2Button = document.getElementById("player2Button");
const player1ButtonText = document.getElementById("player1ButtonText");
const player2ButtonText = document.getElementById("player2ButtonText");

const drawButton = document.getElementById("drawButton");
const resetButton = document.getElementById("resetButton");

// ==============================
// SETUP SCREEN FUNCTIONALITY
// ==============================

// Enable start button only when both names are entered
function validateInputs() {
  const name1 = player1Input.value.trim();
  const name2 = player2Input.value.trim();

  if (name1 && name2) {
    startButton.disabled = false;
  } else {
    startButton.disabled = true;
  }
}

// Listen for input changes
player1Input.addEventListener("input", validateInputs);
player2Input.addEventListener("input", validateInputs);

// Handle Enter key in inputs
player1Input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    player2Input.focus();
  }
});

player2Input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && !startButton.disabled) {
    startCounter();
  }
});

// Start the counter
function startCounter() {
  // Get and store player names
  gameState.player1.name = player1Input.value.trim();
  gameState.player2.name = player2Input.value.trim();

  // Update all player name displays in counter screen
  player1Name.textContent = gameState.player1.name;
  player2Name.textContent = gameState.player2.name;
  player1NameStats.textContent = gameState.player1.name;
  player2NameStats.textContent = gameState.player2.name;
  player1ButtonText.textContent = gameState.player1.name.toUpperCase();
  player2ButtonText.textContent = gameState.player2.name.toUpperCase();

  // Switch screens
  setupScreen.classList.add("hidden");
  counterScreen.classList.remove("hidden");
  counterScreen.classList.add("active");
}

startButton.addEventListener("click", startCounter);

// ==============================
// COUNTER SCREEN FUNCTIONALITY
// ==============================

// Update all stats display
function updateStats() {
  player1Wins.textContent = gameState.player1.wins;
  player1Losses.textContent = gameState.player1.losses;
  player1Draws.textContent = gameState.player1.draws;

  player2Wins.textContent = gameState.player2.wins;
  player2Losses.textContent = gameState.player2.losses;
  player2Draws.textContent = gameState.player2.draws;
}

// Update last game message with animation
function updateLastGameMessage(winner) {
  let message = "";

  if (winner === "player1") {
    message = `${gameState.player1.name} won the last game! 🎉`;
  } else if (winner === "player2") {
    message = `${gameState.player2.name} won the last game! 🎉`;
  } else if (winner === "draw") {
    message = "Last game was a draw!";
  }

  // Add animation class
  lastGame.classList.remove("updated");
  void lastGame.offsetWidth; // Trigger reflow
  lastGame.classList.add("updated");

  lastGame.textContent = message;
}

// Handle Player 1 win
function recordPlayer1Win() {
  // FR3.3: Increment Player 1 wins and Player 2 losses
  gameState.player1.wins++;
  gameState.player2.losses++;
  gameState.lastWinner = "player1";

  // FR4.1 & FR4.2: Update immediately
  updateStats();
  updateLastGameMessage("player1");
}

// Handle Player 2 win
function recordPlayer2Win() {
  // FR3.4: Increment Player 2 wins and Player 1 losses
  gameState.player2.wins++;
  gameState.player1.losses++;
  gameState.lastWinner = "player2";

  // FR4.1 & FR4.2: Update immediately
  updateStats();
  updateLastGameMessage("player2");
}

// Handle Draw (optional feature)
function recordDraw() {
  gameState.player1.draws++;
  gameState.player2.draws++;
  gameState.lastWinner = "draw";

  updateStats();
  updateLastGameMessage("draw");
}

// Attach event listeners to win buttons
player1Button.addEventListener("click", recordPlayer1Win);
player2Button.addEventListener("click", recordPlayer2Win);
drawButton.addEventListener("click", recordDraw);

// ==============================
// RESET FUNCTIONALITY
// ==============================

function resetStats() {
  // Confirm reset
  const confirmed = confirm("Are you sure you want to reset all statistics?");

  if (confirmed) {
    // Reset game state
    gameState.player1.wins = 0;
    gameState.player1.losses = 0;
    gameState.player1.draws = 0;

    gameState.player2.wins = 0;
    gameState.player2.losses = 0;
    gameState.player2.draws = 0;

    gameState.lastWinner = null;

    // Update display
    updateStats();
    lastGame.textContent = "No games played yet!";
    lastGame.classList.remove("updated");
  }
}

resetButton.addEventListener("click", resetStats);

// ==============================
// INITIALIZATION
// ==============================

// Ensure counter screen is hidden on load
document.addEventListener("DOMContentLoaded", () => {
  counterScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
  player1Input.focus();
});
