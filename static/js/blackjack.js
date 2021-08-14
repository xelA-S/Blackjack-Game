let player={
    name:"Sam",
    chips:400
}

let cards = []
let sum = 0;
let hasBlackJack = false;
let canPlay = false;
let message = "";
let messageElement = document.getElementById("intro");
let sumElement = document.getElementById("sum");
let cardsElement = document.getElementById("cards");
let playerElement=document.getElementById("player")

playerElement.textContent=player.name + " :$"+ player.chips

function getRandomCard(){
    let value = Math.floor(Math.random()*13)+1
    if(value===1){
        return 11;
    }else if(value>=11){
        return 10;
    }else{
        return value
    }

}


function startGame(){
    canPlay=true
    let firstCard = getRandomCard();
    cards = [firstCard];
    sum = firstCard;
    
    renderGame();
}

function renderGame(){
    cardsElement.textContent = "Cards: "
    sumElement.textContent="Sum: " + sum;
    
    for(let i=0; i < cards.length; i++){
        cardsElement.textContent += cards[i] + ", ";
    }
    cardsElement.textContent=cardsElement.textContent.substring(0,cardsElement.textContent.length - 2)

    
    
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
    if(canPlay===true && hasBlackJack===false){
        let nextCard=getRandomCard();
        sum+=nextCard;
        cards.push(nextCard);
        renderGame();
    }    
}