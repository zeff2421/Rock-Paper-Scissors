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
        console.log(`${humanChoice} loses to ${computerChoice}`);
        computerScore++;
        return "Lost"
    }
}

const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");
const btns = document.querySelector(".buttons")

const resultDiv = document.createElement("div");
resultDiv.classList.add("results");
body.insertBefore(resultDiv, btns);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.add("button-clicked");
        
        let buttonClicked = button.id;
        let computerChoice = getComputerChoice();
        let round = playRound(buttonClicked, computerChoice);

        if (round === "Won")
            resultDiv.textContent = `You won! ${buttonClicked} beats ${computerChoice}.`;
        else if (round === "Lost")
            resultDiv.textContent = `You lost! ${buttonClicked} loses to ${computerChoice}.`;
        else
            resultDiv.textContent = `It's a tie.`
    });
});