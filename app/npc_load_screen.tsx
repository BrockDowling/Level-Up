import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/styles";
import { NPC } from "../components/NPC";
import { Audio } from "expo-av";
import { router } from "expo-router";
import OverlayMusic from "@/components/OverlayMusic";

export default function NPCLoadScreen({ npc }: { npc: NPC }) {
  const [stage, setStage] = useState<"start" | "playingMinigame" | "afterGame">(
    "start"
  );
  const [selectedDialogueIndex, setSelectedDialogueIndex] = useState<
    number | null
  >(null);
  const [gameResult, setGameResult] = useState<
    "success" | "failure" | "tie" | null
  >(null);

  const handleDialogueChoice = (index: number) => {
    Audio.Sound.createAsync(require("../assets/sounds/button.mp3")).then(
      ({ sound }) => {
        sound.playAsync();
      }
    );
    npc.recordSelectedIndex(index);
    console.log(index);
    setSelectedDialogueIndex(index);
    setStage("playingMinigame");
  };

  const handleMinigameComplete = (result: boolean | string) => {
    if (result === "tie") {
      setGameResult("tie");
    } else {
      setGameResult(result ? "success" : "failure");
    }
    setStage("afterGame");
  };

  const handleFollowUpChoice = () => {
    Audio.Sound.createAsync(require("../assets/sounds/button.mp3")).then(
      ({ sound }) => {
        sound.playAsync();
      }
    );
    if (gameResult === "tie") {
      setStage("playingMinigame");
      setGameResult(null)
      return;
    } else {
      npc.toggleCompleted();
      router.push("/game");
    }
  };

  if (stage === "playingMinigame" && selectedDialogueIndex !== null) {
    const MinigameComponent = npc.getMinigameComponent(selectedDialogueIndex);
    return (
      <OverlayMusic isInMinigame={true}>
        <View style={styles.container}>
          {MinigameComponent && (
            <MinigameComponent onComplete={handleMinigameComplete} />
          )}
        </View>
      </OverlayMusic>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{npc.getName()}</Text>
      <Image
        source={npc.getAsset()}
        style={{ width: 200, height: 200, marginBottom: 20 }}
      />

      {stage === "start" && (
        <>
          <Text style={styles.welcome}>{npc.getOpeningQuestion()}</Text>
          {npc.getDialoguePrompts().map((prompt, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => handleDialogueChoice(index)}
            >
              <Text style={styles.buttonText}>{prompt}</Text>
            </TouchableOpacity>
          ))}
        </>
      )}

      {stage === "afterGame" &&
        selectedDialogueIndex !== null &&
        gameResult && (
          <>
            <Text style={styles.response}>
              {npc.getResponseAfterGame(selectedDialogueIndex, gameResult)}
            </Text>
            {npc
              .getFollowUpOptions(selectedDialogueIndex, gameResult)
              .map((option, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={styles.button}
                  onPress={handleFollowUpChoice}
                >
                  <Text style={styles.buttonText}>{option}</Text>
                </TouchableOpacity>
              ))}
          </>
        )}
    </View>
  );
}
