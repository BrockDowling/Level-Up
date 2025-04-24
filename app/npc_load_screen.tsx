import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/styles";
import { NPC } from "../components/NPC";
import { Audio } from "expo-av";

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
    setSelectedDialogueIndex(index);
    setStage("playingMinigame");
  };

  const handleMinigameComplete = (result: boolean | string) => {
    if (result === "C") {
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
    setStage("start");
    setSelectedDialogueIndex(null);
    setGameResult(null);
  };

  if (stage === "playingMinigame" && selectedDialogueIndex !== null) {
    const MinigameComponent = npc.getMinigameComponent(selectedDialogueIndex);
    return (
      <View style={styles.container}>
        {MinigameComponent && (
          <MinigameComponent onComplete={handleMinigameComplete} />
        )}
      </View>
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
