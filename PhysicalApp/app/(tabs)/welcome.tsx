import React from "react";
import { StyleSheet, Image, Dimensions, Pressable } from "react-native";
import { Text, View } from "@/components/Themed";
import {COLORS, FONT, SIZES} from "../../constants";
import {useNavigation} from "expo-router";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            {/* Image taking 1/2 of the page */}
            <Image
                style={styles.image}
                source={require("../../assets/images/HomePageImage.png")}
            />

            {/* App name */}
            <Text style={styles.appName}>Smile & Sweat</Text>

            {/* Short slogan */}
            <Text style={styles.slogan}>
                Get fit, stay healthy, and smile while sweating!
            </Text>

            {/* Button to get started */}
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    appName: {
        fontSize: SIZES.xLarge,
        fontFamily: FONT.bold,
        marginBottom: 10,
    },
    slogan: {
        fontSize: SIZES.medium,
        fontFamily: FONT.regular,
        textAlign: "center",
        marginBottom: 20,
    },
    image: {
        width: windowWidth,
        height: windowHeight / 1.5,
        resizeMode: "cover",
        marginBottom: 20,
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: SIZES.medium,
        fontFamily: FONT.bold,
    },
});
