import { useState, useEffect } from 'react';
import { Box, Button, Typography, Grid, Paper } from '@mui/material';


const TicTacToe = () => {
  const emptyBoard = Array(9).fill(null);
  const [board, setBoard] = useState(emptyBoard);
  const [isXNext, setIsXNext] = useState(true);

  // Загрузка сохранённого состояния
  useEffect(() => {
    const savedBoard = JSON.parse(localStorage.getItem('board'));
    const savedIsXNext = JSON.parse(localStorage.getItem('isXNext'));
    if (savedBoard) setBoard(savedBoard);
    if (savedIsXNext !== null) setIsXNext(savedIsXNext);
  }, []);

  // Сохранение состояния при изменении
  useEffect(() => {
    localStorage.setItem('board', JSON.stringify(board));
    localStorage.setItem('isXNext', JSON.stringify(isXNext));
  }, [board, isXNext]);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      // Выигрышные комбинации
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Победитель: ${winner}`
    : board.includes(null)
    ? `Следующий ход: ${isXNext ? 'X' : 'O'}`
    : 'Ничья';

  const resetGame = () => {
    setBoard(emptyBoard);
    setIsXNext(true);
    localStorage.removeItem('board');
    localStorage.removeItem('isXNext');
  };

  const renderSquare = (index) => (
    <Paper
      elevation={3}
      sx={{
        width: 100,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: board[index] || winner ? 'default' : 'pointer',
        backgroundColor: board[index]
          ? board[index] === 'X'
            ? '#e3f2fd'
            : '#ffebee'
          : '#fff',
      }}
      onClick={() => handleClick(index)}
    >
      <Typography variant="h4" color={board[index] === 'X' ? 'primary' : 'error'}>
        {board[index]}
      </Typography>
    </Paper>
  );

  return (
    <Box sx={{ mt: 5, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Крестики-нолики
      </Typography>
      <Typography variant="h5" gutterBottom>
        {status}
      </Typography>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        sx={{ maxWidth: 310, margin: '0 auto' }}
      >
        {board.map((_, index) => (
          <Grid item xs={4} key={index}>
            {renderSquare(index)}
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={resetGame}
      >
        Сбросить игру
      </Button>
    </Box>
  );
};

export default TicTacToe;