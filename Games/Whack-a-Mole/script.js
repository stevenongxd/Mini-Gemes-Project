const dirt = document.querySelectorAll('.dirt');
const mole = document.querySelectorAll('.mole');
const scoreboard = document.querySelector('h3'); // Corrected selector
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start');
const Mode = document.getElementById('gamemode-container');

let timeLeft;
let before;
let selesai;
let skor;
let scoreText = 'Score: ';
let gameMode = 'endless';

function dirtRand(dirt) {
  const random = Math.floor(Math.random() * dirt.length);
  const dirtRandom = dirt[random];
  if (dirtRandom == before) {
    dirtRand(dirt);
  }
  before = dirtRandom;
  return dirtRandom;
}

function show() {
  const dirtRandom = dirtRand(dirt);
  const timeRandom = randomTime(450, 1200);
  dirtRandom.classList.add('muncul');

  setTimeout(() => {
    dirtRandom.classList.remove('muncul');
    if (!selesai) {
      show();
    }
  }, timeRandom);
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function start() {
  selesai = false;
  skor = 0;

  show();
  if (gameMode === 'timed') {
    timeLeft = 10;
    updateTimer();
  }
  if (gameMode === 'endless') {
    timerElement.textContent = ' ';
  }
}

function bonk() {
  skor++;
  this.parentNode.classList.remove('muncul');
  scoreboard.textContent = scoreText + skor; // Update the score

  if (gameMode === 'timed' && skor === 10) {
    alert("Selamat Anda Menang");
    selesai = true;
  }
}

function setGameMode(mode) {
  gameMode = mode;

  const endlessBtn = document.getElementById('endlessBtn');
  const timedBtn = document.getElementById('timedBtn');

  if (gameMode === 'endless') {
    endlessBtn.classList.add('active');
    timedBtn.classList.remove('active');
  } else if (gameMode === 'timed') {
    timedBtn.classList.add('active');
    endlessBtn.classList.remove('active');

    if (skor === 10) {
      alert("Selamat Anda Menang");
      selesai = true;
    }
  }
}

mole.forEach(random => {
  random.addEventListener('click', bonk);
});

function updateTimer() {
  timerElement.textContent = timeLeft;

  if (timeLeft === 0) {
    timerElement.textContent = 'Game Over';
    selesai = true;
    return;
  }

  if (gameMode === 'endless') {
    timerElement.textContent = ' ';
    return;
  }

  if (selesai) {
    timerElement.textContent = 'Game has ended';
    return;
  }

  timeLeft--;
  setTimeout(updateTimer, 1000);
}
