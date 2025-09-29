const yourScoreEl = document.getElementById("your-score");
const computerScoreEl = document.getElementById("computer__score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const restart = document.getElementById("restart");

let yourScore = 0;
let computerScore = 0;

const choices = ["✊", "✌️", "✋"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

const selectComp = document.getElementById("select-comp");
const selectPlayer = document.getElementById("select-player");
const text = document.getElementById("text");

function play(playerChoice) {
  const computerChoice = getComputerChoice();
  selectComp.textContent = computerChoice;
  selectPlayer.textContent = playerChoice;

  if (playerChoice === computerChoice) {
    text.textContent = "Draw!";
  } else if (
    (playerChoice === "✋" && computerChoice === "✊") ||
    (playerChoice === "✊" && computerChoice === "✌️") ||
    (playerChoice === "✌️" && computerChoice === "✋")
  ) {
    yourScore++;
    yourScoreEl.textContent = yourScore;
    text.textContent = "You are win:)";
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    text.textContent = "You are lose:(";
  }
  restart.addEventListener("click", () => {
    if (computerScore > 0) {
      return (computerScore.textContent = "0");
    } else {
      return computerScore;
    }
  });
}
rock.addEventListener("click", () => {
  play("✊");
});
paper.addEventListener("click", () => play("✋"));
scissors.addEventListener("click", () => play("✌️"));
