function getComputerChoice () {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomChoice = choices[Math.floor (Math.random() * choices.length)];
    return randomChoice;
}

let playerScore = 0;
let computerScore = 0;

const container = document.createElement ('div');
document.documentElement.appendChild (container);
const rock = document.createElement ('button');
const paper = document.createElement ('button');
const scissor = document.createElement ('button');
rock.textContent = "Rock";
paper.textContent = "Paper";
scissor.textContent = "Scissor";
container.appendChild (rock);
container.appendChild (paper);
container.appendChild (scissor);

rock.addEventListener ('click', () => playRound("Rock", getComputerChoice()));
paper.addEventListener ('click', () => playRound("Paper", getComputerChoice()));
scissor.addEventListener ('click', () => playRound("Scissor", getComputerChoice()));

const resultBox = document.createElement ('div');
container.appendChild (resultBox);

const scoreBox = document.createElement ('div');
const playerScoreBox = document.createElement ('p');
const computerScoreBox = document.createElement ('p');
scoreBox.appendChild (playerScoreBox);
scoreBox.appendChild (computerScoreBox);
container.appendChild (scoreBox);

function playRound (playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    let roundResult = "";
    if (player === computer) roundResult = "It's a Tie!";
    else if ((player === 'rock' && computer === 'scissor') || (player === 'paper' && computer === 'rock') || player === 'scissor' && computer === 'paper') {
        playerScore ++;
        roundResult = `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        computerScore ++;
        roundResult = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    resultBox.textContent = roundResult;
    playerScoreBox.textContent = `Player: ${playerScore}`;
    computerScoreBox.textContent = `Computer: ${computerScore}`;

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore == 5) resultBox.textContent = "Congrats, you WON!!!";
        else resultBox.textContent = "You Lost, Better Luck Next Time";
        playerScore = 0; computerScore = 0;
        playerScoreBox.textContent = `Player: ${playerScore}`;
        computerScoreBox.textContent = `Computer: ${computerScore}`;
        document.querySelectorAll('button').disabled = true;
    }
}