import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// @ts-ignore
export default function ExerciseBox({ exerciseName }) {
    return (
        <View style={styles.container}>
            <Text style={styles.exerciseText}>{exerciseName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0', // background color of the box
        borderRadius: 10, // border radius to make it rounded
        padding: 20, // padding inside the box
        marginVertical: 10, // vertical margin between boxes
        width: '80%', // width of the box
        alignSelf: 'center', // center align the box horizontally
    },
    exerciseText: {
        fontSize: 18, // font size of the exercise name
        fontWeight: 'bold', // bold font weight
        textAlign: 'center', // center align the text horizontally
    },
});