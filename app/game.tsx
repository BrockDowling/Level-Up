import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Animated } from "react-native";
import { styles } from "../styles/styles";
import { router, useLocalSearchParams } from "expo-router";

export default function Game() {
  const { path } = useLocalSearchParams(); // Get the path parameter ("Rude", "Nice", "Funny")
  const [gifOpacity] = useState(1); // Define gifOpacity with a default value

  const handleTalkToNPC = () => {
    router.push("/npc_load_screen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>YOUR JOURNEY BEGINS</Text>
      <Text style={styles.welcome}>
        You chose the {path || "unknown"} path!
      </Text>
      <View style={styles.gameWindow}>
        <Animated.Image
          source={require("../assets/images/map1.gif")}
          style={[
            styles.gameWindow,
            { opacity: gifOpacity, resizeMode: "contain"}, // Ensure the image scales proportionally
          ]}
        />
      </View>
      {/* Talk to NPC button */}
      <TouchableOpacity onPress={handleTalkToNPC} style={styles.button}>
        <Text style={styles.buttonText}>Talk to NPC</Text>
      </TouchableOpacity>
    </View>
  );
}