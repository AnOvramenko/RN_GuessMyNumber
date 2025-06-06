import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../shared/tokens";

interface ScreenTitleProps {
  children: React.ReactNode;
}

const ScreenTitle = ({ children }: ScreenTitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default ScreenTitle;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    padding: 12,
    color: Colors.white,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.white,
  },
});
