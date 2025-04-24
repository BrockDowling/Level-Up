import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/styles";
import { Oddish } from "@/components/Oddish";
import { Weedle } from "@/components/Weedle";
import { Pidgey } from "@/components/Pidgey";
import { Pikachu } from "@/components/Pikachu";
import NPCLoadScreen from "./npc_load_screen";
import GameWinScreen from "./game_win";
import { NPC } from "@/components/NPC";
import { Audio } from "expo-av";

{
  /* Add the rest of the NPC's here */
}
let npcList = [Oddish, Weedle, Pidgey, Pikachu];

export default function NPCSelectionScreen() {
  const [selectedNPC, setSelectedNPC] = useState<NPC | null>(null);

  if (Oddish.getCompleted()) npcList = npcList.filter(npc => npc.getName() !== "Oddish");
  if (Weedle.getCompleted()) npcList = npcList.filter(npc => npc.getName() !== "Weedle");
  if (Pidgey.getCompleted()) npcList = npcList.filter(npc => npc.getName() !== "Pidgey");
  if (Pikachu.getCompleted()) npcList = npcList.filter(npc => npc.getName() !== "Pikachu");

  if (npcList.length == 0) {
    return <GameWinScreen/>;
  }

  if (selectedNPC) {
    return <NPCLoadScreen npc={selectedNPC} />;
  }

  const handlePress = (npc: NPC) => {
    Audio.Sound.createAsync(require("../assets/sounds/button.mp3")).then(
      ({ sound }) => {
        sound.playAsync();
      }
    );
    setSelectedNPC(npc);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose an NPC to talk to!</Text>
      {npcList.map((npc, index) => (
        <TouchableOpacity
        key={index}
        style={styles.button}
        onPress={() => handlePress(npc)}
      >
        <Image source={npc.getAsset()} style={{ width: 100, height: 100 }} />
        <Text style={styles.buttonText}>{npc.getName()}</Text>
      </TouchableOpacity>
      ))}
    </View>
  );
}
