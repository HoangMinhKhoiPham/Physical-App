import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native';
import {COLORS, FONT, SIZES} from "@/constants";
import {FontAwesome} from "@expo/vector-icons";
import {fontFamily} from "nativewind/dist/postcss/to-react-native/properties/font-family";
import {fontSize} from "nativewind/dist/tailwind/native/font-size";

const CurrentExercise = () => {
    const [data, setData] = useState([
        {
            title: "Chest & abdominal exercises",
            level: "Intermediate",
            image: require("../assets/images/chest&abdominal.png"),
            nbExercises: 10,
            nbPoints: 200,
            duration: 45
        },
        {
            title: "Home Workout",
            level: "Beginner",
            image: require("../assets/images/homeworkout.png"),
            nbExercises: 8,
            nbPoints: 150,
            duration: 40
        },
        {
            title: "Yoga",
            level: "Advanced",
            image: require("../assets/images/yoga.png"),
            nbExercises: 12,
            nbPoints: 180,
            duration: 60
        },
        {
            title: "Outdoor Cardio",
            level: "Intermediate",
            image: require("../assets/images/outdoorcardio.png"),
            nbExercises: 15,
            nbPoints: 500,
            duration: 90
        },
        {
            title: "Cycling",
            level: "Beginner",
            image: require("../assets/images/cycling.png"),
            nbExercises: 14,
            nbPoints: 230,
            duration: 80
        },
        {
            title: "Leg Workout",
            level: "Advanced",
            image: require("../assets/images/legworkout.png"),
            nbExercises: 8,
            nbPoints: 450,
            duration: 30
        },

    ]);

    return (
        <FlatList
            data={data}
            renderItem={({item}) => (
                <View style={styles.container}>
                    <View style={styles.topRow}>
                        <Text style={styles.exerciseTitle}>{item.title}</Text>
                        <TouchableOpacity style={styles.addListButton}>
                            <FontAwesome name="plus" size={20} color={COLORS.secondary}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomRow}>
                        <View style={styles.leftBottomRow}>
                            <View style={styles.level}>
                                <Text style={styles.levelText}>{item.level}</Text>
                            </View>
                            <View style={styles.description}>
                                <Text style={styles.descriptionText}>{item.nbExercises} exercises</Text>
                                <Text style={styles.descriptionText}>{item.nbPoints} points</Text>
                                <Text style={styles.descriptionText}>{item.duration} minutes</Text>
                            </View>
                        </View>
                        <Image source={item.image} style={{
                            width: 160,
                            height: 160,
                            resizeMode: 'cover',
                            objectFit: 'contain',
                            marginTop: -12,
                            marginRight: 40,
                        }}/>
                    </View>
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        width: 380,
        height: 195,
        marginBottom: 20,
        backgroundColor: COLORS.secondary,
        borderRadius: 22,
        paddingHorizontal: 15,
        paddingVertical: 15,
        gap: -5,
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
    topRow: {
        flexDirection: 'row',
        justifyContent: "space-between",
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
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    leftBottomRow: {
        flexDirection: "column",
    },
    description: {
        marginTop: 15,
        flexWrap: 'wrap',
    },
    descriptionText: {
        color: COLORS.text,
        fontSize: SIZES.medium,
        fontFamily: FONT.regular,
    },
    exerciseTitle: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
    },
    addListButton: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.primary,
        borderRadius: 22,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: "solid",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginTop: -5,
    }
});

export default CurrentExercise;
