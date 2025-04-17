import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Animated } from "react-native";
import { styles } from "../styles/styles";
import { useLocalSearchParams } from "expo-router";

export default function Game() {
  const { path } = useLocalSearchParams(); // Get the path parameter ("Rude", "Nice", "Funny")
  const [gifOpacity] = useState(1); // Define gifOpacity with a default value

  return (
    <View style={styles.container}>
      <Text style={styles.title}>YOUR JOURNEY BEGINS</Text>
      <Text style={styles.welcome}>
        You chose the {path || "unknown"} path!
      </Text>
      <View style={styles.gameWindow}>
        <Text style={styles.welcome}>
          This is where the game will go
        </Text>
        <Animated.Image 
            source={require('../assets/images/map.gif')} 
            style={[styles.gameWindow, { opacity: gifOpacity }]}
        />
        {/* Add game components here */}
      </View>
    </View>
  );
}