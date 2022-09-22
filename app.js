let player1score = 0;
let player2score = 0;
let player1Turn = true;

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1scoreBoard = document.getElementById("player1Scoreboard");
const player2scoreBoard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

rollBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  player1Dice.textContent = "";
  player2Dice.textContent = "";

  if (player1Turn) {
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";
    player1scoreBoard.textContent = player1score += randomNumber;
  } else {
    player2Dice.textContent = randomNumber;
    player1Dice.classList.add("active");
    player2Dice.classList.remove("active");
    message.textContent = "Player 1 Turn";
    player2scoreBoard.textContent = player2score += randomNumber;
  }

  if (player1score >= 20) {
    message.textContent = "Player 1 is winner";
    showResetButton();
  } else if (player2score >= 20) {
    message.textContent = "Player 2 is winner";
    showResetButton();
  }
  player1Turn = !player1Turn; // switches boolean value
});

function showResetButton() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "inline-block";
}

resetBtn.addEventListener("click", function () {
  // location.reload();
  player1score = 0;
  player2score = 0;
  player1Turn = true;
  message.textContent = "Player 1 Turn";
  player1scoreBoard.textContent = 0;
  player2scoreBoard.textContent = 0;
  player1Dice.classList.add("active");
  player2Dice.classList.remove("active");
  player1Dice.textContent = "";
  player2Dice.textContent = "";
  rollBtn.style.display = "inline-block";
  resetBtn.style.display = "none";
});

// function reset() {

// }
