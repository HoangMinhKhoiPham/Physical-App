import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {COLORS, FONT, SIZES} from "@/constants";

interface ProgressBarProps {
    label: string;
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, progress }) => {
    return (
        <View style={styles.progressBarContainer}>
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>{label}</Text>
                <Text style={styles.progressText}>{`${progress}%`}</Text>
            </View>
            <View style={styles.progressBar}>
                <View style={[styles.progressIndicator, { width: `${progress}%` }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    progressBarContainer: {
        marginBottom: 5,
    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    labelText: {
        fontSize: 16,
        fontFamily: FONT.bold,
        color: COLORS.primary,
    },
    progressText: {
        fontSize: SIZES.medium,
        fontFamily: FONT.bold,
        color: COLORS.primary,
    },
    progressBar: {
        width: 150,
        height: 7,
        backgroundColor: '#B0B0B0',
        borderRadius: 3,
    },
    progressIndicator: {
        height: '100%',
        backgroundColor: COLORS.primary,
        borderRadius: 3,
    },
});

export default ProgressBar;
