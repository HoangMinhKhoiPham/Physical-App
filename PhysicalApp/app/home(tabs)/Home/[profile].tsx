import { Text, View } from "@/components/Themed";
import LogInForm from "@/components/LogInForm";
import { COLORS, FONT, SIZES } from "../../../constants";
import { FontAwesome } from "@expo/vector-icons";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import ProgressBar from "@/components/ProgressBar";
import PointBar from "@/components/PointBar";
import RecentActivity from "@/components/RecentActivity";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { UserInformation, userProfiles } from "@/constants/UserProfiles";

export default function Home() {
  const { profile } = useLocalSearchParams();
  const persona: UserInformation | undefined = userProfiles.find(
    (i) => i.email == profile
  );
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 50,
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <View>
          <Text style={styles.user}>Hi {persona?.fullName}!</Text>
        </View>
        <View style={styles.container}>
          <FontAwesome name="bolt" size={30} color="#597EFF" />
          <Text
            style={{
              fontSize: SIZES.xLarge,
              fontFamily: FONT.regular,
              color: COLORS.primary,
            }}
          >
            {persona?.streak}
          </Text>
        </View>
        <View style={styles.calendarContainer}>
          <View style={styles.calendarRow}>
            <Text style={styles.dayText}>MON</Text>
            <View style={styles.tickCircle}>
              <FontAwesome name="check" size={10} color="#FFFFFF" />
            </View>
          </View>
          <View style={styles.calendarRow}>
            <Text style={styles.dayText}>TUE</Text>
            <View style={styles.tickCircle}>
              <FontAwesome name="check" size={10} color="#FFFFFF" />
            </View>
          </View>
          <View style={styles.calendarRow}>
            <Text style={styles.dayText}>WED</Text>
            <View style={styles.tickCircle}>
              <FontAwesome name="check" size={10} color="#FFFFFF" />
            </View>
          </View>
          <View style={styles.calendarRow}>
            <Text style={styles.dayText}>THU</Text>
            <View style={styles.undoneTickCircle}></View>
          </View>
          <View style={styles.calendarRow}>
            <Text style={styles.dayText}>FRI</Text>
            <View style={styles.undoneTickCircle}></View>
          </View>
          <View style={styles.calendarRow}>
            <Text style={styles.dayText}>SAT</Text>
            <View style={styles.undoneTickCircle}></View>
          </View>
          <View style={styles.calendarRow}>
            <Text style={styles.dayText}>SUN</Text>
            <View style={styles.undoneTickCircle}></View>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "flex-start",
          maxWidth: 400,
          paddingHorizontal: 15,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.xxLarge,
            fontFamily: FONT.regular,
            marginBottom: 15,
          }}
        >
          My Points
        </Text>
        <View style={styles.pointsContainer}>
          <PointBar value={8000} />
        </View>

        <Text
          style={{
            fontSize: SIZES.xxLarge,
            fontFamily: FONT.regular,
            marginTop: 25,
            marginBottom: 15,
          }}
        >
          Most Recent Activity
        </Text>
        <View style={styles.recentContainer}>
          <RecentActivity />
        </View>

        <Text
          style={{
            fontSize: SIZES.xxLarge,
            fontFamily: FONT.regular,
            marginVertical: 20,
          }}
        >
          My Metrics
        </Text>
        <View style={styles.metricContainer}>
          <View style={styles.metricRectangle}>
            <Text
              style={{
                color: "#4D506F",
                fontFamily: FONT.regular,
                fontSize: SIZES.large,
              }}
            >
              {persona?.calories}
            </Text>
            <Text style={{ color: "#4D506F", fontFamily: FONT.regular }}>
              kcal
            </Text>
            <Image
              source={require("../../../assets/images/fire.png")}
              style={{
                width: 30,
                height: 50,
                borderRadius: 50,
                alignItems: "center",
              }}
            />
          </View>
          <View style={styles.metricRectangle}>
            <Text
              style={{
                color: "#4D506F",
                fontFamily: FONT.regular,
                fontSize: SIZES.large,
              }}
            >
              {persona?.time}
            </Text>
            <Text style={{ color: "#4D506F", fontFamily: FONT.regular }}>
              min
            </Text>
            <Image
              source={require("../../../assets/images/lightning.png")}
              style={{
                width: 30,
                height: 40,
                borderRadius: 50,
                alignItems: "center",
              }}
            />
          </View>
        </View>
        <View style={styles.metricContainer}>
          <View style={styles.metricRectangle}>
            <Text
              style={{
                color: "#4D506F",
                fontFamily: FONT.regular,
                fontSize: SIZES.large,
              }}
            >
              {persona?.distance}
            </Text>
            <Text style={{ color: "#4D506F", fontFamily: FONT.regular }}>
              km
            </Text>
            <Image
              source={require("../../../assets/images/person-walking.png")}
              style={{
                width: 30,
                height: 40,
                borderRadius: 50,
                alignItems: "center",
              }}
            />
          </View>
          <View style={styles.metricRectangle}>
            <Text
              style={{
                color: "#4D506F",
                fontFamily: FONT.regular,
                fontSize: SIZES.large,
              }}
            >
              {persona?.points}
            </Text>
            <Text style={{ color: "#4D506F", fontFamily: FONT.regular }}>
              pts
            </Text>
            <Image
              source={require("../../../assets/images/coins.png")}
              style={{
                width: 35,
                height: 40,
                borderRadius: 50,
                alignItems: "center",
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    width: 80,
    height: 42,
    marginTop: 15,
    paddingHorizontal: 10,
    borderRadius: 22,
    backgroundColor: COLORS.secondary,
  },
  goalContainer: {
    width: 154,
    height: 42,
    backgroundColor: COLORS.secondary,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    margin: 5,
  },
  metricContainer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    gap: 20,
    paddingBottom: 20,
  },
  metricRectangle: {
    width: 140,
    height: 90,
    backgroundColor: COLORS.secondary,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "black",
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  calendarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  calendarRow: {
    alignItems: "center",
    marginLeft: 10,
  },
  dayText: {
    color: "#4D506F",
    fontFamily: FONT.regular,
    marginRight: 10,
  },
  tickCircle: {
    width: 20,
    height: 20,
    marginTop: 5,
    marginRight: 10,
    borderRadius: 15,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  undoneTickCircle: {
    width: 20,
    height: 20,
    marginTop: 5,
    marginRight: 10,
    borderRadius: 15,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
  },
  pointsContainer: {
    alignSelf: "center",
  },
  recentContainer: {
    alignSelf: "center",
  },
  sectionTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.regular,
    marginBottom: 10,
  },
  user: {
    fontSize: SIZES.xxxLarge,
    fontFamily: FONT.regular,
    textAlign: "center",
  },
});
