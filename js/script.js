const player0 = document.querySelector('.player-0');
const player1 = document.querySelector('.player-1');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const imgDice = document.querySelector('.dice');

imgDice.classList.add('hidden');
let totalScores = [0, 0];
let currentScour = 0;
let activePlayer = 0;

function switchActivePlayer() {
  currentScour = 0;
  document.getElementById(`current-${activePlayer}`).textContent = currentScour;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player-active');
  player1.classList.toggle('player-active');
}

btnRoll.addEventListener('click', () => {
  const diceNumber = Math.trunc(Math.random() * 6 + 1);
  imgDice.classList.remove('hidden');
  imgDice.src = `./images/dice${diceNumber}.png`;

  if (diceNumber !== 1) {
    currentScour += diceNumber;
    document.getElementById(`current-${activePlayer}`).textContent =
      currentScour;
  } else {
    switchActivePlayer();
  }
});

btnHold.addEventListener('click', () => {
  totalScores[activePlayer] += currentScour;
  document.getElementById(`score-${activePlayer}`).textContent =
    totalScores[activePlayer];
  if (totalScores[activePlayer] >= 100) {
    document
      .querySelector(`.player-${activePlayer}`)
      .classList.add('player-winner');
    document
      .querySelector(`.player-${activePlayer}`)
      .classList.remove('player-active');
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    imgDice.classList.add('hidden');
    btnRoll.disabled = true;
    btnHold.disabled = true;
  } else {
    switchActivePlayer();
  }
});

btnNew.addEventListener('click', () => {
  totalScores = [0, 0];
  currentScour = 0;
  activePlayer = 0;
  btnRoll.disabled = false;
  btnHold.disabled = false;
  document.getElementById(`score-0`).textContent = 0;
  document.getElementById(`score-1`).textContent = 0;
  document.getElementById(`current-0`).textContent = 0;
  document.getElementById(`current-1`).textContent = 0;
  imgDice.classList.add('hidden');
  document
    .querySelector(`.player-${activePlayer}`)
    .classList.remove('player-winner');
  player0.classList.add('player-active');
  player1.classList.remove('player-active');
});
