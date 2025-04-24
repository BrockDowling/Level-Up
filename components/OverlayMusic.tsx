import { ReactNode, useEffect, useRef } from "react";
import { Audio } from "expo-av";
import { TouchableWithoutFeedback, View } from "react-native";

interface OverlayProps {
  children: ReactNode;
}

const OverlayMusic = ({ children }: OverlayProps) => {
  const soundRef = useRef<Audio.Sound | null>(null);
  const hasInteractedRef = useRef(false);

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/music/Rest Easy.mp3"),
        { isLooping: true, volume: 0.5 }
      );
      soundRef.current = sound;
    };

    loadSound();

    return () => {
      soundRef.current?.unloadAsync();
    };
  }, []);

  const handleFirstTouch = async () => {
    if (hasInteractedRef.current) return;
    hasInteractedRef.current = true;

    try {
      await soundRef.current?.playAsync();
    } catch (err) {
      console.log("Failed to play audio:", err);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={handleFirstTouch}
      onTouchStart={handleFirstTouch}
    >
      <View style={{ flex: 1 }}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default OverlayMusic;
