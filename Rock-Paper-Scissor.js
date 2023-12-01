let score = JSON.parse(localStorage.getItem("score")) || {
  yourScore: 0,
  computerScore: 0,
  ties: 0,
};

updateScore();

function autoPlay() {
  setInterval(function () {
    const playerMove = pickcomputerMove();
    playGame(playerMove);
  }, 1000);
}

function playGame(yourMove) {
  const computerMove = pickcomputerMove();
  let result = "";

  if (yourMove === "Rock") {
    if (computerMove === "Paper") {
      result = "You Lose";
    } else if (computerMove === "Scissors") {
      result = "You Win";
    } else if (computerMove === "Rock") {
      result = "Draw";
    }
  } else if (yourMove === "Scissors") {
    if (computerMove === "Paper") {
      result = "You Win";
    } else if (computerMove === "Scissors") {
      result = "Draw";
    } else if (computerMove === "Rock") {
      result = "You Lose";
    }
  } else if (yourMove === "Paper") {
    if (computerMove === "Paper") {
      result = "Draw";
    } else if (computerMove === "Scissors") {
      result = "You Lose";
    } else if (computerMove === "Rock") {
      result = "You Win";
    }
  }

  if (result === "You Win") {
    score.yourScore += 1;
  } else if (result === "You Lose") {
    score.computerScore += 1;
  } else {
    score.ties += 1;
  }

  const ScoretoString = JSON.stringify(score);
  localStorage.setItem("score data", ScoretoString);

  updateScore();

  const resultElement = document.querySelector(".js-result");
  resultElement.innerHTML = `${result}`;

  const bothPickElement = document.querySelector(".js-bothPick");
  bothPickElement.innerHTML = `You  picked ${yourMove}, Computer Picked ${computerMove}.`;
}

function pickcomputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}

function resetScore() {
  score.yourScore = 0;
  score.computerScore = 0;
  score.ties = 0;
  localStorage.removeItem("score");

  updateScore();

  const domReset = document.querySelector(".js-reset");
}

function updateScore() {
  const scoreElement = document.querySelector(".js-score");
  scoreElement.innerHTML = `Your Score: ${score.yourScore} | Computer Score: ${score.computerScore} | Draws: ${score.ties}`;
}

function updateResult() {
  const resultElement = document.querySelector(".js-result");
  resultElement.innerHTML = `${result}`;

  const bothPickElement = document.querySelector(".js-bothPick");
  bothPickElement.innerHTML = `You picked ${yourMove}, Computer Picked ${computerMove}.`;
}
