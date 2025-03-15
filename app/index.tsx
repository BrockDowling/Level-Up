import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text 
        style={{
          fontFamily: "Nabla",
          fontSize: 56,
          textAlign: "center",
          textShadowOffset: { width: 0, height: 0 }
        }}
      >
        LEVEL UP
      </Text>
      <Text 
        style={{
          fontFamily: "Doto",
          color: "gold",
          fontSize: 26,
          marginTop: 20,
        }}
      >
        Your Life as an RPG
      </Text>
    </View>
  );
}