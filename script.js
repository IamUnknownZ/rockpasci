const choices = ['rock', 'paper', 'scissors'];

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}

function makeChoice(playerChoice) {
  const computerChoice = getRandomChoice();
  document.getElementById('computerSelection').textContent = computerChoice;
  
  const outcome = determineWinner(playerChoice, computerChoice);
  document.getElementById('outcome').textContent = outcome;
}
