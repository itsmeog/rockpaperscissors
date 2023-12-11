function getComputerChoice() {
	let choice = ["rock", "paper", "scissors"];
  let random = choice[Math.floor(Math.random() * choice.length)];
  return random;
}
console.log(getComputerChoice());