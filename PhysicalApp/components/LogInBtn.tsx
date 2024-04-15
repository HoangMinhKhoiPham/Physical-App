import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { COLORS, SIZES } from "../constants";
import { Link } from "expo-router";

export type BtnProps = {
  content: string;
  handlePress: (event: GestureResponderEvent) => void;
  isPrimary: boolean;
  email: string;
};

const LogInBtn: React.FC<BtnProps> = ({
  content,
  handlePress,
  isPrimary,
  email,
}) => {
  return (
    <Link
      href={email ? `/home(tabs)/Profile/${email}` : "/(tabs)/register"}
      asChild
    >
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
