import React, { useEffect, useRef } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import { router } from "expo-router";
import { Audio } from "expo-av";

export default function Index() {
  // Animation values
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const welcomeOpacity = useRef(new Animated.Value(0)).current;
  const gifOpacity = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;
  const buttonBorderOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animation sequence: gif fades in first, followed by title, welcome, and then button
    Animated.sequence([
      Animated.timing(gifOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(titleOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(welcomeOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(buttonOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleButtonPress = () => {
    // Navigate to the game screen when the button is pressed
    Audio.Sound.createAsync(require("../assets/sounds/button.mp3")).then(
      ({ sound }) => {
        sound.playAsync();
      }
    );
    router.push("/pathSelection");
  };

  return (
    <View style={styles.container}>
      {/* Animated title */}
      <Animated.Text style={[styles.title, { opacity: titleOpacity }]}>
        LEVEL UP
      </Animated.Text>

      {/* Background gif of rising embers */}
      <Animated.Image
        source={require("../assets/images/risingEmbers.gif")}
        style={[styles.backgroundGif, { opacity: gifOpacity }]}
      />

      {/* Animated welcome message */}
      <Animated.Text style={[styles.welcome, { opacity: welcomeOpacity }]}>
        Do you have what it takes?
      </Animated.Text>

      {/* Start Button with TouchableOpacity */}
      <TouchableOpacity onPress={handleButtonPress}>
        <Animated.View
          style={[
            styles.button,
            { opacity: buttonOpacity }, // Apply opacity animation to the button
          ]}
        >
          <Animated.Text
            style={[styles.buttonText, { opacity: buttonOpacity }]}
          >
            START
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}
