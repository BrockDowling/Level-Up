import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/styles";
import { NPC } from "@/components/NPC";
import { Oddish } from "@/components/Oddish";
import { Weedle } from "@/components/Weedle";
import { Pidgey } from "@/components/Pidgey";

export default function GameWinScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Complete!</Text>
    </View>
  );
}
