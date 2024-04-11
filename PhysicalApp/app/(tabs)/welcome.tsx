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
            {/* App name */}
            <Text style={styles.appName}>Welcome to Smile & Sweat</Text>

            {/* Short slogan */}
            <Text style={styles.slogan}>
                Smile More, Sweat Better!
            </Text>

            {/* Image taking 1/2 of the page */}
            <Image
                style={styles.image}
                source={require("../../assets/images/logo.png")}
            />

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
        fontSize: SIZES.xxLarge,
        fontFamily: FONT.bold,
        marginBottom: 10,
        textAlign: "center",
    },
    slogan: {
        fontSize: SIZES.xLarge,
        fontFamily: FONT.regular,
        textAlign: "center",
        marginBottom: 20,
    },
    image: {
        resizeMode: "cover",
        height: "30%",
        marginBottom: 20,
    },
    button: {
        backgroundColor: COLORS.primary,
        width: "60%",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 22,
        position: "relative",
        bottom: -110,
    },
    buttonText: {
        color: '#fff',
        textAlign: "center",
        fontSize: SIZES.medium,
        fontFamily: FONT.bold,
    },
});
