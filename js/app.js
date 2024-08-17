const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("ComputerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
function playGame(choice){
  const computerChoice = choices[Math.floor(Math.random()*3)];
  let result = " ";
  if(choice === computerChoice){
    result += "Its a Tie";
  }else{
    switch(choice){
      case "rock":
       result =  (computerChoice==="scissors") ? "You Win!" : "You Lose!";
        break;
      case "paper":
        result = (computerChoice==="rock") ? "You Win!" : "You Lose!";
        break;
      case "scissors":
        result = (computerChoice==="paper") ? "You Win!" : "You Lose!";
        break;
    }
  }
  playerDisplay.textContent = `Player: ${choice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;
  playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
  resultDisplay.classList.remove("green-text", "red-text");
  switch (result) {
    case "You Win!": resultDisplay.classList.add("green-text");
      playerScore++;
    break;
    case "You Lose!": resultDisplay.classList.add("red-text");
    computerScore++;
    break;
  }


}



