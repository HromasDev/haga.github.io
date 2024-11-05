let map = ['', '', '', '', '', '', '', '', ''];
let roles = ['X', 'O'];
let currentRole = roles[Math.floor(Math.random() * 2)];
let botRole = currentRole === 'O' ? 'X' : 'O';
let gameOver = false;

let buttons = document.getElementsByClassName('button');

console.log('Ваша роль: ' + currentRole);
console.log('Роль бота: ' + botRole);

function loadGameState() {
    const savedState = JSON.parse(localStorage.getItem('ticTacToeGameState'));
    if (savedState) {
        map = savedState.map;
        currentRole = savedState.currentRole;
        botRole = savedState.botRole;
        gameOver = savedState.gameOver;
        updateBoard();
    }
}

function saveGameState() {
    const gameState = {
        map: map,
        currentRole: currentRole,
        botRole: botRole,
        gameOver: gameOver
    };
    localStorage.setItem('ticTacToeGameState', JSON.stringify(gameState));
}

function updateBoard() {
    for (let i = 0; i < map.length; i++) {
        buttons[i].textContent = map[i]; // Обновляем текст на кнопках
    }
}

function checkWinner(role) {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winningCombos.some(combo =>
        combo.every(index => map[index] === role)
    );
}

function updateGame(buttonIndex, role) {
    if (map[buttonIndex] === '' && !gameOver) {
        map[buttonIndex] = role;
        buttons[buttonIndex].textContent = role;
        if (checkWinner(role)) {
            gameOver = true;
            alert(role === currentRole ? 'Ты победил!' : 'Ты проиграл!');
        }
        saveGameState(); 
    }
}

function botMove() {
    if (gameOver) return;
    let botStep;
    do {
        botStep = Math.floor(Math.random() * 9);
    } while (map[botStep] !== '');
    updateGame(botStep, botRole);
}

function playerMove(buttonIndex) {
    if (gameOver) return;
    updateGame(buttonIndex, currentRole);
    botMove();
}

function makeMove(index) {
    playerMove(index);
}

function resetGame() {
    map = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = '';
    }
    currentRole = roles[Math.floor(Math.random() * 2)];
    botRole = currentRole === 'O' ? 'X' : 'O';
    console.log('Ваша роль: ' + currentRole);
    console.log('Роль бота: ' + botRole);
    saveGameState();
}

loadGameState();