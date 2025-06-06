import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../shared/tokens";

interface NumberContainerProps {
  children: React.ReactNode;
}

const NumberContainer = ({ children }: NumberContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 32,
    fontFamily: 'open-sans-bold',
  },
});
