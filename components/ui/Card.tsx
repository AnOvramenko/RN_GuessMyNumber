import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../shared/tokens";

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <View style={styles.cardContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    padding: 16,
    marginTop: 24,
    marginHorizontal: 16,

    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4,

    //IOS specific props for shadows
    // shadowColor: '#aaa',
    // shadowOffset: {width: 4, height: 4},
    // shadowRadius: 6,
    // shadowOpacity: 0.2,
  },
});
