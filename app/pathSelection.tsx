import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import { router } from "expo-router";

export default function Game() {
  const handleFunny = () => {
    router.push;
  };
  const handleNice = () => {
    router.push;
  };
  const handleRude = () => {
    router.push;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PATH SELECTION</Text>
      
      <Text style={styles.welcome}>
        What will you choose to be?
      </Text>
      
        <View style={styles.title}>
            <TouchableOpacity onPress={handleRude}>
                <View style={styles.button}>
                <Text style={styles.buttonText}>
                    Rude
                </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleNice}>
                <View style={styles.button}>
                <Text style={styles.buttonText}>
                    Nice
                </Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleFunny}>
                <View style={styles.button}>
                <Text style={styles.buttonText}>
                    Funny
                </Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
}