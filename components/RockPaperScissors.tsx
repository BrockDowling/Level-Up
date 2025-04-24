import { View, Text, TouchableOpacity} from "react-native";
import { styles } from "../styles/styles";
import React, { useState, useEffect } from "react";

const choices = ['Rock', 'Paper', 'Scissors'];



export const RockPaperScissors: React.FC<{
  onComplete: (result: boolean | string) => void;
}> = ({ onComplete }) => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const playGame = (userPick) => {
    const computerPick = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(userPick);
    setComputerChoice(computerPick);
    setResult(getResult(userPick, computerPick));
  };
  const getResult = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      console.log("It's a Tie!");
      onComplete("C");
    } else if (
      (userChoice === 'Rock' && computerChoice === 'Scissors') ||
      (userChoice === 'Paper' && computerChoice === 'Rock') ||
      (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      console.log('You Win!');
      onComplete(true);
    } else {
    console.log('You Lose!');
    onComplete(false);
  };
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rock Paper Scissors</Text>
      <TouchableOpacity style={styles.button} onPress={() => playGame('Rock')}>
        <Text style={styles.buttonText}>Rock</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => playGame('Paper')}>
        <Text style={styles.buttonText}>Paper</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => playGame('Scissors')}>
        <Text style={styles.buttonText}>Scissors</Text>
      </TouchableOpacity>
    </View>
  );
};
