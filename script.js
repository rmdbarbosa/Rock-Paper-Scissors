function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function playerPlay() {
  return prompt(
    "Choose your play between: rock, paper and scissors:"
  ).toLowerCase();
}

let score = 0;
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
    return "CPU Wins!" + ++computerScore + ++score;
  } else {
    return "Player Wins!" + ++playerScore + ++score;
  }
}

/* function game() {
  while (score < 5) {
    console.log(playRound(playerPlay(), getComputerChoice()));
  }
  if (playerScore > computerScore) {
    alert("Player is the WINNER!");
  } else {
    alert("CPU is the WINNER!");
  }
} */

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", () => {
  return (
    (playerSelection = "rock"),
    (computerSelection = getComputerChoice()),
    playRound(playerSelection, getComputerChoice()),
    console.log(playRound())
  );
});

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => {
  return (
    (playerSelection = "paper"),
    (computerSelection = getComputerChoice()),
    playRound(playerSelection, getComputerChoice()),
    console.log(playRound())
  );
});

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", () => {
  return (
    (playerSelection = "scissors"),
    (computerSelection = getComputerChoice()),
    playRound(playerSelection, getComputerChoice()),
    console.log(playRound())
  );
});
