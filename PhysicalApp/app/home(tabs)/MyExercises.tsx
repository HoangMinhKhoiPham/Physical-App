import React from 'react';
import { Text, View } from '@/components/Themed';
import { FONT, SIZES } from '../../constants';
import ExerciseBox from '@/components/myExercisesContainer';

export default function MyExercises() {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text style={{ fontSize: SIZES.xxxLarge, fontFamily: FONT.regular }}>
                Smile & Sweat
            </Text>
            <View
                style={{
                    marginVertical: 30,
                    height: 1,
                    width: '80%',
                }}
            />

            {/* This View is correctly opened and closed */}
            <View>
                <Text>My Exercises</Text>
                <ExerciseBox exerciseName="Push-ups" />
                <ExerciseBox exerciseName="Squats" />
            </View>

        </View>
    );
}
