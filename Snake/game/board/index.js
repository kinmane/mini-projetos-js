const BOARD_SIZE = 21;

export const gameboard = document.getElementById('game-board');

export function generateRandomBoardPosition() {
    return {
        x: Math.floor(Math.random() * BOARD_SIZE) + 1,
        y: Math.floor(Math.random() * BOARD_SIZE) + 1,
    }
}

export function isOutSideBoard(position) {
    return (
        position.x < 1 || position.x > BOARD_SIZE || position.y < 1 || position > BOARD_SIZE
    )
}