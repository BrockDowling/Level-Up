import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import React from "react";

export const FakeMinigame: React.FC<{
  onComplete: (result: boolean) => void;
}> = ({ onComplete }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fake Minigame</Text>
      <TouchableOpacity style={styles.button} onPress={() => onComplete(true)}>
        <Text style={styles.buttonText}>Win</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onComplete(false)}>
        <Text style={styles.buttonText}>Lose</Text>
      </TouchableOpacity>
    </View>
  );
};
