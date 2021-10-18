// Create an array of numbers between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Instatiate constants; guesses,lastResult,lowOrHi
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

// Instatiate constants; guessSubmit & guessField
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

// let the player's guesses start from 1; guessCount is a variable
let guessCount = 1;
// let the player's guesse count reset after they are done playing; resetButton is a variable
let resetButton;
guessField.focus();
/*  Declaring variable called userGuess that checks whether value in input field(guessField) is a number & is correct
 */
function checkGuess() {
    let userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You guessed right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong guess!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}
// add event listener to the submit button to fire the function 'checkGuess' when it is clicked
guessSubmit.addEventListener('click', checkGuess);


/* Declaring a function called setGameOver that disables the input field and the submit button;
 creates a new button element which when clicked runs the function 'resetGame'  */
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);

}

/* Declaring a function 'resetGame' which resets the number of times a player can guess a number,
 the results of guesses they've made. It's like a total reboot.*/
function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}