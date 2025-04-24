import React, { useEffect, useRef, useState } from "react";
import { View, Text, Animated, Dimensions, TouchableOpacity } from "react-native";
import { styles } from "@/styles/styles";
import { router } from "expo-router";
import { Audio } from "expo-av";

const { height: screenHeight } = Dimensions.get("window");

export default function GameWinScreen() {
  const scrollAnim = useRef(new Animated.Value(screenHeight)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [showStaticWin, setShowStaticWin] = useState(true);

  useEffect(() => {
    // Fade out static "You win!" and start scrolling credits
    const fadeOut = Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    });

    const delay = setTimeout(() => {
      fadeOut.start(() => {
        setShowStaticWin(false);
        Animated.timing(scrollAnim, {
          toValue: -screenHeight * 3, // Adjusted for longer scroll
          duration: 30000, // Slower scroll for readability
          useNativeDriver: true,
        }).start();
      });
    }, 800);

    return () => clearTimeout(delay);
  }, [fadeAnim, scrollAnim]);

  return (
    <View style={styles.container}>
      {/* Static "You win!" with fade-out */}
      {showStaticWin && (
        <Animated.View
          style={[styles.centered, { opacity: fadeAnim }]}
        >
          <Text style={styles.winTitle}>You Win!</Text>
        </Animated.View>
      )}

      {/* Scrolling credits block */}
      <Animated.View
        style={[
          styles.creditsContainer,
          { transform: [{ translateY: scrollAnim }] },
        ]}
      >
        <Text style={styles.winTitle}>You Win!</Text>
        <Text style={styles.creditsSectionTitle}>Development Team</Text>
        <Text style={styles.creditsText}>Developed by: Brock, Jordan, Garrett</Text>
        <Text style={styles.creditsText}>Styles: Brock</Text>
        <Text style={styles.creditsText}>Soundtrack: Garrett</Text>
        <Text style={styles.creditsSectionTitle}>Minigames</Text>
        <Text style={styles.creditsText}>Rock Paper Scissors: Jordan</Text>
        <Text style={styles.creditsText}>Hangman: Brock</Text>
        <Text style={styles.creditsText}>Tic-Tac-Toe: Garrett</Text>
        <Text style={styles.creditsSectionTitle}>Tech</Text>
        <Text style={styles.creditsText}>Made with React Native</Text>
        <Text style={styles.creditsText}>Thanks for playing!</Text>
      </Animated.View>
    </View>
  );
}