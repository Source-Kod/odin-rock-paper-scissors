//globals var for scores
let playerscore_int = 0;
let computerscore_int = 0;

//makes a random selection for computer
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

function scoreUpdater(str) {
  let playerscore = document.querySelector('#player_score');
  let result = document.querySelector('#result');
  let computerscore = document.querySelector('#computer_score');


  if(str === 'You win!') {
    playerscore_int++;
    playerscore.textContent = playerscore_int;
    result.textContent = "You win!";
  }

  if(str === 'You lose') {
    computerscore_int++;
    computerscore.textContent = computerscore_int;
    result.textContent = "You lose";
  }

  if(str === 'Draw') {
    result.textContent = "It's a draw!";
  }
}

function createEventListeners() {
  let rock_img = document.querySelector('#rock_img')
  let paper_img = document.querySelector('#paper_img')
  let scissors_img = document.querySelector('#scissors_img')

  rock_img.addEventListener('click', () => {
    console.log(playRound('rock',getComputerChoice()))
  })
  paper_img.addEventListener('click', () => {
    alert('worked!')
  })
  scissors_img.addEventListener('click', () => {
    alert('worked!')
  })
}

createEventListeners()
