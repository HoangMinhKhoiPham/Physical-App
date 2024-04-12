import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { COLORS, FONT, SIZES } from "../constants";
import { white } from "colorette";

export type BtnProps = {
  content: string;
  handlePress: (event: GestureResponderEvent) => void;
  isPrimary: boolean;
};

const LogInBtn: React.FC<BtnProps> = ({ content, handlePress, isPrimary }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles(isPrimary).btn}>
      <Text
        style={{
          color: isPrimary ? "white" : COLORS.text,
          fontSize: SIZES.medium,
        }}
      >
        {content}
      </Text>
    </TouchableOpacity>
  );
};

const styles = (isPrimary: boolean) =>
  StyleSheet.create({
    btn: {
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      paddingHorizontal: SIZES.xLarge,
      backgroundColor: isPrimary ? COLORS.primary : COLORS.secondary,
      borderRadius: SIZES.medium,
      marginLeft: 2,
      padding: 10,
    },
  });

export default LogInBtn;
