import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { testNPC } from "../components/TestNPC";
import { styles } from "../styles/styles";

export default function NPCLoadScreen() {
  const [stage, setStage] = useState<"start" | "playingMinigame" | "afterGame">("start");
  const [selectedDialogueIndex, setSelectedDialogueIndex] = useState<number | null>(null);
  const [gameResult, setGameResult] = useState<"success" | "failure" | null>(null);

  const handleDialogueChoice = (index: number) => {
    setSelectedDialogueIndex(index);
    setStage("playingMinigame");
  };

  const handleMinigameComplete = (result: boolean) => {
    setGameResult(result ? "success" : "failure");
    setStage("afterGame");
  };

  const handleFollowUpChoice = () => {
    setStage("start");
    setSelectedDialogueIndex(null);
    setGameResult(null);
  };

  // If in the minigame stage, render the minigame component dynamically
  if (stage === "playingMinigame" && selectedDialogueIndex !== null) {
    const Minigame = testNPC.getMinigameComponent(selectedDialogueIndex);
    return (
      <View style={styles.container}>
        {Minigame && <Minigame onComplete={handleMinigameComplete} />}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* NPC Name and Image */}
      <Text style={styles.title}>{testNPC.getName()}</Text>
      <Image source={testNPC.getAsset()} style={{ width: 200, height: 200, marginBottom: 20 }} />

      {/* NPC Opening Question and Dialogue Options */}
      {stage === "start" && (
        <>
          <Text style={styles.welcome}>{testNPC.getOpeningQuestion()}</Text>
          {testNPC.getDialoguePrompts().map((prompt, index) => (
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

      {/* After minigame: NPC reacts to win/loss, and player gets follow-up options */}
      {stage === "afterGame" && selectedDialogueIndex !== null && gameResult && (
        <>
          <Text style={styles.response}>
            {testNPC.getResponseAfterGame(selectedDialogueIndex, gameResult)}
          </Text>
          {testNPC.getFollowUpOptions(selectedDialogueIndex, gameResult).map((option, idx) => (
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
