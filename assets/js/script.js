/**
 * Declare constants for DOM elements 
 * and possible choices
 */

const buttons = document.getElementsByClassName('control');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score'); 
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
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

    let result = checkWinner(choices[playerChoice], choices[computerChoice]);  

}

/**
 * Checks to see who the winner is, when calculating the winner 
 * it updates score and informs via text who the winner is
 */




function checkWinner(choicePlayer, choiceComputer) {
    let messages = document.getElementById('messages')


    if (choicePlayer === choiceComputer) {
        console.log('works tie');
        messages.innerText = "Its a Tie";
        
        
    } else if (choicePlayer === 'rock') {
        if (choiceComputer == 'scissors') {
            console.log('works player ');
            messages.innerText = 'You win!';
            incrementPlayerScore();

                   

        } else {
            console.log('works computer');
            messages.innerHTML = '<p>You lost!</p>';
            incrementComputerScore();
        }
    } else if (choicePlayer === 'paper') {
        if (choiceComputer === 'rock') {
            console.log('works player');
            messages.innerText = 'You win!';
            incrementPlayerScore();
        } else {
            console.log('works computer');
            messages.innerText = 'You lost!';
            incrementComputerScore();
        }
    } else if (choicePlayer == 'scissors') {
        if (choiceComputer == 'paper') {
            console.log('works player');
            messages.innerText = 'You win!';
            incrementPlayerScore();
        } else { console.log('works computer');
        messages.innerText = 'You lost!';
        incrementComputerScore(); }

    } else { }

}



/**
 * Get the current playerscore from the DOm and increments it by 1
 */

function incrementPlayerScore() {
    let oldPlayerScore = parseInt(playerScore.innerText);
    playerScore.innerText = ++oldPlayerScore;
}

/**
 * Get the current computerscore from the DOm and increments it by 1
 */

function incrementComputerScore() {
    let oldComputerScore = parseInt(computerScore.innerText);
    computerScore.innerText = ++oldComputerScore;

}


