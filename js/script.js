const score0 = document.getElementById('score-0');
const score1 = document.getElementById('score-1');
const current0 = document.getElementById('current-0');
const current1 = document.getElementById('current-1');
const player0 = document.querySelector('.player-0');
const player1 = document.querySelector('.player-1');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const imgDice = document.querySelector('.dice');

imgDice.classList.add('hidden');

btnRoll.addEventListener('click', () => {
  const diceNumber = Math.trunc(Math.random() * 6 + 1);
  imgDice.classList.remove('hidden');
  imgDice.src = `./images/dice${diceNumber}.png`;

  if (diceNumber > 1) {
    current0.textContent = diceNumber;
  }
});
