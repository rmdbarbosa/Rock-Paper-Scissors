function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

let playerScore = 0;
let computerScore = 0;

function playRound() {
  if (
    (computerSelection === 0 && playerSelection === "rock") ||
    (computerSelection === 1 && playerSelection === "paper") ||
    (computerSelection === 2 && playerSelection === "scissors")
  ) {
    return "Draw!";
  } else if (
    (computerSelection === 0 && playerSelection === "scissors") ||
    (computerSelection === 1 && playerSelection === "rock") ||
    (computerSelection === 2 && playerSelection === "paper")
  ) {
    ++computerScore;

    computerScoreP = document.querySelector("#computerScoreP");
    computerScoreP.textContent = computerScore;
    return "CPU Wins!";
  } else {
    ++playerScore;

    playerScoreP = document.querySelector("#playerScoreP");
    playerScoreP.textContent = playerScore;
    return "Player Wins!";
  }
}

function game() {
  while (playerScore < 5 || computerScore < 5) {
    playRound(playerSelection, getComputerChoice());
    break;
  }
  if (playerScore > computerScore && score === 5) {
    alert("Player is the WINNER!");
  } else if (computerScore > playerScore && score === 5) {
    alert("CPU is the WINNER!");
  }
}

function isGameOver() {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      alert("Player is the WINNER!");
    } else if (computerScore === 5) {
      alert("CPU is the WINNER!");
    }
    location.reload();
  }
}

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", () => {
  return (
    (playerSelection = "rock"),
    (computerSelection = getComputerChoice()),
    game(),
    console.log(playerScore, computerScore),
    isGameOver()
  );
});
const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => {
  return (
    (playerSelection = "paper"),
    (computerSelection = getComputerChoice()),
    game(),
    console.log(playerScore, computerScore),
    isGameOver()
  );
});
const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", () => {
  return (
    (playerSelection = "scissors"),
    (computerSelection = getComputerChoice()),
    game(),
    console.log(playerScore, computerScore),
    isGameOver()
  );
});
