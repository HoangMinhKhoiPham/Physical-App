import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import {COLORS, FONT, SIZES} from "../constants";
import { Link } from "expo-router";
import {fontFamily} from "nativewind/dist/postcss/to-react-native/properties/font-family";

export type BtnProps = {
  content: string;
  handlePress: (event: GestureResponderEvent) => void;
  isPrimary: boolean;
  email: string;
  validated: boolean;
};

const LogInBtn: React.FC<BtnProps> = ({
  content,
  handlePress,
  isPrimary,
  email,
  validated,
}) => {
  return (
    <Link
      href={
        validated
          ? email
            ? `/home(tabs)/Home/${email}`
            : "/(tabs)/register"
          : "/(tabs)"
      }
      asChild
    >
      <TouchableOpacity onPress={handlePress} style={styles(isPrimary).btn}>
        <Text
          style={{
            color: isPrimary ? "white" : COLORS.text,
            fontFamily: FONT.regular,
            fontSize: SIZES.medium,
          }}
        >
          {content}
        </Text>
      </TouchableOpacity>
    </Link>
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
