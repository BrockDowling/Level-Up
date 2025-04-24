import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import React, { useState, useEffect } from "react";

export const TicTacToe: React.FC<{
  onComplete: (result: boolean | string) => void;
}> = ({ onComplete }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("O");
  const [winner, setWinner] = useState<string | null>(null);

  const checkBoard = (board: (string | null)[]) => {
    let countFilled = 0;

    for (const square of board) {
      if (square != null) countFilled++;
    }
    return countFilled == 9;
  };

  const checkWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    if (checkBoard(squares)) return "tie";

    return null;
  };

  const randomMove = () => {
    const emptyIndexes = board
      .map((value, index) => (value === null ? index : null))
      .filter((v) => v !== null) as number[];

    if (emptyIndexes.length === 0) return;

    const randomIndex =
      emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
    makeMove(randomIndex, "O");
  };

  const aiMove = () => {
    const emptyIndexes = board
      .map((value, index) => (value === null ? index : null))
      .filter((v) => v !== null) as number[];

    for (const index of emptyIndexes) {
      const testBoard = [...board];
      testBoard[index] = "O";
      if (checkWinner(testBoard) === "O") {
        makeMove(index, "O");
        return;
      }
    }

    for (const index of emptyIndexes) {
      const testBoard = [...board];
      testBoard[index] = "X";
      if (checkWinner(testBoard) === "X") {
        if (Math.random() < 0.7) {
          makeMove(index, "O");
          return;
        }
        break;
      }
    }

    randomMove();
  };

  const makeMove = (index: number, player: "X" | "O") => {
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
      onComplete(win === "tie" ? win : win === "X");
    } else {
      setCurrentPlayer(player === "X" ? "O" : "X");
    }
  };

  useEffect(() => {
    if (currentPlayer === "O" && !winner) {
      setTimeout(aiMove, 500);
    }
  }, [currentPlayer, winner]);

  const handlePress = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
      onComplete(win === "tie" ? win : win === "X");
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  return (
<View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe!</Text>
      <Text style={styles.gameStatus}>
        {winner
          ? winner === "tie"
            ? "It's a Tie!"
            : `Player ${winner} Wins!`
          : `Player ${currentPlayer}'s Turn`}
      </Text>
      <View style={styles.ticTacToeBoard}>
        {[0, 1, 2].map((row) => (
          <View key={row} style={styles.row}>
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.ticTacToeCell,
                    board[index] && styles.ticTacToeCellFilled,
                  ]}
                  onPress={() => handlePress(index)}
                  disabled={!!board[index] || !!winner}
                >
                  <Text
                    style={[
                      styles.ticTacToeCellText,
                      board[index] === "X" && styles.ticTacToeX,
                      board[index] === "O" && styles.ticTacToeO,
                    ]}
                  >
                    {board[index]}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
};
