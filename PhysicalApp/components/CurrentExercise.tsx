import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { COLORS, FONT, SIZES } from "@/constants";
import ProgressBar from "@/components/ProgressBar";
import { Exercises } from "@/constants/UserProfiles";
export type CurrentExerciseProps = {
  data: Exercises[];
};
const CurrentExercise = (props: CurrentExerciseProps) => {
  const { data } = props;
  return (
    <ScrollView style={styles.scrollView}>
      {data?.map((item, index) => (
        <View key={index} style={styles.container}>
          <View style={styles.topRow}>
            <Text style={styles.exerciseTitle}>{item.title}</Text>
          </View>
          <View style={styles.bottomRow}>
            <View style={styles.leftBottomRow}>
              <View style={styles.level}>
                <Text style={styles.levelText}>{item.level}</Text>
              </View>
              <View style={styles.description}>
                <Text style={styles.descriptionText}>
                  {item.nbExercises} exercises
                </Text>
                <Text style={styles.descriptionText}>
                  {item.nbPoints} points
                </Text>
                <Text style={styles.descriptionText}>
                  {item.duration} minutes
                </Text>
              </View>
              <ProgressBar
                label={item.text}
                progress={item.progress}
              ></ProgressBar>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={
                  item.image
                    ? item.image
                    : require("../assets/images/chest&abdominal.png")
                }
                style={styles.mainImage}
              />
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    width: 380,
    height: 195,
    marginBottom: 20,
    backgroundColor: COLORS.secondary,
    borderRadius: 22,
    paddingHorizontal: 15,
    paddingVertical: 15,
    shadowColor: "black",
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  level: {
    width: 115,
    height: 30,
    backgroundColor: "rgba(89, 126, 255, 0.75)",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  levelText: {
    color: "white",
    fontFamily: FONT.regular,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftBottomRow: {
    flexDirection: "column",
  },
  description: {
    marginTop: 6,
    marginBottom: 10,
    flexWrap: "wrap",
  },
  descriptionText: {
    color: COLORS.text,
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
  },
  exerciseTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.text,
  },
  addListButton: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.primary,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    marginTop: -5,
  },
  imageContainer: {
    position: "relative",
  },
  mainImage: {
    width: 160,
    height: 160,
    resizeMode: "cover",
    objectFit: "contain",
  },
  smallerImage: {
    width: 30,
    height: 30,
    resizeMode: "cover",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: COLORS.text,
    marginRight: 35,
    marginBottom: 5,
  },
});

export default CurrentExercise;
