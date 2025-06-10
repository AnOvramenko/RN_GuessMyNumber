import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import ScreenTitle from "../components/ui/ScreenTitle";
import { Colors } from "../shared/tokens";

interface GameOverScreenProps {
  restart: () => void;
  roundsNumber: number;
  userNumber: number;
}

const deviceWidth = Dimensions.get("window").width;

const GameOverScreen = ({
  restart,
  roundsNumber,
  userNumber,
}: GameOverScreenProps) => {
  const { width } = useWindowDimensions();

  let content = (
    <>
        <View
          style={[
            styles.imageContainer,
            { height: 300, width: 300, borderRadius: 150 },
          ]}
        >
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlightText}>{userNumber}</Text>!
        </Text>
    </>
  );

  if (width > 420) {
    content = (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "70%",
        }}
      >
        <View
          style={[
            styles.imageContainer,
            { height: 200, width: 200, borderRadius: 100, margin: 24 },
          ]}
        >
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.summaryText, { marginBottom: 0 }]}>
            Your phone needed{" "}
            <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highlightText}>{userNumber}</Text>!
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.rootScreen}>
      <ScreenTitle>GAME OVER!</ScreenTitle>
      {content}
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
    // height: deviceWidth < 400 ? 200 : 300,
    // width: deviceWidth < 400 ? 200 : 300,
    // borderRadius: deviceWidth < 400 ? 100 : 150,
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
