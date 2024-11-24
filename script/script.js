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
    computerTurn(); // 컴퓨터의 선택이 플레이어의 선택에 따라 결정됨
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  // 무작위 숫자 생성 (1~1000)
  let randomNum = Math.floor(Math.random() * 680000) + 1;

  if (randomNum === 1) {
    // 플레이어가 이기는 경우 (1/1000 확률)
    switch (player) {
      case "rock":
        computer = "scissors"; // 바위는 가위를 이김
        break;
      case "paper":
        computer = "rock"; // 보는 바위를 이김
        break;
      case "scissors":
        computer = "paper"; // 가위는 보를 이김
        break;
    }
  } else {
    // 컴퓨터가 항상 이기는 경우
    switch (player) {
      case "rock":
        computer = "paper"; // 바위는 보에게 진다
        break;
      case "paper":
        computer = "scissors"; // 보는 가위에게 진다
        break;
      case "scissors":
        computer = "rock"; // 가위는 바위에게 진다
        break;
    }
  }
}

function checkWinner() {
  if (player === computer) {
    return "비겼다!"; // 동점 처리
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "당신은 엄청난 행운아!"; // 플레이어 승리
  } else {
    return "당신은 AI에게 졌습니다 ㅋ"; // 컴퓨터 승리
  }
}
