import { Text, View } from "@/components/Themed";
import { COLORS, FONT, SIZES } from "@/constants";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React, {useEffect, useState} from "react";
import { useLocalSearchParams } from "expo-router";
import { UserInformation, userProfiles } from "@/constants/UserProfiles";
import LogOutBtn from "@/components/LogOutBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile() {
  const { profile } = useLocalSearchParams();

  const persona: UserInformation | undefined = userProfiles.find(
    (i) => i.email == profile
  );
    const [validated, setValidated] = useState<boolean>(true);

    const validate = async () => {
            setValidated(false);
            await AsyncStorage.clear();
    };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          paddingTop: 50,
          paddingBottom: 30,
        }}
      >
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            }}>
          <Text style={{ fontSize: SIZES.xxxLarge, fontFamily: FONT.regular , marginLeft: 135, marginRight: 30}}>
            Profile
          </Text>
            <LogOutBtn content={"Log Out"} handlePress={validate} isPrimary={true} validated={validated}/>
        </View>
        <Image
          source={
            persona?.imageUrl
              ? persona?.imageUrl
              : require("../../../assets/images/Avatar.png")
          }
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            alignItems: "center",
            marginBottom: 12,
            marginTop: 8,
          }}
        />
        <View style={styles.container}>
          <Text style={{ fontSize: SIZES.xxLarge, fontFamily: FONT.bold }}>
            {persona?.fullName}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
              marginLeft: 10,
            }}
          >
            <View style={styles.rectangle}>
              <FontAwesome
                name="bolt"
                size={30}
                color="#597EFF"
                style={{ marginRight: 5 }}
              />
              <Text
                style={{
                  fontSize: SIZES.xLarge,
                  fontFamily: FONT.regular,
                  color: "#597EFF",
                }}
              >
                {persona?.streak}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ maxWidth: 400, paddingHorizontal: 15 }}>
        <Text
          style={{
            fontSize: SIZES.xxLarge,
            fontFamily: FONT.regular,
            marginBottom: 10,
          }}
        >
          My Goals
        </Text>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: 10,
          }}
        >
          {persona?.goals.map((goal, index) => {
            return (
              <View key={index} style={styles.goalContainer}>
                <Text style={{ color: "#4D506F", fontFamily: FONT.regular }}>
                  {goal}
                </Text>
              </View>
            );
          })}
          <TouchableOpacity style={styles.addButton}>
            <FontAwesome name="plus" size={15} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.separator}></View>

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
  rectangle: {
    width: 80,
    height: 42,
    backgroundColor: COLORS.secondary,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  goalContainer: {
    padding: 15,
    backgroundColor: COLORS.secondary,
    borderRadius: 22,
    justifyContent: "center",
    alignSelf: "center",
  },
  addButton: {
    width: 80,
    height: 47,
    backgroundColor: COLORS.primary,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: FONT.bold,
  },
  metricContainer: {
    flexDirection: "row",
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
  separator: {
    height: 2,
    width: 280,
    marginTop: 60,
    marginBottom: 10,
    backgroundColor: "#4D506F",
    alignSelf: "center",
  },
});
