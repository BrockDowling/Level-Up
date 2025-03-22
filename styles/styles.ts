import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 20,
  },
  backgroundGif: {
    position: 'absolute',
    width: 480,
    bottom: '0%',
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FF4B0D",
    marginBottom: 20,
  },
  welcome: {
    fontSize: 24,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#00000",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#FF4B0D",
  },
  buttonText: {
    color: "#FF4B0D",
    fontSize: 18,
    fontWeight: "bold",
  },
});