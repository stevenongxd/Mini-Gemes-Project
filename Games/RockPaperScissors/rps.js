// Get Elements
const playerChoices = document.querySelectorAll('.player img');
const opponentImage = document.querySelector('.opponent img');
const resultText = document.querySelector('.result p:last-child');
const playerScoreText = document.querySelector('.scores p:nth-child(2)');
const opponentScoreText = document.querySelector('.scores p:last-child');

// Initialize scores
let playerScore = 0;
let opponentScore = 0;

// Randomize Opponent Choice
function generateOpponentChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

// Outcome
function assignWinner(playerChoice, opponentChoice) {
  if (playerChoice === opponentChoice) {
    return { playerResult: 'draw', opponentResult: 'draw' };

  } else if ((playerChoice === 'rock' && opponentChoice === 'scissors') || (playerChoice === 'paper' && opponentChoice === 'rock') || (playerChoice === 'scissors' && opponentChoice === 'paper')) {
    return { playerResult: 'win', opponentResult: 'lose' };

  } else {
    return { playerResult: 'lose', opponentResult: 'win' };
  }
}

// Click Event Listener
playerChoices.forEach(function(choice) {
  choice.addEventListener('click', function() {
    const playerChoice = choice.classList[0];
    const opponentChoice = generateOpponentChoice();

    // Change Opponent Image
    opponentImage.src = '/Mini-Gemes-Project/Assets/' + opponentChoice + '.png';

    // Result
    const result = assignWinner(playerChoice, opponentChoice);

    // Update Result <p>
    if (result.playerResult === 'draw' && result.opponentResult === 'draw') {
      resultText.textContent = "It's a draw!";
    } else {
      resultText.textContent = 'Player: ' + result.playerResult + ' | Opponent: ' + result.opponentResult;
    }

    // Update Scores <p>
    if (result.playerResult === 'win') {
      playerScore++;
    } else if (result.opponentResult === 'win') {
      opponentScore++;
    }

    playerScoreText.textContent = 'Player: ' + playerScore;
    opponentScoreText.textContent = 'Opponent: ' + opponentScore;
  });
});
