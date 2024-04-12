import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {FONT, COLORS, SIZES} from "@/constants";

class Reward extends React.Component<{ name: string, points: number, currentBalance: number }, any> {
    render() {
        let name = this.props.name;
        let points = this.props.points;
        let currentBalance = this.props.currentBalance;

        if (currentBalance > points) {
            return (
                <View style={styles.container}>
                    <Text
                        style={styles.name}>{name} ({points}&nbsp;pts)</Text>
                    <Pressable style={styles.button}>
                        <Text style={styles.claim}>Claim</Text>
                    </Pressable>
                </View>
            );
        } else {
            return (
                <View style={styles.containerButPoor}>
                    <View style={styles.poorNameContainer}>
                        <Text
                            style={styles.nameButPoor}>{name}&nbsp;</Text>
                        <Text
                            style={styles.pointsButPoor}>({points}&nbsp;pts)</Text>
                    </View>
                    <Pressable style={styles.buttonButPoor}>
                        <Text style={styles.claimButPoor}>Claim</Text>
                    </Pressable>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        backgroundColor: COLORS.secondary,
        borderRadius: 22,
        color: COLORS.primary,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5,
    },
    containerButPoor: {
        width: '100%',
        padding: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 22,
        color: COLORS.primary,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5,
    },
    poorNameContainer: {
        maxWidth: '70%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    name: {
        fontFamily: FONT.regular,
        fontSize: SIZES.large,
        maxWidth: '70%',
    },
    nameButPoor: {
        fontFamily: FONT.regular,
        fontSize: SIZES.large,
    },
    pointsButPoor: {
        fontFamily: FONT.regular,
        fontSize: SIZES.large,
        color: '#ED0E00',
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 23,
        width: 80,
    },
    buttonButPoor: {
        backgroundColor: '#B0B0B0',
        borderRadius: 23,
        width: 80,
    },
    claim: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.secondary,
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignSelf: 'center',
    },
    claimButPoor: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.secondary,
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignSelf: 'center',
    },
});

export default Reward;
