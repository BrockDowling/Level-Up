import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "../styles/styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={onPress}
      {...rest}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};