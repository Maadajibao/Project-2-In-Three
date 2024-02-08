/**
 * Declare constants for DOM elements 
 * and possible choices
 */

const buttons = document.getElementsByClassName('control');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const messages = document.getElementById('messages');
const choices = ['rock','paper', 'scissors'];

/**
 * Add event listener to all the buttons
 */

for (let button of buttons) {
    button.addEventListener('click', function () {
        let playerChoice = this.getAttribute('data-choice');
        playGame(playerChoice);

    });

}

/**
 * The main game function. Accets one parameter, which 
 * is the data-choice value of the selected button
 */


function playGame (playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);
}

/**
 * Checks to see who the winner is
 */

function checkWinner () {
    if (playerChoice == computerChoice ) {
        messages.textContent = 'Tie'
    } else if ( playerChoice == 'rock') {
        if (computerChoice == 'paper') {
            messages.textContent = 'Computer Won';
            computerScore++;
        } else {
            messages.textContent = 'Player Won';
            playerScore++;
        }
    }
    else if ( playerChoice == 'scissors') {
        if (computerChoice == 'rock') {
            messages.textContent = 'Computer Won';
            computerScore++;
        } else {
            messages.textContent = 'Player Won';
            playerScore++;
        }
    }
    else if (playerChoice == 'paper') {
        if (computerChoice == 'scissors') {
            messages.textContent = 'Computer Won';
            computerScore++;
        } else {
            messages.textContent = 'Player Won';
            playerScore++;
        }
    }



}

