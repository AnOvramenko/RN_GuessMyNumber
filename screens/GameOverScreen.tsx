import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import ScreenTitle from "../components/ui/ScreenTitle";
import { Colors } from "../shared/tokens";

interface GameOverScreenProps {
  restart: () => void;
  roundsNumber: number;
  userNumber: number;
}

const GameOverScreen = ({
  restart,
  roundsNumber,
  userNumber,
}: GameOverScreenProps) => {
  return (
    <View style={styles.rootScreen}>
      <ScreenTitle>GAME OVER!</ScreenTitle>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess
        the number <Text style={styles.highlightText}>{userNumber}</Text>!
      </Text>

      <View style={{ alignSelf: "stretch" }}>
        <PrimaryButton onPress={restart}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    height: 300,
    width: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 36,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
