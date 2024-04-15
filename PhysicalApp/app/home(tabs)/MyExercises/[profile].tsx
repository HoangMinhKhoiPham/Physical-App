import { Text, View } from "@/components/Themed";
import { COLORS, FONT, SIZES } from "@/constants";
import CurrentExercise from "@/components/CurrentExercise";
import React from "react";
import { Image, StyleSheet, TextInput } from "react-native";
import {
  Exercises,
  UserInformation,
  userProfiles,
} from "@/constants/UserProfiles";
import { useLocalSearchParams } from "expo-router";

export default function MyExercises() {
  const { profile } = useLocalSearchParams();
  const persona: UserInformation | undefined = userProfiles.find(
    (i) => i.email == profile
  );
  const exercises: Exercises[] | undefined = persona?.exercises;
  console.log(exercises);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 50,
      }}
    >
      <Text style={{ fontSize: SIZES.xxxLarge, fontFamily: FONT.regular }}>
        My Exercises
      </Text>
      <View
        style={{
          marginVertical: 10,
        }}
      />
      <View style={styles.searchBar}>
        <Image
          source={require("../../../assets/images/magnifying-glass-solid.png")}
          style={{
            width: 18,
            height: 18,
            marginHorizontal: 10,
            marginVertical: 7,
          }}
        />
        <TextInput
          placeholder={"Search"}
          style={{ color: COLORS.text }}
        ></TextInput>
      </View>

      <View style={styles.container}>
        <CurrentExercise data={exercises ? exercises : []}></CurrentExercise>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 20,
    marginTop: 20,
    marginBottom: 70,
  },
  searchBar: {
    width: 360,
    height: 35,
    backgroundColor: COLORS.secondary,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 22,
    marginBottom: 5,
    flexDirection: "row",
    fontFamily: FONT.regular,
  },
});
