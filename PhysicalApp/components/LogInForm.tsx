import React, { useEffect, useState } from "react";
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
} from "react-native";
import { Text, TextInput } from "react-native";
import { View } from "@/components/Themed";
import LogInBtn from "./LogInBtn";
import { COLORS, FONT, SIZES } from "@/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface userData {
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  confirmedPassword: string;
}

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState<boolean>(false);

  const validate = async () => {
    if (
      (email == "tom@gmail.com" ||
        email == "dwayne@gmail.com" ||
        email == "jeff@gmail.com") &&
      password == "123123"
    ) {
      setValidated(true);
    } else {
      const token = await AsyncStorage.getItem("userData");
      if (token) {
        const userData: userData = JSON.parse(token);
        if (email === userData.email && password === userData.password) {
          setValidated(true);
        } else {
          setValidated(false);
        }
      }
    }
    await AsyncStorage.setItem("email", email);
  };
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
            color: COLORS.text,
            paddingTop: 10,
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
          gap: SIZES.medium,
          marginTop: SIZES.large,
          height: 110,
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
            value={email}
            onChange={(
              email: NativeSyntheticEvent<TextInputChangeEventData>
            ) => {
              setEmail(email.nativeEvent.text);
            }}
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
            placeholder="Password"
            value={password}
            onChange={(
              password: NativeSyntheticEvent<TextInputChangeEventData>
            ) => {
              setPassword(password.nativeEvent.text);
            }}
            secureTextEntry={true}
            style={styles.userInput}
          />
        </View>
      </View>

      <View>
        <Text
          style={{
            fontFamily: FONT.regular,
            fontSize: SIZES.medium,
            color: COLORS.primary,
            textAlign: "right",
            padding: 10,
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
          <LogInBtn
            content="Log In"
            handlePress={validate}
            isPrimary={true}
            email={email}
            validated={validated}
          />
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
            email=""
            validated={true}
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
    color: COLORS.text,
  },
});

export default LogInForm;
