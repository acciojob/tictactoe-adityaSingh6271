//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const player1Input = document.getElementById('player-1');
  const player2Input = document.getElementById('player-2');
  const submitButton = document.getElementById('submit');
  const gameBoard = document.getElementById('game-board');
  const messageDiv = document.querySelector('.message');
  const cells = document.querySelectorAll('.cell');

  let currentPlayer = 'X';
  let player1Name = '';
  let player2Name = '';

  submitButton.addEventListener('click', () => {
    player1Name = player1Input.value.trim();
    player2Name = player2Input.value.trim();

    if (player1Name && player2Name) {
      document.getElementById('players-input').style.display = 'none';
      gameBoard.style.display = 'block';
      updateMessage();
    } else {
      alert('Please enter names for both players.');
    }
  });

  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      if (cell.textContent === '' && !checkWinner()) {
        cell.textContent = currentPlayer;
        if (checkWinner()) {
          messageDiv.textContent = `${currentPlayer === 'X' ? player1Name : player2Name}, congratulations you won!`;
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          updateMessage();
        }
      }
    });
  });


 function updateMessage() {
    messageDiv.textContent = `${currentPlayer === 'X' ? player1Name : player2Name}, you're up!`;
  }

  function checkWinner() {
    const winningCombinations = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
      [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
      [1, 5, 9], [3, 5, 7]              // Diagonals
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (cells[a - 1].textContent && cells[a - 1].textContent === cells[b - 1].textContent && cells[a - 1].textContent === cells[c - 1].textContent) {
        return true;
      }
    }

    return false;
  }
});	