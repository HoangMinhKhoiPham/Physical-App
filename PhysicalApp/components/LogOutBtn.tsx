import React from "react";
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    GestureResponderEvent,
} from "react-native";
import {COLORS, FONT, SIZES} from "../constants";
import { Link } from "expo-router";
import {bold} from "colorette";

export type BtnProps = {
    content: string;
    handlePress: (event: GestureResponderEvent) => void;
    isPrimary: boolean;
    email: string;
    validated: boolean;
};

const LogOutBtn: React.FC<BtnProps> = ({
                                          content,
                                          handlePress,
                                          isPrimary,
                                          validated,
                                      }) => {
    return (
        <Link
            href={
                validated
                    ?  "/(tabs)/welcome"
                    : "/home(tabs)/Explore"
            }
            asChild
        >
            <TouchableOpacity onPress={handlePress} style={styles(isPrimary).btn}>
                <Text
                    style={{
                        color: isPrimary ? "white" : COLORS.text,
                        fontSize: SIZES.medium, fontWeight: "bold"
                    }}
                >
                    {content}
                </Text>
            </TouchableOpacity>
        </Link>
    );
};

const styles = (isPrimary: boolean) =>
    StyleSheet.create({
        btn: {
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between", // Add space between elements
            width: 102,
            paddingHorizontal: 20,
            backgroundColor: isPrimary ? COLORS.primary : COLORS.secondary,
            borderRadius: SIZES.large,
            marginLeft: 2,
            padding: 10,
        },
    });

export default LogOutBtn;
