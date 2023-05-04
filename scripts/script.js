// Create a function for the computer to make a choice
let choices = ["Rock", "Paper", "Scissors"];
let playerPoints = 0
let computerPoints = 0

function winnerPoints() {
    if (playerPoints == 5 || computerPoints == 5) {
        return false;
    }
    else {
        return true;
    }

}

function getComputerChoice() {
    let randChoice = Math.floor(Math.random() * choices.length + 0); // returning a random choice of rock paper or scissors
    return choices[randChoice];

}

function round(playerSelection, computerSelection) {
    capsInitial = playerSelection[0].toUpperCase();
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.replace(playerSelection[0], capsInitial);
    while (winnerPoints()) {
        if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock"
        || playerSelection == "Scissors" && computerSelection == "Paper") {
            playerPoints = playerPoints + 1;
            return `You Win! ${playerSelection} beats ${computerSelection}!`;
        }
        else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors"
        || playerSelection == "Scissors" && computerSelection == "Rock") {
            computerPoints = computerPoints + 1;
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
    if (playerPoints > computerPoints) {
       return para.textContent = "Game over you Win!"
    }
    else {
       return para.textContent = "Game over you lose :("
    }
}


function game() {
    let playerSelection = this.textContent;
    let computerSelection = getComputerChoice();
    para.textContent = `${round(playerSelection,computerSelection)}`;
    scoreboard.textContent = `Player: ${playerPoints} Computer: ${computerPoints}`;
    


}

 // let roundsPlayed = 5;
 let divvy = document.querySelector(".results")
 let para = document.createElement("p");
 para.textContent = "";
 let scoreboard  = document.createElement("p");
 scoreboard.textContent = " ";
divvy.appendChild(scoreboard);
divvy.appendChild(para);
console.log(computerPoints)
console.log(playerPoints)

let buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", game));


