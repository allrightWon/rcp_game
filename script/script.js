let playerText = document.querySelector(".playerText");
let computerText = document.querySelector(".computerText");
let resultText = document.querySelector(".resultText");
let choiceBtns = document.querySelectorAll(".choiceBtns button");

let player;
let computer;
let result;

choiceBtns.forEach((choiceBtns) =>
  choiceBtns.addEventListener("click", () => {
    player = choiceBtns.getAttribute("data-value");
    computerTurn();
    playerText.textContent = `player : ${player}`;
    computerText.textContent = `Computer : ${computer}`;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      computer = "rock";
      break;
    case 2:
      computer = "paper";
      break;
    case 3:
      computer = "scissors";
      break;
  }
}
function checkWinner() {
  if (player == computer) {
    return "Draw";
  } else if ((computer = "rock")) {
    return player == "paper" ? "You Win!" : "You Lose!";
  } else if ((computer = "scissors")) {
    return player == "rock" ? "You Win!" : "You Lose!";
  } else if ((computer = "paper")) {
    return player == "scissors" ? "You Win!" : "You Lose!";
  }
}
