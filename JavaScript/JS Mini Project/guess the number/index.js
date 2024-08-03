const randomNumber = parseInt(Math.random() *100 +1);

const userInput = document.querySelector('.guessField');
const submit = document.querySelector('.guessSubmit');
const remaining = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess =[];
let numGuess = 1;

let playGame =true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess= parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(NaN(guess)){
        alert('Enter a valid number');
    }
    else if(guess<1) {
        alert('Enter a valid number greater than 1');
    }
    else if(guess > 100){
        alert('Enter a valid number less than 100');
    }
    else{
        prevGuess.push(guess)
        if(numGuess ===11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame()
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){

}

function displayGuess(guess){

}

function displayMessage(message){

}

function endGame(){

}

function newGame(){

}