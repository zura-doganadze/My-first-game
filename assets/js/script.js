'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let win = 0;
let lost = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}
const currentScore = function(score) {
  document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is on input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ no number!')
    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!')
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.random-number').style.width = '30rem';
    win++; 
    document.querySelector('.win').textContent = win;
    
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!': '📈 Too low!')
      score--;
      currentScore(score)
      // document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!')
      currentScore(0)
      // document.querySelector('.score').textContent = 0;
      lost++;
      document.querySelector('.lost').textContent = lost;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...')
  currentScore(score)
  // document.querySelector('.score').textContent = score;
  document.querySelector('.random-number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.random-number').style.width = '15rem';
});
