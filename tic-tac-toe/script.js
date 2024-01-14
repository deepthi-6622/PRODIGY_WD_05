document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const status = document.getElementById('status');

    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    const checkWinner = () => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                gameActive = false;
                return gameBoard[a];
            }
        }

        return gameBoard.includes('') ? null : 'T'; // 'T' for tie
    };

    const handleClick = (index) => {
        if (!gameBoard[index] && gameActive) {
            gameBoard[index] = currentPlayer;
            cells[index].textContent = currentPlayer;

            const winner = checkWinner();

            if (winner) {
                if (winner === 'T') {
                    status.textContent = 'It\'s a tie!';
                } else {
                    status.textContent = `Player ${winner} wins!`;
                }
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                status.textContent = `Player ${currentPlayer}'s turn`;
            }
        }
    };

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => handleClick(index));
    });
});
