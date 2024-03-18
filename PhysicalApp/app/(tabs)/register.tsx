import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { FONT, SIZES } from "../../constants";
import {RegisterForm} from "@/components/RegisterForm";

export default function registerScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: SIZES.xxLarge, fontFamily: FONT.bold }}>
        Smile & Sweat
      </Text>
      <View
        style={{
          marginVertical: 30,
          height: 1,
          width: "80%",
        }}
      />
    <RegisterForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
