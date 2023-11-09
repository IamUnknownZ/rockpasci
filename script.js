const choices = ['rock', 'paper', 'scissors'];

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player1Choice, player2Choice) {
  if (player1Choice === player2Choice) {
    return 'It\'s a tie!';
  } else if (
    (player1Choice === 'rock' && player2Choice === 'scissors') ||
    (player1Choice === 'paper' && player2Choice === 'rock') ||
    (player1Choice === 'scissors' && player2Choice === 'paper')
  ) {
    return 'Player 1 wins!';
  } else {
    return 'Player 2 wins!';
  }
}

function makeChoice(player, choice) {
  if (player === 'player1') {
    const player2ChoiceInput = document.getElementById('player2Choice');
    player2ChoiceInput.disabled = false;
    player2ChoiceInput.focus();
    player2ChoiceInput.value = '';
    document.getElementById('outcome').textContent = 'Waiting for Player 2...';
  } else {
    const player2ChoiceInput = document.getElementById('player2Choice');
    player2ChoiceInput.disabled = true;
    const player1Choice = document.getElementById('player1Choice').textContent.toLowerCase();
    const player2Choice = choice.toLowerCase();
    document.getElementById('outcome').textContent = determineWinner(player1Choice, player2Choice);
  }
}

function getPlayer2Choice() {
  const player2ChoiceInput = document.getElementById('player2Choice');
  return player2ChoiceInput.value.trim().toLowerCase();
}
