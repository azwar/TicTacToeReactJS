import { TicTacToeArr } from "../components/GameBoard";

export function checkWinner(board: TicTacToeArr) {
    const boardSize = board.length;
    // Check rows, columns, and diagonals
    for (let i = 0; i < boardSize; i++) {
        let row = board[i].join('');
        let col = '';
        for (let j = 0; j < boardSize; j++) {
            col += board[j][i];
        }

        if (row === 'X'.repeat(boardSize) || col === 'X'.repeat(boardSize)) {

            return true;
        } else if (row === 'O'.repeat(boardSize) || col === 'O'.repeat(boardSize)) {
            return true;
        }
    }

    let diag1 = '';
    let diag2 = '';
    for (let i = 0; i < boardSize; i++) {
        diag1 += board[i][i];
        diag2 += board[i][boardSize - i - 1];
    }

    if (diag1 === 'X'.repeat(boardSize) || diag2 === 'X'.repeat(boardSize)) {
        return true;
    } else if (diag1 === 'O'.repeat(boardSize) || diag2 === 'O'.repeat(boardSize)) {
        return true;
    }

    return false;
}

export function checkDraw(board: TicTacToeArr) {
    for (let row of board) {
        const tmpRow: any = [...row];
        if (tmpRow.includes(null)) {
            return false;
        }
    }
    return true;
}