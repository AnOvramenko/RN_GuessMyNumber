import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";
import { Colors } from "../../shared/tokens";

interface InstructionTextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const InstructionText = ({children, style} : InstructionTextProps) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});
