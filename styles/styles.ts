import { StyleSheet } from "react-native";

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
    backgroundColor: "#ffffff",
    borderRadius: 30,
    maxWidth: 500,
    height: "75%",
    width: "100%",
    marginBottom: 30,
  },
  backgroundGif: {
    position: 'absolute',
    width: 480,
    bottom: '0%',
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
});