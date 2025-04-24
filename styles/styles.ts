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
  // New styles for Tic-Tac-Toe
  ticTacToeBoard: {
    backgroundColor: "#1E1E1E", // Dark background for contrast
    padding: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#FF4B0D",
    marginVertical: 20,
  },
  ticTacToeCell: {
    width: Math.min(width * 0.25, 100), // Responsive cell size
    height: Math.min(width * 0.25, 100),
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#FF4B0D",
  },
  ticTacToeCellFilled: {
    backgroundColor: "#2A2A2A", // Darker when filled
  },
  ticTacToeCellText: {
    fontFamily: Platform.select({
      ios: "Bungee",
      android: "Bungee",
      web: "'Bungee', sans-serif",
    }),
    fontSize: scaleFont(40),
    fontWeight: "bold",
  },
  ticTacToeX: {
    color: "#FF4B0D", // Red for X
  },
  ticTacToeO: {
    color: "#FFFFFF", // White for O
  },
  gameStatus: {
    fontFamily: Platform.select({
      ios: "Karla",
      android: "Karla",
      web: "'Karla', sans-serif",
    }),
    fontSize: scaleFont(24),
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
  },
  hangmanBoard: {
    backgroundColor: "#1E1E1E",
    padding: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#FF4B0D",
    marginVertical: 20,
    alignItems: "center",
  },
  hangmanArt: {
    fontFamily: "VT323",
    fontSize: scaleFont(14),
    color: "#FFFFFF",
    textAlign: "left",
    lineHeight: scaleFont(16),
    includeFontPadding: false,
    backgroundColor: "#2A2A2A",
    padding: 10,
    borderRadius: 5,
  },
  hangmanStatus: {
    fontFamily: Platform.select({
      ios: "Karla",
      android: "Karla",
      web: "'Karla', sans-serif",
    }),
    fontSize: scaleFont(18),
    color: "#FFFFFF",
    marginVertical: 10,
  },
  hangmanWord: {
    fontFamily: "VT323",
    fontSize: scaleFont(30),
    color: "#FF4B0D",
    textAlign: "center",
    marginVertical: 15,
  },
  hangmanLetterGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: width * 0.8,
  },
  hangmanLetterButton: {
    width: scaleFont(40),
    height: scaleFont(40),
    margin: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#FF4B0D",
    justifyContent: "center",
    alignItems: "center",
  },
  hangmanLetterButtonDisabled: {
    backgroundColor: "#2A2A2A",
    opacity: 0.5,
  },
  hangmanLetterText: {
    fontFamily: Platform.select({
      ios: "Karla",
      android: "Karla",
      web: "'Karla', sans-serif",
    }),
    fontSize: scaleFont(20),
    color: "#FF4B0D",
    fontWeight: "bold",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  winTitle: {
    fontFamily: Platform.select({
      ios: "Bungee",
      android: "Bungee",
      web: "'Bungee', sans-serif",
    }),
    fontSize: scaleFont(48),
    fontWeight: "bold",
    color: "#FF4B0D",
    textAlign: "center",
    marginVertical: 30,
  },
  creditsContainer: {
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#FF4B0D",
    width: width * 0.9,
  },
  creditsSectionTitle: {
    fontFamily: Platform.select({
      ios: "Bungee",
      android: "Bungee",
      web: "'Bungee', sans-serif",
    }),
    fontSize: scaleFont(24),
    color: "#FF4B0D",
    marginVertical: 15,
    textAlign: "center",
  },
  creditsText: {
    fontFamily: Platform.select({
      ios: "Karla",
      android: "Karla",
      web: "'Karla', sans-serif",
    }),
    fontSize: scaleFont(20),
    color: "#FFFFFF",
    marginVertical: 10,
    textAlign: "center",
  }
});