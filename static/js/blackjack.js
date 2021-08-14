let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let canPlay = true;
let message = "";

let messageElement = document.getElementById("intro");
let sumElement = document.getElementById("sum");
let cardsElement = document.getElementById("cards");

function getRandomCard(){
    return Math.floor(Math.random()*13)+1
}


function startGame(){
    renderGame();
}

function renderGame(){
    cardsElement.textContent = "Cards: "
    sumElement.textContent="Sum: " + sum;
    
    for(let i=0; i < cards.length; i++){
        cardsElement.textContent += cards[i] + ", ";
    }
    
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
    
}


function NewCard(){
    let nextCard=getRandomCard();
    sum+=nextCard;
    cards.push(nextCard)
    renderGame()
}