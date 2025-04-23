import { StyleSheet, Dimensions, Platform } from "react-native";

// Get the window dimensions dynamically
const { width, height } = Dimensions.get("window");

// Utility function to calculate font size based on screen width
const scaleFont = (size: number) => (width / 500) * size;

export const styles = StyleSheet.create({
  container: {
    fontFamily: Platform.select({
      ios: 'Bungee',
      android: 'Bungee',
      web: "'Bungee', sans-serif"
    }),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 20,
  },
  gameWindow: {
    alignItems: "center",
    backgroundColor: "#000000",
    width: width,
    height: height * 0.5,
  },
  backgroundGif: {
    position: "absolute",
    width: 480,
    bottom: "0%",
  },
  title: {
    fontFamily: Platform.select({
      ios: 'Bungee',
      android: 'Bungee',
      web: "'Bungee', sans-serif"
    }),
    fontSize: scaleFont(40),
    fontWeight: "bold",
    color: "#FF4B0D",
    marginBottom: 20,
    textAlign: "center",
  },
  welcome: {
    fontFamily: Platform.select({
      ios: 'Karla',
      android: 'Karla',
      web: "'Karla', sans-serif"
    }),
    fontSize: scaleFont(20),
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

    marginBottom: 20,
  },
  buttonText: {
    fontFamily: Platform.select({
      ios: 'Karla',
      android: 'Karla',
      web: "'Karla', sans-serif"
    }),
    textAlign: "center",
    color: "#FF4B0D",
    fontSize: scaleFont(18),
    fontWeight: "bold",
  },
  response: {
    fontFamily: Platform.select({
      ios: 'Karla',
      android: 'Karla',
      web: "'Karla', sans-serif"
    }),
    fontSize: scaleFont(18),
    color: '#FFFFFF',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  board: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 100,
    height: 100,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#333",
  },
  cellText: {
    fontSize: 32,
    fontWeight: "bold",
  },
});