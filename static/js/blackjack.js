let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let canPlay = true;
let message = "";

let messageElement = document.getElementById("intro");
let sumElement = document.getElementById("sum");
let cardsElement = document.getElementById("cards");


function startGame(){
    renderGame()
}

function renderGame(){

    if(sum<=20){
        message="Do you want to draw a new card?";
    }else if(sum===21){
        message="Blackjack!";
        hasBlackJack = true;
    }else{
        message="You've lost!";
        canPlay = false;
    }
    messageElement.textContent=message;
    sumElement.textContent="Sum: " + sum;
    cardsElement.textContent="Cards: " + firstCard   + ", "+ secondCard;
    
}


function NewCard(){
    console.log("Drawing a new card from the deck!")
    let nextCard=3;
    sum+=nextCard
    renderGame()
}