function getComputerChoice() {
	let choice = ["rock", "paper", "scissors"];
  let random = choice[Math.floor(Math.random() * choice.length)];
  return random;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return ("It's a draw!");
  } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
    return ("You win! Rock beats scissors");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return ("You lose! Paper beats rock");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return ("You win! Paper beats rock");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return ("You lose! Scissors beat paper");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return ("You win! Scissors beat paper");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return ("You lose!Rock beats scissors");
  }
}
 
const playerSelection = prompt("What do you choose?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));