import React, {useState} from "react";
import { StyleSheet } from "react-native";
import { Text, TextInput } from "react-native";
import { View } from "@/components/Themed";
import LogInBtn from "./LogInBtn";
import { COLORS, FONT, SIZES } from "@/constants";
import {createUserWithEmailAndPassword} from "@firebase/auth";
import {auth} from "@/config/firebase";

const LogInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    // Container -> Wrapper -> Input
    <View>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            fontFamily: FONT.bold,
            fontSize: SIZES.large,
            color: COLORS.primary,
          }}
        >
          Login here
        </Text>
        <Text
          style={{
            fontFamily: FONT.regular,
            fontSize: SIZES.large,
            color: "black",
          }}
        >
          Welcome back you've been missed!
        </Text>
      </View>

      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          gap: SIZES.small,
          marginTop: SIZES.large,
          height: 100,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.secondary,
            marginRight: SIZES.small,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SIZES.medium,
            height: "100%",
            width: "100%",
          }}
        >
          <TextInput
            placeholder="Email"
            value=""
            onChange={() => {}}
            style={styles.userInput}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.secondary,
            marginRight: SIZES.small,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SIZES.medium,
            height: "100%",
            width: "100%",
          }}
        >
          <TextInput
            value="Password"
            onChange={() => {}}
            style={styles.userInput}
          />
        </View>
      </View>

      <View>
        <Text
          style={{
            fontFamily: FONT.regular,
            fontSize: SIZES.large,
            color: COLORS.tertiary,
            textAlign: "right",
          }}
        >
          Forgot your password?
        </Text>
      </View>

      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          gap: SIZES.small,
          marginTop: SIZES.large,
          height: 100,
        }}
      >
        <View
          style={{
            flex: 1,
            marginRight: SIZES.small,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SIZES.medium,
            height: "100%",
            width: "100%",
          }}
        >
          <LogInBtn content="Log In" handlePress={() => {}} isPrimary={true} />
        </View>
        <View
          style={{
            flex: 1,
            marginRight: SIZES.small,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SIZES.medium,
            height: "100%",
            width: "100%",
          }}
        >
          <LogInBtn
            content="Create new account"
            handlePress={() => {}}
            isPrimary={false}
          />
        </View>
      </View>

      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  userInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
});

export default LogInForm;
