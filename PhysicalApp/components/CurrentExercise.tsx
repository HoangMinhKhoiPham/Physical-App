import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { COLORS, FONT, SIZES } from "@/constants";
import { FontAwesome } from "@expo/vector-icons";
// @ts-ignore
import finishedIcon1 from '../assets/images/finishedIcon.png';
// @ts-ignore
import finishedIcon2 from '../assets/images/continueIcon.png';
// @ts-ignore
import finishedIcon3 from '../assets/images/startIcon.png';

const CurrentExercise = () => {
    const [data, setData] = useState([
        {
            title: "Chest & abdominal exercises",
            level: "Intermediate",
            image: require("../assets/images/chest&abdominal.png"),
            nbExercises: 10,
            nbPoints: 200,
            duration: 45,
            smallerImage: finishedIcon1,
            text: "complete"
        },
        {
            title: "Home Workout",
            level: "Beginner",
            image: require("../assets/images/homeworkout.png"),
            nbExercises: 8,
            nbPoints: 150,
            duration: 40,
            smallerImage: finishedIcon2,
            text: "continue"
        },
        {
            title: "Yoga",
            level: "Advanced",
            image: require("../assets/images/yoga.png"),
            nbExercises: 12,
            nbPoints: 180,
            duration: 60,
            smallerImage: finishedIcon3,
            text: "start"
        },

    ]);

    return (
        <ScrollView style={styles.scrollView}>
            {data.map((item, index) => (
                <View key={index} style={styles.container}>
                    <View style={styles.topRow}>
                        <Text style={styles.exerciseTitle}>{item.title}</Text>
                        <TouchableOpacity style={styles.addListButton}>
                            <FontAwesome name="plus" size={20} color={COLORS.secondary} />
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
                        <View style={styles.imageContainer}>
                            <Image source={item.image} style={styles.mainImage} />
                            {/* Add a View to wrap smaller image and text */}
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>{item.text}</Text>
                                <Image source={item.smallerImage} style={styles.smallerImage} />
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    container: {
        width: 380,
        height: 195,
        marginBottom: 20,
        backgroundColor: COLORS.secondary,
        borderRadius: 22,
        paddingHorizontal: 15,
        paddingVertical: 15,
        shadowColor: 'black',
        shadowRadius: 12,
        shadowOpacity: 1,
        elevation: 5,
        shadowOffset: {
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
    },
    imageContainer: {
        position: 'relative',
    },
    mainImage: {
        width: 160,
        height: 160,
        resizeMode: 'cover',
        objectFit: 'contain',
        marginTop: -12,
        marginRight: 40,
    },
    smallerImage: {
        width: 30,
        height: 30,
        resizeMode: 'cover',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    textContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        marginRight: 35,
    },
});

export default CurrentExercise;
