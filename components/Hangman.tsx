import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import { Audio } from "expo-av";

export const Hangman: React.FC<{
  onComplete: (result: boolean) => void;
}> = ({ onComplete }) => {
  // List of words to choose from
  const words = [
    "POKEMON",
    "TRAINER",
    "BATTLE",
    "GYM",
    "PIKACHU",
    "EVOLVE",
    "CATCH",
    "BADGE",
  ];

  // Game state
  const [word] = useState(
    words[Math.floor(Math.random() * words.length)].toUpperCase()
  );
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const maxWrongGuesses = 6;
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [isGuessing, setIsGuessing] = useState(false);

  // ASCII art for hangman stages
  const hangmanArt = [
    `
     ______
     |    |
          |
          |
          |
          |
    =========`,
    `
     ______
     |    |
     O    |
          |
          |
          |
    =========`,
    `
     ______
     |    |
     O    |
     |    |
          |
          |
    =========`,
    `
     ______
     |    |
     O    |
    /|    |
          |
          |
    =========`,
    `
     ______
     |    |
     O    |
    /|\\   |
          |
          |
    =========`,
    `
     ______
     |    |
     O    |
    /|\\   |
    /     |
          |
    =========`,
    `
     ______
     |    |
     O    |
    /|\\   |
    / \\  |
          |
    =========`,
  ];

  const hasWon = () => {
    return word.split("").every((letter) => guessedLetters.includes(letter));
  };

  const handleGuess = (letter: string) => {
    if (gameOver || guessedLetters.includes(letter) || isGuessing) return;

    setIsGuessing(true); // Prevent rapid clicks
    Audio.Sound.createAsync(require("../assets/sounds/button.mp3")).then(
      ({ sound }) => {
        sound.playAsync();
      }
    );

    setGuessedLetters([...guessedLetters, letter]);
    if (!word.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1);
    }

    setTimeout(() => setIsGuessing(false), 200); // Debounce for 200ms
  };

  // Update game state
  useEffect(() => {
    if (wrongGuesses >= maxWrongGuesses) {
      setGameOver(true);
      setWon(false);
      onComplete(false);
    } else if (hasWon()) {
      setGameOver(true);
      setWon(true);
      onComplete(true);
    }
  }, [guessedLetters, wrongGuesses]);

  // Render the word with underscores for unguessed letters
  const renderWord = () => {
    return word
      .split("")
      .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
      .join(" ");
  };

  // Available letters for guessing
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hangman!</Text>

      <View style={styles.hangmanBoard}>
        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <Text
            style={styles.hangmanArt}
            numberOfLines={10}
            adjustsFontSizeToFit={false}
          >
            {hangmanArt[wrongGuesses].trim()}
          </Text>
        </View>

        <Text style={styles.hangmanStatus}>
          Wrong Guesses: {wrongGuesses}/{maxWrongGuesses}
        </Text>

        <Text style={styles.hangmanWord}>{renderWord()}</Text>

        {gameOver && (
          <Text style={styles.gameStatus}>
            {won ? "You Won!" : `Game Over! The word was ${word}`}
          </Text>
        )}
      </View>

      {!gameOver && (
        <View style={styles.hangmanLetterGrid}>
          {letters.map((letter, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.hangmanLetterButton,
                guessedLetters.includes(letter) && styles.hangmanLetterButtonDisabled,
              ]}
              onPress={() => handleGuess(letter)}
              disabled={guessedLetters.includes(letter) || isGuessing}
            >
              <Text style={styles.hangmanLetterText}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};