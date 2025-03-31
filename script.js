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


const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorButton = document.querySelector('.scissor-button');
const computerScoreBox = document.querySelector('.computer-score');
const humanScoreBox = document.querySelector('.human-score');
const computerChoiceBox = document.querySelector('.computer-choice-box');
const humanChoiceBox =document.querySelector('.human-choice-box');
const mainContainer = document.querySelector('.main-container');

let humanScore = 0;
let computerScore = 0;

scissorButton.addEventListener("click", playRound);
rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);



function playRound(e) {
    let computerSelection = getComputerChoice();
    let humanSelection = e.target.textContent.toLowerCase();
    if (humanSelection === computerSelection) {
        humanChoiceBox.textContent = humanSelection;
        computerChoiceBox.textContent = computerSelection;
        console.log("It's a tie");
    } else if (humanSelection === 'rock' && computerSelection ==='scissor') {
        humanScore++;
        humanScoreBox.textContent = humanScore;
        humanChoiceBox.textContent = humanSelection;
        computerChoiceBox.textContent = computerSelection;
        console.log("Rock beats scissor. Human wins")
    } else if (humanSelection === 'paper' && computerSelection ==='scissor') {
        computerScore++;
        computerScoreBox.textContent = computerScore;
        humanChoiceBox.textContent = humanSelection;
        computerChoiceBox.textContent = computerSelection;
        console.log("Scissor beat paper. computer wins")
    } else if (humanSelection === 'scissor' && computerSelection ==='rock') {
        computerScore++;
        computerScoreBox.textContent = computerScore;
        humanChoiceBox.textContent = humanSelection;
        computerChoiceBox.textContent = computerSelection;
        console.log("Rock beats scissor. Computer wins")
    } else if (humanSelection === 'paper' && computerSelection ==='rock') {
        humanScore++;
        humanScoreBox.textContent = humanScore;
        humanChoiceBox.textContent = humanSelection;
        computerChoiceBox.textContent = computerSelection;
        console.log("Paper beats rock. Human wins")
    } else if (humanSelection === 'rock' && computerSelection ==='paper') {
        computerScore++;
        computerScoreBox.textContent = computerScore;
        humanChoiceBox.textContent = humanSelection;
        computerChoiceBox.textContent = computerSelection;
        console.log("Paper beats rock. Computer wins")
    } else if (humanSelection === 'scissor' && computerSelection ==='paper') {
        humanScore++;
        humanScoreBox.textContent = humanScore;
        humanChoiceBox.textContent = humanSelection;
        computerChoiceBox.textContent = computerSelection;
        console.log("Scissor beat paper. Human wins")
    } 

    if (humanScore === 5) {
        e.target.parentNode.remove();
        const div = document.createElement('div')
        div.textContent = 'Human wins';
        div.style = 'text-align: center';
        mainContainer.appendChild(div);
    } else if (computerScore === 5) {
        e.target.parentNode.remove();
        const div = document.createElement('div')
        div.textContent = 'Computer wins';
        div.style = 'text-align: center';
        mainContainer.appendChild(div);
    }
    return;
}



