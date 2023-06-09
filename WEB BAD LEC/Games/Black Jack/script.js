let dealerSum = 0;
let playerSum = 0;

let dealerAceCount = 0;
let playerAceCount = 0;

let hidden;
let deck;

let canHit = true;

function restart() {
    window.location.reload();
}

window.onload = function() {
    buildDeck();
    shuffleDeck();
    startGame();
};

function buildDeck() {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]);
        }
    }
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}

function startGame() {
    hidden = deck.pop();
    dealerSum += getValue(hidden);
    dealerAceCount += checkAce(hidden);

    while (dealerSum < 17) {
        const cardImg = document.createElement("img");
        const card = deck.pop();
        cardImg.src = "/Assets/cards/" + card + ".png";
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg);
    }
    console.log(dealerSum);

    for (let i = 0; i < 2; i++) {
        const cardImg = document.createElement("img");
        const card = deck.pop();
        cardImg.src = "/Assets/cards/" + card + ".png";
        playerSum += getValue(card);
        playerAceCount += checkAce(card);
        document.getElementById("player-cards").append(cardImg);
    }

    console.log(playerSum);
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stay").addEventListener("click", stay);
}

function hit() {
    if (!canHit) {
        return;
    }

    const cardImg = document.createElement("img");
    const card = deck.pop();
    cardImg.src = "/Assets/cards/" + card + ".png";
    playerSum += getValue(card);
    playerAceCount += checkAce(card);
    document.getElementById("player-cards").append(cardImg);

    if (reduceAce(playerSum, playerAceCount) > 21) {
        canHit = false;
    }
}

function stay() {
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    playerSum = reduceAce(playerSum, playerAceCount);

    canHit = false;
    document.getElementById("hidden").src = "/Assets/cards/" + hidden + ".png";

    let message = "";
    if (playerSum > 21) {
        message = "You Lose!";
    } else if (dealerSum > 21) {
        message = "You Win!";
    } else if (playerSum === dealerSum) {
        message = "Draw!";
    } else if (playerSum > dealerSum) {
        message = "You Win!";
    } else if (playerSum < dealerSum) {
        message = "You Lose!";
    }

    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("your-sum").innerText = playerSum;
    document.getElementById("results").innerText = message;
}

function getValue(card) {
    const data = card.split("-");
    const value = data[0];

    if (isNaN(value)) {
        return value === "A" ? 11 : 10;
    }
    return parseInt(value);
}

function checkAce(card) {
    return card[0] === "A" ? 1 : 0;
}

function reduceAce(playerSum, playerAceCount) {
    while (playerSum > 21 && playerAceCount > 0) {
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
}
