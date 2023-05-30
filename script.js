function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

let playerSelection = "rock";
let computerSelection = getComputerChoice();

function playRound() {
  if (computerSelection === 0 && playerSelection === "rock") {
    return "Draw!";
  } else if (computerSelection === 1 && playerSelection === "rock") {
    return "CPU Wins!";
  } else {
    return "Player Wins!";
  }
}

console.log(playRound());
