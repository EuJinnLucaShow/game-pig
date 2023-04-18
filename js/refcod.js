const playerElements = document.querySelectorAll('.player');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const imgDice = document.querySelector('.dice');

imgDice.classList.add('hidden');
const players = [
  { id: 0, totalScore: 0, currentScore: 0, element: playerElements[0] },
  { id: 1, totalScore: 0, currentScore: 0, element: playerElements[1] },
];
let activePlayer = players[0];

function updateTotalScore(player) {
  const scoreElement = player.element.querySelector('.score');
  scoreElement.textContent = player.totalScore;
}

function updateCurrentScore(player) {
  const currentElement = player.element.querySelector('.current');
  currentElement.textContent = player.currentScore;
}

function switchActivePlayer() {
  activePlayer.currentScore = 0;
  updateCurrentScore(activePlayer);
  activePlayer.element.classList.remove('active');
  activePlayer = players.find(p => p !== activePlayer);
  activePlayer.currentScore = 0;
  updateCurrentScore(activePlayer);
  activePlayer.element.classList.add('active');
}

function rollDice() {
  const diceNumber = Math.trunc(Math.random() * 6 + 1);
  imgDice.classList.remove('hidden');
  imgDice.src = `./images/dice${diceNumber}.png`;

  if (diceNumber !== 1) {
    activePlayer.currentScore += diceNumber;
    updateCurrentScore(activePlayer);
  } else {
    switchActivePlayer();
  }
}

function holdScore() {
  activePlayer.totalScore += activePlayer.currentScore;
  updateTotalScore(activePlayer);

  if (activePlayer.totalScore >= 100) {
    activePlayer.element.classList.add('winner');
    imgDice.classList.add('hidden');
    btnRoll.disabled = true;
    btnHold.disabled = true;
  } else {
    switchActivePlayer();
  }
}

function resetGame() {
  players.forEach(player => {
    player.totalScore = 0;
    player.currentScore = 0;
    updateTotalScore(player);
    updateCurrentScore(player);
    player.element.classList.remove('winner', 'active');
  });
  activePlayer = players[0];
  activePlayer.element.classList.add('active');
  imgDice.classList.add('hidden');
  btnRoll.disabled = false;
  btnHold.disabled = false;
}

btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', resetGame);
