let userChoice = prompt("Enter rock, paper, or scissors:");

let choices = ["rock", "paper", "scissors"];
let computerChoice = choices[Math.floor(Math.random() * choices.length)];

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

console.log("User choice: " + userChoice);
console.log("Computer choice: " + computerChoice);
console.log(determineWinner(userChoice, computerChoice));