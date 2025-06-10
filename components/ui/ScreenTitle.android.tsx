import { StyleSheet, Text, Platform } from "react-native";
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
    fontFamily: "open-sans-bold",
    fontSize: 24,
    padding: 12,
    color: Colors.white,
    textAlign: "center",
    // borderWidth: Platform.OS === 'android' ? 0 : 2,
    // borderWidth: Platform.select({android: 0, ios: 2 }),
    borderWidth: 0,
    borderColor: Colors.white,
    maxWidth: "80%",
    width: 300,
  },
});
