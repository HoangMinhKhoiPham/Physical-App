import { Text, View } from "@/components/Themed";
import LogInForm from "@/components/LogInForm";
import { FONT, SIZES } from "../../constants";
import Exercise from "@/components/Exercise";
import progressBar from "@/components/ProgressBar";
import ProgressBar from "@/components/ProgressBar";
import CurrentExercise from "@/components/CurrentExercise";
import React from "react";

export default function MyExercises() {
    const progress = 0.7;
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 150,
            }}
        >
            <Text style={{fontSize: SIZES.xxxLarge, fontFamily: FONT.regular}}>
                My Exercises
            </Text>
            <View
                style={{
                    marginVertical: 10,
                }}
            />
            <View
                style={{
                    marginVertical: 30,
                    height: 1,
                    width: "80%",
                }}
            />
            <View style={{ marginTop: -50 }}>
                <ProgressBar progress={progress} />
            </View>
            <View style={{ marginTop: 20 }}>
                <CurrentExercise />
            </View>
            <View style={{ height: 100 }} />
        </View>
    );
}
