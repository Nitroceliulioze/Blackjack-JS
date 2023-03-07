let firstCard = Math.floor(Math.random() * 10 + 2);
let secondCard = Math.floor(Math.random() * 10 + 2);
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let startBtn = document.getElementById("start-game-btn");
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let drawCard = Math.floor(Math.random() * 10 + 2);



function startGame() {
    renderGame();
}

function renderGame() {
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've WON!";
        hasBlackjack = true;
    } else {
        message = "Sorry.. Better luck next time";
        isAlive = false;
    }
    messageEl.textContent = message
}

function newCard() {
    sum += drawCard;
    cards.push(drawCard);
    console.log(cards)
    cardsEl.textContent = `Cards: ${[...cards]}`;
    renderGame();
    
}
console.log(drawCard)
console.log(sum)
