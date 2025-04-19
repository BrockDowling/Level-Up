import { StyleSheet, Dimensions } from "react-native";

// Get the window dimensions dynamically
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 20,
  },
  gameWindow: {
    alignItems: "center",
    backgroundColor: "#000000",
    width: "100%", // Take the full width of the parent (container)
    height: "80%", // Take a percentage of the viewport height (adjust as needed)
    maxWidth: "120%", // Limit to 90% of the screen width for mobile-first feel
    maxHeight: "120%", // Limit to 60% of the screen height
    marginBottom: 30,
  },
  backgroundGif: {
    position: "absolute",
    width: 480,
    bottom: "0%",
  },
  title: {
    paddingTop: 30,
    fontSize: 40,
    fontWeight: "bold",
    color: "#FF4B0D",
    marginBottom: 20,
    textAlign: "center",
  },
  welcome: {
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#000000",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#FF4B0D",
    marginVertical: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#FF4B0D",
    fontSize: 18,
    fontWeight: "bold",
  },
  response: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
});