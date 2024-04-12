import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONT, SIZES} from "@/constants";
import {FontAwesome} from "@expo/vector-icons";
import {fontFamily} from "nativewind/dist/postcss/to-react-native/properties/font-family";
import {fontSize} from "nativewind/dist/tailwind/native/font-size";

class Exercise extends React.Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topRow}>
                    <Text style={styles.exerciseTitle}>Chest & abdominal exercises</Text>
                    <TouchableOpacity style={styles.addListButton}>
                        <FontAwesome name="plus" size={20} color={COLORS.secondary}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomRow}>
                    <View style={styles.leftBottomRow}>
                        <View style={styles.level}>
                            <Text style={styles.levelText}>Intermediate</Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.descriptionText}>10 exercises</Text>
                            <Text style={styles.descriptionText}>200 points</Text>
                            <Text style={styles.descriptionText}>45 minutes</Text>
                        </View>
                    </View>
                        <Image source={require('../assets/images/chest&abdominal.png')} style={{
                            width: 170,
                            height: 135,
                            resizeMode: 'cover',
                        }}/>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 380,
        height: 195,
        backgroundColor: COLORS.secondary,
        borderRadius: 22,
        paddingHorizontal: 15,
        paddingVertical: 15,
        gap: -5,
        shadowColor: 'black',
        shadowRadius: 12,
        shadowOpacity: 1,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 4}
    },
    topRow: {
        flexDirection: 'row',
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
        marginTop: 12,
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
        marginLeft: 105,
        marginTop: -10,
    }

});

export default Exercise;
