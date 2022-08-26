'use strict';

let playerSelection = prompt(
  'Choose your weapon: Rock 🪨, Paper 📄, Scissors ✂️'
).toLowerCase();

function getComputerChoice() {
  const computerChoices = ['rock', 'paper', 'scissors'];

  let computerSelection = Math.floor(Math.random() * computerChoices.length);
  return computerChoices[computerSelection];
}

// getComputerChoice();

function playRound(playerSelection, computerSelection) {
  const playerWinsMsg = 'Player Wins';
  const computerWinsMsg = 'Computer Wins';

  console.log(`player: ${playerSelection} || computer: ${computerSelection}`);
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return playerWinsMsg;
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    return computerWinsMsg;
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return playerWinsMsg;
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return computerWinsMsg;
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return playerWinsMsg;
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    return computerWinsMsg;
  } else {
    return `TIE`;
  }
}

console.log(playRound(playerSelection, getComputerChoice()));
