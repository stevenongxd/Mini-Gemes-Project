// bagian const / bikin obj
const suits = ["C", "D", "H", "S"];
const cardNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];



// deck card nya
function createDeck() {
    const deck = [];
    for (let suit of suits) {
        for (let cardNumber of cardNumbers) {
            deck.push(cardNumber + "-" + suit);
        }
    }
    return deck;
}

// call random card buat player
function getRandomCard(deck) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    return deck.splice(randomIndex, 1)[0];
}

// hitung hand and show
function getHandValue(hand) {
    let value = 0;
    let hasAce = false;

    for (let card of hand) {
        const cardNumber = card.split("-")[0];
        if (cardNumber === "A") {
            value += 11;
            hasAce = true;
        } else if (cardNumber === "K" || cardNumber === "Q" || cardNumber === "J") {
            value += 10;
        } else {
            value += parseInt(cardNumber);
        }
    }

    if (value > 21 && hasAce) {
        value -= 10;
    }

    return value;
}

// var
let deck = [];
let playerHand = [];
let dealerHand = [];

// newgame
function newGame() {
    deck = createDeck();
    playerHand = [getRandomCard(deck), getRandomCard(deck)];
    dealerHand = [getRandomCard(deck), getRandomCard(deck)];

    renderCards();
    checkBlackjack();
}

// image appear
function renderCards() {
    const playerCardsElement = document.getElementById("player-cards");
    const dealerCardsElement = document.getElementById("dealer-cards");

    playerCardsElement.innerHTML = "";
    dealerCardsElement.innerHTML = "";

    for (let card of playerHand) {
        const cardElement = document.createElement("img");
        cardElement.className = "card";
        cardElement.src = "/Assets/cards/" + card + ".png";
        playerCardsElement.appendChild(cardElement);
    }

    const playerValue = getHandValue(playerHand);
    const playerValueElement = document.createElement("div");
    playerValueElement.textContent = `Total: ${playerValue}`;
    playerCardsElement.appendChild(playerValueElement);

    for (let card of dealerHand) {
        const cardElement = document.createElement("img");
        cardElement.className = "card";
        cardElement.src = "/Assets/cards/" + card + ".png";
        dealerCardsElement.appendChild(cardElement);
    }

    const dealerValue = getHandValue(dealerHand);
    const dealerValueElement = document.createElement("div");
    dealerValueElement.textContent = `Total: ${dealerValue}`;
    dealerCardsElement.appendChild(dealerValueElement);
}

// blackjack (21) checker
function checkBlackjack() {
    const playerValue = getHandValue(playerHand);
    const dealerValue = getHandValue(dealerHand);

    if (playerValue === 21 && dealerValue === 21) {
        alert("It's a tie! Both have blackjack.");
        newGame();
    } else if (playerValue === 21) {
        alert("Player wins with blackjack!");
        newGame();
    } else if (dealerValue === 21) {
        alert("Dealer wins with blackjack!");
        newGame();
    }
}

// hit.. if bust lose
function hit() {
    playerHand.push(getRandomCard(deck));
    renderCards();

    const playerValue = getHandValue(playerHand);
    if (playerValue > 21) {
        setTimeout(() => {
            alert("Player busts. Dealer wins!");
            newGame();
        }, 500);
    }
}

// stay win or lose
function stay() {
    const dealerCardsElement = document.getElementById("dealer-cards");
    const dealerValueElement = document.querySelector("#dealer-cards .hand-total");

    let dealerValue = getHandValue(dealerHand);

    while (dealerValue < 17) {
        dealerHand.push(getRandomCard(deck));
        dealerValue = getHandValue(dealerHand);

        const cardElement = document.createElement("img");
        cardElement.className = "card";
        cardElement.src = `Assets/cards/${dealerHand[dealerHand.length - 1]}.png`;
        dealerCardsElement.insertBefore(cardElement, dealerValueElement);
    }

    renderCards();

    setTimeout(() => {
        if (dealerValue > 21) {
            alert("Dealer busts. Player wins!");
        } else if (dealerValue === getHandValue(playerHand)) {
            alert("It's a tie!");
        } else if (dealerValue > getHandValue(playerHand)) {
            alert("Dealer wins!");
        } else {
            alert("Player wins!");
        }

        newGame();
    }, 500);
}


// button listener
document.getElementById("hit").addEventListener("click", hit);
document.getElementById("stay").addEventListener("click", stay);
document.getElementById("refresh").addEventListener("click", newGame);

// finish / end => new game
newGame();
