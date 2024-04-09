import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {FONT} from "@/constants";

class ProgressBar extends React.Component<{ value: any }> {
    render() {
        let {value} = this.props;
        // Calculate the position of the pointer based on the current value
        const pointerPosition = (value / 50000) * 100;

        return (
            <View style={styles.container}>
                <View style={styles.progressBar}>
                    <View style={[styles.pointer, {left: `${pointerPosition}%`}]}>
                        <Text style={styles.pointerText}>{value}</Text>
                    </View>
                </View>
                <View style={styles.scale}>
                    <Text style={styles.scaleText}>0</Text>
                    <View style={styles.diamond} />
                    <Text style={styles.scaleText}>50,000</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 330,
        height: 73,
        backgroundColor: '#E4ECFF',
        borderRadius: 22,
        paddingHorizontal: 10,
    },
    progressBar: {
        height: 10,
        marginTop: 20,
        backgroundColor: '#E4ECFF',
        borderRadius: 5,
        position: 'relative',
    },
    pointer: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#597EFF',
        position: 'absolute',
        top: -5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pointerText: {
        color: '#FFFFFF',
        fontFamily: FONT.bold,
        fontSize: 10,
    },
    scale: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    scaleText: {
        color: '#4D506F',
        fontFamily: FONT.regular,
        fontSize: 12,
    },
    diamond: {
        width: 10,
        height: 10,
        backgroundColor: '#597EFF',
        transform: [{ rotate: '45deg' }],
        position: 'absolute',
        top: -5,
    },
});

export default ProgressBar;
