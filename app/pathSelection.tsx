import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles";
import { router } from "expo-router";
import { Button } from "../components/Button";

export default function Game() {
  const handleFunny = () => {
    router.push({ pathname: "../game", params: { path: "Funny" } });
  };
  const handleNice = () => {
    router.push({ pathname: "../game", params: { path: "Nice" } });
  };
  const handleRude = () => {
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