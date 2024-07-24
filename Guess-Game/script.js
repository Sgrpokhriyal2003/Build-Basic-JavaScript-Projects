let input = document.getElementById('input');
let button = document.getElementById('btn');
let wrong = document.querySelector('.wrong');
let guess = document.getElementById('guesses');

let answer = Math.floor(Math.random()*100)+1; //for generate random number
let numGuess = 0;
button.addEventListener('click', () => {
    guessNumber();
})
function guessNumber(){
    if(input.value < 1 || input.value > 100 || isNaN(input.value)){
        wrong.innerHTML = "Enter between 1 to 100";
    }
    else{
        numGuess++;
        guess.innerHTML = "No of guess : " + numGuess;
        if(input.value > answer){
            wrong.innerHTML = "You Guess Too High!!"
            input.value = "";
        }
        else if(input.value < answer){
            wrong.innerHTML = "You Guess Too Low!!";
            input.value = "";
        }
        else{
            wrong.innerHTML = "Congrats! You Guess Right";
            setTimeout(() => {
                resetGame();
            }, 3000);
        }
    }
}
function resetGame(){
    numGuess = 0;
    answer = Math.floor(Math.random()*100)+1;
    input.value = "";
    guess.innerHTML = "No of guess: 0"; 
    wrong.innerHTML = "";
}