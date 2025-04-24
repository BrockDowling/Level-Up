import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";
import { styles } from "@/styles/styles";

const { height: screenHeight } = Dimensions.get("window");

export default function GameWinScreen() {
  const scrollAnim = useRef(new Animated.Value(screenHeight)).current;
  const [showStaticWin, setShowStaticWin] = useState(true);

  useEffect(() => {
    // Show static "You win!" for 2 seconds, then begin scroll
    const delay = setTimeout(() => {
      setShowStaticWin(false);
      Animated.timing(scrollAnim, {
        toValue: -screenHeight * 2.5,
        duration: 30000,
        useNativeDriver: true,
      }).start();
    }, 2000); // 2-second pause

    return () => clearTimeout(delay);
  }, []);

  return (
    <View style={[styles.container, { overflow: "hidden" }]}>
      {/* Static title that disappears after 2 seconds */}
      {showStaticWin && (
        <View style={StyleSheet.absoluteFillObject}>
          <View style={styles.centered}>
            <Text style={[styles.title, credits.staticWin]}>You win!</Text>
          </View>
        </View>
      )}

      {/* Scrolling credits block */}
      <Animated.View
        style={{
          transform: [{ translateY: scrollAnim }],
          alignItems: "center",
        }}
      >
        {/* Appears again to simulate continuous motion */}
        <Text style={[styles.title]}>You win!</Text>

        <Text style={credits.text}>Developed by: Brock, Jordan and Garrett</Text>
        <Text style={credits.text}>Styles: Brock</Text>
        <Text style={credits.text}>Soundtrack: Garrett</Text>
        <Text style={credits.text}>Rock Paper Scissors: Jordan</Text>
        <Text style={credits.text}>Hangman: Brock</Text>
        <Text style={credits.text}>Tic-Tac-Toe: Garrett</Text>
        <Text style={credits.text}>Made with React Native</Text>
        <Text style={credits.text}>Thanks for playing!</Text>
      </Animated.View>
    </View>
  );
}

const credits = StyleSheet.create({
  text: {
    fontSize: 20,
    marginVertical: 20,
    color: "white",
    textAlign: "center",
  },
  staticWin: {
    fontSize: 48,
    color: "white",
    fontWeight: "bold",
  },
});

// Helper for center screen view
const stylesOverride = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
