'use strict';

/* Global Variables */
let playerSelection;
let playerScore = 0;
let computerScore = 0;

/* Get the computers choice */
function getComputerChoice() {
  const computerChoices = ['rock', 'paper', 'scissors'];

  /* randomly select from 0 - 2 */
  let computerSelection = Math.floor(Math.random() * computerChoices.length);
  return computerChoices[computerSelection];
}

/* function takes 2 parameters which is the players choice and computers choice */
function playRound(playerSelection, computerSelection) {
  const playerWinsMsg = 'Player Wins';
  const computerWinsMsg = 'Computer Wins';

  /*  this condition compares the player choice vs computer choice then tallies each win */
  console.log(`player: ${playerSelection} || computer: ${computerSelection}`);
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    playerScore += 1;
    return playerWinsMsg;
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    computerScore += 1;
    return computerWinsMsg;
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    playerScore += 1;
    return playerWinsMsg;
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    computerScore += 1;
    return computerWinsMsg;
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    playerScore += 1;
    return playerWinsMsg;
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    computerScore += 1;
    return computerWinsMsg;
  } else {
    return `TIE`;
  }
}

/* this game() function calls the playRound() function and loops 5 times */
function game() {
  for (let i = 0; i < 5; i++) {
    console.log(`ROUND: ${i + 1}`);
    playerSelection = prompt(
      'Choose your weapon: Rock 🪨, Paper 📄, Scissors ✂️'
    ).toLowerCase();
    if (!playerSelection) {
      console.log('Invalid response, lose a round');
    } else {
      console.log(playRound(playerSelection, getComputerChoice()));
    }
  }
  console.log(`player score: ${playerScore}, computer score: ${computerScore}`);

  getWinner();
}

function getWinner() {
  /* This condition determines winner */
  if (playerScore > computerScore) {
    console.log('YOU WON! 🏆');
  } else if (playerScore < computerScore) {
    console.log('COMPUTER WINS! 🏆');
  } else {
    console.log(`NO WINNER`);
  }
}

game();
