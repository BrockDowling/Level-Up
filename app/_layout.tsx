import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#121212" },
        headerTintColor: "#FF4B0D",
        headerTitle: "",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
        },
        headerBackTitle: "Back",
        contentStyle: { backgroundColor: "#121212" }
      }}
    />
  );
}