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
    /|\   |
          |
          |
    =========`,
    `
     ______
     |    |
     O    |
    /|\   |
    /     |
          |
    =========`,
    `
     ______
     |    |
     O    |
    /|\   |
    / \   |
          |
    =========`,
  ];

  // Check if the player has won
  const hasWon = () => {
    return word.split("").every((letter) => guessedLetters.includes(letter));
  };

  // Handle letter guess
  const handleGuess = (letter: string) => {
    if (gameOver || guessedLetters.includes(letter)) return;

    // Play button sound
    Audio.Sound.createAsync(require("../assets/sounds/button.mp3")).then(
      ({ sound }) => {
        sound.playAsync();
      }
    );

    // Update guessed letters
    setGuessedLetters([...guessedLetters, letter]);

    // Check if the guess is wrong
    if (!word.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1);
    }
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

      {/* Hangman ASCII art */}
        <Text
          style={{
            fontFamily: "VT323",
            fontSize: 14,
            color: "#FFFFFF",
            textAlign: "left",
            lineHeight: 16, 
            includeFontPadding: false,
            backgroundColor: "#1E1E1E",
            padding: 10,
            borderRadius: 5,
          }}
          numberOfLines={10}
          adjustsFontSizeToFit={false}
        >
          {hangmanArt[wrongGuesses].trim()}
        </Text>

      {/* Word display */}
      <Text style={[styles.welcome, { fontFamily: "VT323", fontSize: 30 }]}>
        {renderWord()}
      </Text>

      {/* Game status */}
      {gameOver && (
        <Text style={styles.welcome}>
          {won ? "You Won!" : `Game Over! The word was ${word}`}
        </Text>
      )}
      
      {/* Continue button */}
      {gameOver && (
        <TouchableOpacity style={styles.button} onPress={() => onComplete(won)}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      )}

      {/* Letter buttons */}
      {!gameOver && (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {letters.map((letter, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                {
                  width: 40,
                  height: 40,
                  margin: 5,
                  opacity: guessedLetters.includes(letter) ? 0.5 : 1,
                },
              ]}
              onPress={() => handleGuess(letter)}
              disabled={guessedLetters.includes(letter)}
            >
              <Text style={styles.buttonText}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
