let randomNumber = Math.trunc(Math.random() * 20) + 1;
//  math.random() generates a random number between 0 and 1, multiplying it by 20 gives a range of 0 to 20,
//  and Math.trunc() removes the decimal part. Adding 1 shifts the range to 1-20.
document.querySelector('.number').textContent = '?';

const messageElement = function (message) {
  return (document.querySelector('.message').textContent = message);
};

let score = 20;

let highScore = 0; // Initialize high score variable
document.querySelector('.highscore').textContent = highScore;

// game logic
document.querySelector('.check').addEventListener('click', function () {
  // debugger
  const guess = Number(document.querySelector('.guess').value);
  // 4.create and set the score variable to 20
  if (!guess) {
    messageElement('⛔ No Number');
  } else if (guess < 0 || guess > 20) {
    messageElement(
      '❌ Invalid Number! Please enter a number between 1 and 20.'
    );
  } else if (guess === randomNumber) {
    if (score > highScore) {
      highScore = score; // Update high score if current score is higher
      document.querySelector('.highscore').textContent = score;
    }
    messageElement('🎉 Correct Number!');
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '20rem';
  } else if (guess != randomNumber) {
    if (score > 1) {
      messageElement(guess > randomNumber ? '📈 Too high!' : '📉 Too low!');
      score--; // Decrease score by 1 for each wrong guess
      document.querySelector('.score').textContent = score; // Update the score display
    } else {
      messageElement('💥 You lost the game!');
      document.querySelector('.guess').value = 0; // Reset the input field
    }
  }
});

// 1.create a function to reset the game when the "Again!" button is clicked
document.querySelector('.again').addEventListener('click', function () {
  console.log('Again button clicked');
  // Reset score to 20
  score = 20;
  document.querySelector('.score').textContent = score; // Update the score display
  // Reset the randomNumber number and display  '?'
  randomNumber = Math.trunc(Math.random() * 20) + 1; // Generate a new random number
  document.querySelector('.number').textContent = '?';
  // reset the background color to the initial color
  document.querySelector('body').style.backgroundColor = '#222';
  // reset the message to the initial message
  messageElement('Start guessing...');
  // reset the input field to an empty string
  document.querySelector('.guess').value = ''; // Reset the input field
  // Reset the number's width to the initial value
  document.querySelector('.number').style.width = '15rem';
});
