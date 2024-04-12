import React from "react";
import {Text, TouchableOpacity, StyleSheet, View} from "react-native";
import {COLORS, FONT, SIZES} from "../constants";

interface ProgressBarProps {
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    const percentage = Math.round(progress * 100); // Calculate the percentage

    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center', // Center the percentage text vertically
            height: 30, // Adjust height to accommodate the percentage text
            width: '60%',
        }}>
            <View style={{
                flex: progress,
                backgroundColor: COLORS.primary,
                height: '100%', // Ensure the progress bar fills the entire height
                borderRadius: 5, // Add border radius to match the design
            }} />
            <View style={{
                flex: 1 - progress,
                backgroundColor: COLORS.text,
                height: '100%', // Ensure the progress bar fills the entire height
            }} />
            {/* Display the percentage text */}

            <Text style={{ marginLeft: 5 }}>{percentage}%</Text>
        </View>
    );
};

export default ProgressBar;


