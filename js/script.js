'use strict';

/* Global Variables */
// let playerSelection;
const compChoice = document.querySelector('.comp-choice');
const paperBtn = document.querySelector('.paper');
const playerChoice = document.querySelector('.player-choice');
const resetBtn = document.querySelector('.reset-btn');
const rockBtn = document.querySelector('.rock');
const scissorsBtn = document.querySelector('.scissors');
const roundWonMessage = document.querySelector('.round-won');
const year = document.querySelector('.year');
const winnerModal = document.querySelector('.winner-modal');
const winnerText = document.querySelector('.winner-text');
let date = new Date();
let scorePlayer = 0;
let scoreComp = 0;
let computerScore = document.querySelector('.comp-score');
let playerScore = document.querySelector('.player-score');
let currentYear = date.getFullYear();

rockBtn.addEventListener('click', () => userClick('rock'));
paperBtn.addEventListener('click', () => userClick('paper'));
scissorsBtn.addEventListener('click', () => userClick('scissors'));

/* Get the computers choice */
function getComputerChoice() {
  const computerChoices = ['rock', 'paper', 'scissors'];

  /* randomly select from 0 - 2 */
  let randomNum = Math.floor(Math.random() * computerChoices.length);

  return computerChoices[randomNum];
}

function getChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'rock':
      playerChoice.textContent = `rock`;
      break;
    case 'paper':
      playerChoice.textContent = `paper`;
      break;
    case 'scissors':
      playerChoice.textContent = `scissors`;
      break;
  }

  switch (computerSelection) {
    case 'rock':
      compChoice.textContent = `rock`;
      break;
    case 'paper':
      compChoice.textContent = `paper`;
      break;
    case 'scissors':
      compChoice.textContent = `scissors`;
      break;
  }
}

/* function takes 2 parameters which is the players choice and computers choice */
function playRound(playerSelection, computerSelection) {
  /*  this condition compares the player choice vs computer choice then tallies each win */
  if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')
  ) {
    scorePlayer++;
    playerScore.textContent = `${scorePlayer}`;
    roundWonMessage.textContent = `You won this round`;
  }

  if (
    (playerSelection == 'scissors' && computerSelection == 'rock') ||
    (playerSelection == 'paper' && computerSelection == 'scissors') ||
    (playerSelection == 'rock' && computerSelection == 'paper')
  ) {
    scoreComp++;
    computerScore.textContent = `${scoreComp}`;
    roundWonMessage.textContent = `Computer won this round`;
  }

  if (
    (playerSelection == 'scissors' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'paper') ||
    (playerSelection == 'rock' && computerSelection == 'rock')
  ) {
    roundWonMessage.textContent = `TIE`;
  }
}

function getWinner() {
  /* This condition determines winner */
  if (scorePlayer === 5) {
    winnerModal.style.backgroundColor = '#40c057';
    winnerText.textContent = 'You Win! 🏆';
    winnerModal.style.display = 'block';
  }
  if (scoreComp === 5) {
    winnerModal.style.backgroundColor = '#ff6b6b';
    winnerText.textContent = 'You lose 👎🏽';
    winnerModal.style.display = 'block';
  }
}

// When user clicks game starts
function userClick(playerSelection) {
  const compSelection = getComputerChoice();

  getChoices(playerSelection, compSelection);
  playRound(playerSelection, compSelection);
  getWinner();
}

// user resets game when button clicked
resetBtn.addEventListener('click', function () {
  compChoice.textContent = '';
  computerScore.textContent = '0';
  playerChoice.textContent = '';
  playerScore.textContent = '0';
  roundWonMessage.textContent = '';
  scoreComp = 0;
  scorePlayer = 0;
  winnerModal.style.display = 'none';
});

// set current year for copy right
year.textContent = currentYear;
