import { ReactNode, useEffect, useRef } from "react";
import { Audio } from "expo-av";
import { TouchableWithoutFeedback, View } from "react-native";

interface OverlayProps {
  children: ReactNode;
  isInMinigame: boolean;
}

const OverlayMusic = ({ children, isInMinigame=false}: OverlayProps) => {
  const restEasyRef = useRef<Audio.Sound | null>(null);
  const minigameRef = useRef<Audio.Sound | null>(null);
  const hasInteractedRef = useRef(false);

  useEffect(() => {
    const loadSounds = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/music/Rest Easy.mp3"),
        { isLooping: true, volume: 0.5 }
      );
      restEasyRef.current = sound;

      const { sound: minigameMusic } = await Audio.Sound.createAsync(
        require("../assets/music/Aha! A Game!.mp3"),
        { isLooping: true, volume: 0.5 }
      );
      minigameRef.current = minigameMusic;
    };

    loadSounds();

    return () => {
      restEasyRef.current?.unloadAsync();
      minigameRef.current?.unloadAsync();
    };
  }, []);

  useEffect(() => {
    if (!hasInteractedRef.current) return;
  
    const swapMusic = async () => {
      if (isInMinigame) {
        if (restEasyRef.current) {
          const status = await restEasyRef.current.getStatusAsync();
          if (status.isLoaded && status.isPlaying) {
            await restEasyRef.current.stopAsync();
          }
        }
  
        if (minigameRef.current) {
          const status = await minigameRef.current.getStatusAsync();
          if (status.isLoaded && !status.isPlaying) {
            await minigameRef.current.playAsync();
          }
        }
      } else {
        if (minigameRef.current) {
          const status = await minigameRef.current.getStatusAsync();
          if (status.isLoaded && status.isPlaying) {
            await minigameRef.current.stopAsync();
          }
        }
  
        if (restEasyRef.current) {
          const status = await restEasyRef.current.getStatusAsync();
          if (status.isLoaded && !status.isPlaying) {
            await restEasyRef.current.playAsync();
          }
        }
      }
    };
  
    swapMusic();
  }, [isInMinigame]);
  
  

  const handleFirstTouch = async () => {
    if (hasInteractedRef.current) return;
    hasInteractedRef.current = true;
  
    try {
      const soundToPlay = isInMinigame ? minigameRef.current : restEasyRef.current;
      const status = await soundToPlay?.getStatusAsync();
  
      if (status?.isLoaded && !status.isPlaying) {
        await soundToPlay?.playAsync();
      }
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
