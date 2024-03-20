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

    let result = checkWinner(choices[playerChoice], choices[computerChoice]);
    

    
}

/**
 * Checks to see who the winner is
 */




function checkWinner(choicePlayer, choiceComputer) {
    


    if (choicePlayer === choiceComputer) {
        console.log('works tie');
    } else if (choicePlayer === 'rock') {
        if (choiceComputer == 'scissors') {
            console.log('works player ');
        } else {
            console.log('works computer');
        }
    } else if (choicePlayer === 'paper') {
        if (choiceComputer === 'rock') {
            console.log('works player');
        } else {
            console.log('works computer');
        }
    } else if (choicePlayer == 'scissors') {
        if (choiceComputer == 'paper') {
            console.log('works player');
        } else { console.log('works computer'); }
    } else { }


}






function updateScores(playerChoice, computerChoice) {

    isPlayerWinner = checkWinner(choices[playerChoice])
    isComputerWinner = checkWinner(choices[computerChoice])

    if (isPlayerWinner) {
        incrementPlayer();
    } else if (isComputerWinner) {
        incrementComputer();
    } else {}

}


function incrementPlayer() {
    let oldPlayerScore = parseInt(playerScore.innerText);
    playerScore.innerHTML = ++oldPlayerScore;
}

function incrementComputer() {
    let oldComputerScore = parseInt(computerScore.innerText);
    computerScore.innerHTML = ++oldComputerScore;

}




