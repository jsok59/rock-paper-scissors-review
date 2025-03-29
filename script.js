function getComputerChoice() {
    let result =parseInt(Math.random() * 3);
    if (result === 0) {
        result = "rock";
    } else if (result === 1) {
        result = "scissor";
    } else {
        result = "paper";
    }
    return result;
}

function getHumanChoice() {

    let result = prompt("Choose rock, paper or scissor");
    
    return result.toLowerCase();

}



function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return console.log("It's a tie")
    } else if (humanSelection === 'rock' && computerSelection ==='scissor') {
        humanScore++;
        return console.log("Rock beats scissor. Human wins")
    } else if (humanSelection === 'paper' && computerSelection ==='scissor') {
        computerScore++;
        return console.log("Scissor beat paper. computer wins")
    } else if (humanSelection === 'scissor' && computerSelection ==='rock') {
        computerScore++;
        return console.log("Rock beats scissor. Computer wins")
    } else if (humanSelection === 'paper' && computerSelection ==='rock') {
        humanScore++;
        return console.log("Paper beats rock. Human wins")
    } else if (humanSelection === 'rock' && computerSelection ==='paper') {
        computerScore++;
        return console.log("Paper beats rock. Computer wins")
    } else if (humanSelection === 'scissor' && computerSelection ==='paper') {
        humanScore++;
        return console.log("Scissor beat paper. Human wins")
    } 
}


function playGame() {
    let humanChoice, computerChoice;

    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    
    if (humanScore === computerScore) {
        return console.log(`It's a tie. Score is ${humanScore} vs ${computerScore}`)
    } else if (humanScore > computerScore) {
        return console.log(`Human wins. Score is ${humanScore} vs ${computerScore}`)
    } else {
        return console.log(`Computer wins. Score is ${humanScore} vs ${computerScore}`)
    }



}


let humanScore = 0;
let computerScore = 0;


playGame();