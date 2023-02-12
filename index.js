let firstCard = 3;
let secondCard = 7;

let sum = firstCard + secondCard ;
let hasBlackJack = false;

let isAlive = true;

let message = "";

if (sum < 21){
    message= 'Do you want to draw a new card?😄';
} else if (sum === 21){
    message= "wohoo! You've got Blackjack!😄";
    hasBlackJack = true;
} else {
    message= "You're out of the game!😄"
    isAlive = false;
}

// cash out 
console.log(message);