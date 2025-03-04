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
        console.log(`${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("It's a tie");
    }
    else {
        console.log(`${humanChoice} loses to ${computerChoice}`);
        computerScore++;
    }
}

const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

const resultDiv = document.createElement("div");
resultDiv.classList.add("results");
body.appendChild(resultDiv);

const divBtns = document.createElement("div");
divBtns.classList.add("buttons");
buttons.forEach(node => divBtns.appendChild(node));
body.appendChild(divBtns);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonClicked = button.id;
        let computerChoice = getComputerChoice();
        playRound(buttonClicked, computerChoice);

        console.log(`Player: ${buttonClicked}`);
        console.log(`Computer: ${computerChoice}`);
    });
});