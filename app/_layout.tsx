// app/_layout.tsx
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts
        await Font.loadAsync({
          'Orbitron': require('../assets/fonts/Nabla-Regular-VariableFont_EDPT.ttf'),
          'Doto': require('../assets/fonts/Doto-Reg.ttf')
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return <Stack />;
}