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
    let userChoice = prompt("rock, paper, or scissors?");

    while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        userChoice = prompt("Invalid: rock, paper, or scissors?")
    }
    
    return userChoice;
}