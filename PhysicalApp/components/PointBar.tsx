import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {FONT} from "@/constants";
import {COLORS} from "@/constants";

class PointBar extends React.Component<{ value: any }> {
    render() {
        let {value} = this.props;
        // Calculate the position of the pointer based on the current value
        const left0 = 12;
        const leftBetween0AndMax = 65;
        const pointerPosition = (value / 50000) * leftBetween0AndMax + left0;

        return (
            <View style={styles.container}>
                <View style={[styles.pointer, {left: `${pointerPosition}%`}]}>
                    <Text style={styles.pointerText}>{value}</Text>
                    <Image source={require('../assets/images/downwardArrow.png')} style={{
                        width: 8,
                        height: 20,
                        marginBottom: -11,
                        resizeMode: 'cover',
                    }}/>
                </View>
                <View style={styles.pointsBar}>
                    <Text style={styles.minText}>0</Text>
                    <View style={styles.diamond}/>
                    <View style={styles.bar}/>
                    <View style={styles.diamond}/>
                    <Text style={styles.maxText}>Max: 50 000</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 330,
        height: 73,
        backgroundColor: COLORS.secondary,
        borderRadius: 22,
        paddingHorizontal: 10,
        color: COLORS.primary,
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
    pointer: {
        height: '60%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    pointerText: {
        fontFamily: FONT.bold,
        fontSize: 12,
        color: COLORS.primary,
        marginTop: -10,
    },
    pointsBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        marginTop: 12,
        height: '90%',
        borderRadius: 5,
        position: 'relative',
    },
    minText: {
        fontFamily: FONT.bold,
        fontSize: 12,
        color: COLORS.primary,
        maxWidth: 40,
        textAlign: 'center',
    },
    maxText: {
        fontFamily: FONT.bold,
        fontSize: 12,
        color: COLORS.primary,
        maxWidth: 40,
        bottom: 8,
        textAlign: 'center',
    },
    diamond: {
        width: 10,
        height: 10,
        backgroundColor: COLORS.primary,
        transform: [{rotate: '45deg'}],
    },
    bar: {
        flex: 5,
        left: -15,
        marginRight: -30,
        height: 3,
        backgroundColor: COLORS.primary,
    },
});

export default PointBar;
