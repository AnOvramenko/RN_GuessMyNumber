import {
  Alert,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Colors } from "../shared/tokens";
import ScreenTitle from "../components/ui/ScreenTitle";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

interface GameScreenProps {
  userNumber: number;
  onGameOver: (num: number) => void;
}

const generateRandomNumber = (min: number, max: number, exclude: number) => {
  const rndNum = Math.floor(Math.random() * (max - min) + min);

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }: GameScreenProps) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const { width, height } = useWindowDimensions();

  const handleNextGuess = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that you wrong...", [
        { text: "Sorry...", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else if (direction === "greater") {
      minBoundary = currentGuess + 1;
    }

    const newRndNum = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNum);
    setGuessRounds((prevGuesses) => {
      return [newRndNum, ...prevGuesses];
    });
  };

  const guessRoundsListLength = guessRounds.length;
  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <InstructionText style={{ marginBottom: 24 }}>
          Higher or lower
        </InstructionText>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={handleNextGuess.bind(this, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={handleNextGuess.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 420) {
    content = (
      <>
        {/* <InstructionText style={{ marginBottom: 24 }}>
          Higher or lower
        </InstructionText> */}
          <View style={styles.buttonsContainerWide}>
            
            <View style={{ flex: 1 }}>
              <PrimaryButton onPress={handleNextGuess.bind(this, "lower")}>
                <Ionicons name="remove" size={24} color="white" />
              </PrimaryButton>
            </View>
        {/* <Card> */}

            <NumberContainer>{currentGuess}</NumberContainer>
        {/* </Card> */}

            <View style={{ flex: 1 }}>
              <PrimaryButton onPress={handleNextGuess.bind(this, "greater")}>
                <Ionicons name="add" size={24} color="white" />
              </PrimaryButton>
            </View>
          </View>
      </>
    );
  }

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  return (
    <View style={styles.screen}>
      <ScreenTitle>Opponent's Guess</ScreenTitle>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(guess) => (
            <GuessLogItem
              guess={guess.item}
              roundNumber={guessRoundsListLength - guess.index}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  buttonsContainerWide: { flexDirection: "row", alignItems: 'center' },
});
