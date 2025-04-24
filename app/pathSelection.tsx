import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles";
import { router } from "expo-router";
import { Button } from "../components/Button";
import { Audio } from "expo-av";

export default function Game() {
  const handleFunny = () => {
    Audio.Sound.createAsync(require("../assets/sounds/button.mp3")).then(
      ({ sound }) => {
        sound.playAsync();
      }
    );
    router.push({ pathname: "../game", params: { path: "Funny" } });
  };
  const handleNice = () => {
    Audio.Sound.createAsync(require("../assets/sounds/button.mp3")).then(
      ({ sound }) => {
        sound.playAsync();
      }
    );
    router.push({ pathname: "../game", params: { path: "Nice" } });
  };
  const handleRude = () => {
    Audio.Sound.createAsync(require("../assets/sounds/button.mp3")).then(
      ({ sound }) => {
        sound.playAsync();
      }
    );
    router.push({ pathname: "../game", params: { path: "Rude" } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PATH SELECTION</Text>
      <Text style={styles.welcome}>What will you choose to be?</Text>
      <View style={styles.title}>
        <Button title="Rude" onPress={handleRude} />
        <Button title="Nice" onPress={handleNice} />
        <Button title="Funny" onPress={handleFunny} />
      </View>
    </View>
  );
}
