let scorePlayer = 0;
let scoreComputer = 0;

function getComputerChoice() {
	let choice = ["rock", "paper", "scissors"];
  let random = choice[Math.floor(Math.random() * choice.length)];
  return random;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return ("It's a draw!");
  } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
		scorePlayer++;
    return ("You win! Rock beats scissors");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
		scoreComputer++;
    return ("You lose! Paper beats rock");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
		scorePlayer++;
    return ("You win! Paper beats rock");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
		scoreComputer++;
    return ("You lose! Scissors beat paper");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
		scorePlayer++;
    return ("You win! Scissors beat paper");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
		scoreComputer++;
    return ("You lose!Rock beats scissors");
  }
}

function game() {
	for (i = 0; i < 5; i++) {
		const playerSelection = prompt("What do you choose?").toLowerCase();
		const computerSelection = getComputerChoice();
		console.log(playRound(playerSelection, computerSelection));
		console.log("-----------")
	}
	if (scorePlayer > scoreComputer) {
		console.log("Player was the winner!")
	}
	else if (scorePlayer < scoreComputer) {
		console.log("Computer was the winner!")
	}
	else {
		console.log("TIE!")
	}
}

game();