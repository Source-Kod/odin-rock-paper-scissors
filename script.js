function getComputerChoice() {
  random_num = Math.floor(Math.random() * 3) + 1;

  switch(random_num) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  }
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
      return "You win!";
    }
  }

  if(playerSelection == 'paper') {
    if(computerSelection == 'rock') {
      return "You win!";
    }
    if(computerSelection == 'paper') {
      return "Draw";
    }
    if(computerSelection == 'scissors') {
      return "You lose";
    }
  } 

  if(playerSelection == 'scissors') {
    if(computerSelection == 'rock') {
      return "You lose";
    }
    if(computerSelection == 'paper') {
      return "You win!";
    }
    if(computerSelection == 'scissors') {
      return "Draw";
    }
  } 
}

function getPlayerChoice() {
  let selection = "";
  while(!(selection === 'rock' || selection === 'paper' || selection === 'scissors')) {
    selection = prompt("choose rock paper or scissors").toLowerCase();
  }
  return selection;
}

function main() {
  let computerSelection = getComputerChoice();
  let playerSelection = getPlayerChoice();

  console.log(playRound(playerSelection, computerSelection));
}

let rounds = 0
while( rounds < 5) {
  main();
  rounds++;
}

