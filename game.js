function getComputerChoice () {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomChoice = choices[Math.floor (Math.random() * choices.length)];
    return randomChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound (playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    if (player === computer) return "It's a Tie!";
    else if ((player === 'rock' && computer === 'scissor') || (player === 'paper' && computer === 'rock') || player === 'scissor' && computer === 'paper') {
        playerScore ++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        computerScore ++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

for (let i = 0; i < 5; i ++) {
    const playerSelection = prompt ("Enter your move!");
    const computerSelection = getComputerChoice ();
    console.log (playRound (playerSelection, computerSelection));
}

if (playerScore > computerScore) console.log("Yay! You win.");
else if (score == computerScore) console.log("Wow, It's a tie");
else console.log ("You Lose! Better luck next time.");