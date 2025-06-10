import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../../shared/tokens";

interface CardProps {
  children: React.ReactNode;
}

// const deviceWidth = Dimensions.get('window').width;

const Card = ({ children }: CardProps) => {
  const { height } = useWindowDimensions();
  const marginTop = height < 420 ? 12 : 24;

  return <View style={[styles.cardContainer, { marginTop }]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    padding: 16,
    // marginTop: deviceWidth < 400 ? 12 : 24,
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
