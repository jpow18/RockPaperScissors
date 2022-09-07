// This program plays rock paper scissors
let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
  // play
  let playerChoice = prompt("Please enter rock, paper, or scissors");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {

      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer = computerChoice === 1 ? "rock"
        : computerChoice === 2 ? "paper"
          : "scissors";
      
      let result =
        playerOne === computer
          ? "Tie game!"
          : playerOne === "rock" && computer === "paper"
            ? `PlayerOne: ${playerOne}\nComputer: ${computer}\n PlayerOne wins!`
            : playerOne === "paper" && computer === "scissors"
              ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
              : playerOne === "scissors" && computer === "rock"
                ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
                : `Playerone: ${playerOne}\nComputer: ${computer}\nPlayerOne wins!`;
      alert(result);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("Ok, thanks for playing.");
    } else {
      alert("You didn't enter rock, paper, or scissors");
    }
  } else {
    alert("I guess you chickened out. Better luck next time, chicken.");
  }
} else {
  alert("Okay, see ya.")
}