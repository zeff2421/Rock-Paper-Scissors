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

    if (humanChoice === "" && computerChoice === "")
    {
        humanDisplay.src = "";
        computerDisplay.src = "";
    }
    else
    {
        humanDisplay.src = `./images/${humanChoice}.png`;
        computerDisplay.src = `./images/${computerChoice}.png`;
    }
}

const buttons = document.querySelectorAll(".btn");
const body = document.querySelector("body");
const btns = document.querySelector(".buttons");
const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".compScore");

let modal = document.querySelector(".modal");
let modalResults = document.querySelector(".modal-result");

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
            if (humanScore === 5) {
                modalResults.textContent = "Congratulations! You won.";
                modal.showModal();
            }
        }
        else if (round === "Lost") {
            compScore.textContent = `${computerScore}`;
            resultDiv.textContent = `${buttonClicked} loses to ${computerChoice}`;
            if (computerScore === 5) {
                modalResults.textContent = "Oops! You lost.";
                modal.showModal();
            }
        }
        else {
            resultDiv.textContent = `It's a Tie`;
        }
    });
});

let modalButton = document.querySelector(".btn2");
modalButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    playerScore.textContent = humanScore;
    compScore.textContent = computerScore;
    resultDiv.textContent = "";
    displayChosen("", "");
    modal.close();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape")
    {
        humanScore = 0;
        computerScore = 0;
        playerScore.textContent = humanScore;
        compScore.textContent = computerScore;
        resultDiv.textContent = "";
        displayChosen("", "");
    }
})