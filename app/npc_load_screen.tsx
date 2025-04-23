import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Oddish } from "../components/Oddish";
import { styles } from "../styles/styles";

export default function NPCLoadScreen() {
  const [stage, setStage] = useState<"start" | "playingMinigame" | "afterGame">("start");
  const [selectedDialogueIndex, setSelectedDialogueIndex] = useState<number | null>(null);
  const [gameResult, setGameResult] = useState<"success" | "failure" | "tie" | null>(null);

  const handleDialogueChoice = (index: number) => {
    setSelectedDialogueIndex(index);
    setStage("playingMinigame");
  };

  const handleMinigameComplete = (result: boolean | string) => {
    if (result === 'C') {
      setGameResult("tie");
    } else {
      setGameResult(result ? "success" : "failure");
    }
    setStage("afterGame");
  };

  const handleFollowUpChoice = () => {
    setStage("start");
    setSelectedDialogueIndex(null);
    setGameResult(null);
  };

  if (stage === "playingMinigame" && selectedDialogueIndex !== null) {
    const MinigameComponent = Oddish.getMinigameComponent(selectedDialogueIndex);
    return (
      <View style={styles.container}>
        {MinigameComponent && <MinigameComponent onComplete={handleMinigameComplete} />}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* NPC Name and Image */}
      <Text style={styles.title}>{Oddish.getName()}</Text>
      <Image source={Oddish.getAsset()} style={{ width: 200, height: 200, marginBottom: 20 }} />

      {/* NPC Opening Question and Dialogue Options */}
      {stage === "start" && (
        <>
          <Text style={styles.welcome}>{Oddish.getOpeningQuestion()}</Text>
          {Oddish.getDialoguePrompts().map((prompt, index) => (
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
            {Oddish.getResponseAfterGame(selectedDialogueIndex, gameResult)}
          </Text>
          {Oddish.getFollowUpOptions(selectedDialogueIndex, gameResult).map((option, idx) => (
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
