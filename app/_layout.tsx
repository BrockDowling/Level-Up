import { useEffect } from 'react';
import { Stack } from "expo-router";
import OverlayMusic from "../components/OverlayMusic";
import * as Font from 'expo-font';

export default function Layout() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Bungee': require('../assets/fonts/Bungee.ttf'),
        'Karla': require('../assets/fonts/Karla.ttf'),
        'VT323': require('../assets/fonts/VT323.ttf'),
      });
    }
    loadFonts();
  }, []);

  return (
    <OverlayMusic>
      <Stack
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: "#121212" },
          headerTintColor: "#FF4B0D",
          headerTitle: "",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: 'Bungee',
            fontSize: 20,
            fontWeight: "bold",
          },
          headerBackTitle: "Back",
          contentStyle: { backgroundColor: "#121212" },
        }}
      />
    </OverlayMusic>
  );
}
