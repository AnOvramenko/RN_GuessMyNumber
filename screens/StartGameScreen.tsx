import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Colors } from "../shared/tokens";
import ScreenTitle from "../components/ui/ScreenTitle";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

interface StartGameScreenProps {
  pickNumber: (num: number) => void;
}

const StartGameScreen = ({ pickNumber }: StartGameScreenProps) => {
  const [number, setNumber] = useState("");

  const onChangeNumber = (text: string) => {
    setNumber(text);
  };

  const resetInput = () => {
    setNumber("");
  };

  const confirmInput = () => {
    const chosenNumber = +number;

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 - 99.",
        [
          {
            text: "Ok",
            style: "destructive",
            onPress: resetInput,
          },
        ]
      );

      return;
    }

    pickNumber(chosenNumber);
  };

  return (
    <View style={styles.screen}>
      <View>
        <ScreenTitle>Choose Your Number</ScreenTitle>
      </View>

      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={number}
          onChangeText={onChangeNumber}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
      {/* </View> */}
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    marginTop: 100,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    width: 50,
    fontSize: 32,
    fontFamily: 'open-sans-bold',
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    marginVertical: 8,
    textAlign: "center",
  },
});
