import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {FONT, SIZES} from "@/constants";
import {COLORS} from "@/constants";
import ProgressBar from "@/components/ProgressBar";

const RecentActivity = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <Text style={styles.exerciseTitle}>Home Workout</Text>
                <View style={styles.level}>
                    <Text style={styles.levelText}>Beginner</Text>
                </View>
            </View>
            <View style={styles.bottomRow}>
                <ProgressBar label={"Continue"} progress={75}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: -50,
    },
    topRow: {
        width: 380,
        height: 85,
        backgroundColor: COLORS.secondary,
        borderRadius: 22,
        paddingHorizontal: 15,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: "space-between",
        shadowColor: 'black',
        shadowRadius: 12,
        shadowOpacity: 1,
        elevation: 5,
        shadowOffset:
            {
                width: 0,
                height: 4
            }
    },
    bottomRow: {
        width: '40%',
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    exerciseTitle: {
        fontFamily: FONT.bold,
        fontSize: SIZES.large,
        color: COLORS.text,
    },
    level: {
        width: 115,
        height: 30,
        backgroundColor: 'rgba(89, 126, 255, 0.75)',
        borderRadius: 22,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
    },
    levelText: {
        color: 'white',
        fontFamily: FONT.regular,
    },
});

export default RecentActivity;
