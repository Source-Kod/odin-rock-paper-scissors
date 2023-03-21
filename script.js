function getComputerChoice() {

  return "rock";
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection == 'rock') {
    if(computerSelection == 'rock') {
      return "Draw";
    }
    if(computerSelection == 'paper') {
      return "You lose";
    }
    if(computerSelection == 'scissors') {
      return "you win!";
    }
  }

  if(playerSelection == 'paper') {
    if(computerSelection == 'rock') {
      return "you win!";
    }
    if(computerSelection == 'paper') {
      return "draw";
    }
    if(computerSelection == 'scissors') {
      return "you lose";
    }
  } 

  if(playerSelection == 'scissors') {
    if(computerSelection == 'rock') {
      return "you lose";
    }
    if(computerSelection == 'paper') {
      return "you win!";
    }
    if(computerSelection == 'scissors') {
      return "Draw";
    }
  } 
}

function getPlayerChoice() {
  let selection = ""
  while(!(selection === 'rock' || selection === 'paper' || selection === 'scissors')) {
    selection = prompt("choose rock paper or scissors").toLowerCase();
  }
  return selection
}

function main() {
  let computerSelection = getComputerChoice();
  let playerSelection = getPlayerChoice();

  console.log(playRound(playerSelection, computerSelection));
}

main()

