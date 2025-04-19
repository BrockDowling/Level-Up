import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#121212",
    },
    title: { fontSize: 24, color: "#FFFFFF", marginBottom: 20 },
    button: {
      backgroundColor: "#FF4B0D",
      padding: 15,
      borderRadius: 10,
      marginVertical: 10,
    },
    buttonText: { fontSize: 18, color: "#FFFFFF" },
  });

export function FakeMinigame({
  onComplete,
}: {
  onComplete: (result: boolean) => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fake Minigame</Text>
      <TouchableOpacity style={styles.button} onPress={() => onComplete(true)}>
        <Text style={styles.buttonText}>Win</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onComplete(false)}>
        <Text style={styles.buttonText}>Lose</Text>
      </TouchableOpacity>
    </View>
  );
}
