import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FONT, SIZES } from "@/constants";
import { COLORS } from "@/constants";
import ProgressBar from "@/components/ProgressBar";
import { Exercises } from "@/constants/UserProfiles";

interface RecentActivityProps {
  exercise: Exercises | undefined;
}
const RecentActivity = (props: RecentActivityProps) => {
  const { exercise } = props;
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.exerciseTitle}>
          {exercise?.title ? exercise?.title : "Home Workout"}
        </Text>
        <View style={styles.level}>
          <Text style={styles.levelText}>
            {exercise?.level ? exercise.level : "Beginner"}
          </Text>
        </View>
      </View>
      <View style={styles.bottomRow}>
        <ProgressBar
          label={"Continue"}
          progress={exercise?.progress ? exercise.progress : 75}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: COLORS.secondary,
    borderRadius: 22,
    width: 380,
    paddingVertical: 8,
    paddingHorizontal: 15,
    gap: 4,
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
  bottomRow: {
    width: "40%",
  },
  exerciseTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.text,
    maxWidth: 230,
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
  },
  levelText: {
    color: "white",
    fontFamily: FONT.regular,
  },
});

export default RecentActivity;
