const ROUNDS = 5;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = prompt("rock, paper, or scissors?").toLowerCase();

    while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        userChoice = prompt("Invalid: rock, paper, or scissors?").toLowerCase();
    }
    
    return userChoice;
}

function playRound(humanChoice, computerChoice) {

    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        return "Won";
    } else if (humanChoice === computerChoice) {
        return "Tie";
    }
    else {
        computerScore++;
        return "Lost"
    }
}

function displayChosen(humanChoice, computerChoice) {
    let humanDisplay = document.querySelector(".human-pictures .result-img");
    let computerDisplay = document.querySelector(".computer-pictures .result-img");

    humanDisplay.src = `./images/${humanChoice}.png`;
    computerDisplay.src = `./images/${computerChoice}.png`;
}

const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");
const btns = document.querySelector(".buttons");
const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".compScore");

const resultDiv = document.createElement("div");
resultDiv.classList.add("results");
body.insertBefore(resultDiv, btns);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonClicked = button.id;
        let computerChoice = getComputerChoice();
        let round = playRound(buttonClicked, computerChoice);
        displayChosen(buttonClicked, computerChoice);

        if (round === "Won") {
            playerScore.textContent = `${humanScore}`;
            resultDiv.textContent = `${buttonClicked} beats ${computerChoice}`;
        }
        else if (round === "Lost") {
            compScore.textContent = `${computerScore}`;
            resultDiv.textContent = `${buttonClicked} loses to ${computerChoice}`;
        }
        else {
            resultDiv.textContent = `It's a Tie`;
        }
    });
});