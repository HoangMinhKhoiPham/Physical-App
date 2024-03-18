import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

export type BtnProps = {
    content: string;
    handlePress: () => void;
    isPrimary: boolean;
};

const RegisterBtn: React.FC<BtnProps> = ({ content, handlePress, isPrimary }) => {
    return (
        <TouchableOpacity onPress={handlePress} style={styles(isPrimary).btn}>
            <Text style={{ color: isPrimary ? COLORS.secondary : COLORS.black }}>
                {content}
            </Text>
        </TouchableOpacity>
    );
};

const styles = (isPrimary: boolean) =>
    StyleSheet.create({
        btn: {
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            paddingHorizontal: SIZES.xLarge,
            backgroundColor: isPrimary ? COLORS.primary : COLORS.secondary,
            borderRadius: SIZES.medium,
            marginLeft: 2,
            padding: 10,
        },
    });

export default RegisterBtn;
