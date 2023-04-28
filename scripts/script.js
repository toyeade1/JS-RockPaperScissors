// Create a function for the computer to make a choice
let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let randChoice = Math.floor(Math.random() * choices.length + 0); // returning a random choice of rock paper or scissors
    return choices[randChoice];

}

function round(playerSelection, computerSelection) {
    capsInitial = playerSelection[0].toUpperCase();
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.replace(playerSelection[0], capsInitial);
    if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock"
     || playerSelection == "Scissors" && computerSelection == "Paper") {
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
     }
    else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors"
    || playerSelection == "Scissors" && computerSelection == "Rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
    else if (playerSelection == "Rock" && computerSelection == "Rock" || playerSelection == "Paper" && computerSelection == "Paper"
    || playerSelection == "Scissors" && computerSelection == "Scissors") {
        return `It's a tie! ${playerSelection} ties ${computerSelection}!`;
    }
    else {
        return "Invalid Choice";
    }
}

roundsPlayed = 5;

function game() {
    for (let i = 1; i < roundsPlayed + 1; i++ ) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();
        console.log(round(playerSelection, computerSelection));
    }
}

game();