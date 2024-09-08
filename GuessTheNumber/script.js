let randomNumber=parseInt(Math.random() * 100 + 1);
const submit=document.querySelector('#subm')
const userInput=document.querySelector('#input')
const userGuess=document.querySelector('.guesses')
const Remaining=document.querySelector('.rem-guesses')
const loworHi=document.querySelector('.loworHi')
const startOver=document.querySelector('.result')

const p=document.createElement('p')
let prevGuess=[];
let numGuess=1
let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
    e.preventDefault()           //it stops the value to go any where..
    const guess=parseInt(userInput.value)
    validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a valid number')
    }else if(guess < 1){
        alert('Please Enter a number greater than 1')
    }
    else if(guess > 100){
        alert('Please Enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over, Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('Hurray! You Guessed Right')
        endGame()
    }else if(guess < randomNumber){
        displayMessage('Number is too low')
    }else if(guess > randomNumber){
        displayMessage('Number is too high')
    }
}

function displayGuess(guess){                   // it clean the guesses
    userInput.value=''
    userGuess.innerHTML +=`${guess}, `
    numGuess++;
    Remaining.innerHTML =`${11-numGuess}`
}

function displayMessage(message){
    loworHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
    userInput.value=''              //it clean the value
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p)
    playGame=false;
    newGame()
}

function newGame(){
    const newGameBtn=document.querySelector('#newGame')
    newGameBtn.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random() * 100 + 1);
        prevGuess=[]                                    //it reset the array..
        numGuess=1
        userGuess.innerHTML=''
        Remaining.innerHTML =`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}

