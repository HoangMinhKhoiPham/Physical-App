import { Text, View } from "@/components/Themed";
import LogInForm from "@/components/LogInForm";
import { FONT, SIZES } from "../../constants";
import {Image, TouchableOpacity} from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import { StyleSheet } from 'react-native';

export default function Profile() {
    return (
        <View style={{
            flex: 1,
        }}>
        <View
            style={{
                flex: 1,
                alignItems: "center",
            }}
        >
            <Image source={require('../../assets/images/Avatar.png')} style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                alignItems: "center",
            }}
                />
            <View style={styles.container}>
                <Text style={{ fontSize: SIZES.xxLarge, fontFamily: FONT.bold }}>
                    Tom Cruise
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 , marginLeft: 10}}>
                    <View style={styles.rectangle}>
                        <FontAwesome name="bolt" size={30} color="#597EFF" style={{ marginRight: 5 }} />
                        <Text style={{ fontSize: SIZES.large, fontFamily: FONT.regular, color: '#597EFF'}}>
                            52
                        </Text>
                    </View>
                </View>
            </View>
        </View>
            <View
                style={{
                    flex: 1,
                    position: 'absolute',
                    marginTop: 150,
                    flexDirection: 'column', // Display children in columns
                    alignItems: 'flex-start', // Align children to the start of the container
                    marginLeft: 10, // Adjust left margin for better alignment
                }}
            >
                <Text style={{ fontSize: SIZES.xxLarge, fontFamily: FONT.regular, marginBottom: 10 }}>My Goals</Text>

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.goalContainer}>
                        <Text style={{ color: '#4D506F', fontFamily: FONT.regular }}>Gain Muscles</Text>
                    </View>
                    <View style={styles.goalContainer}>
                        <Text style={{ color: '#4D506F', fontFamily: FONT.regular }}>Increase Flexibility</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.goalContainer}>
                        <Text style={{ color: '#4D506F', fontFamily: FONT.regular}}>Get Strong</Text>
                    </View>
                    <TouchableOpacity style={styles.addButton}>
                        <FontAwesome name="plus" size={15} color="#FFFFFF"/>

                    </TouchableOpacity>
                </View>

                <View style={styles.separator}></View>
                <View style={{ flex: 1, position: 'absolute', marginTop: 200, flexDirection: 'column', alignItems: 'flex-start', marginLeft: 10 }}>
                    <Text style={{ fontSize: SIZES.xxLarge, fontFamily: FONT.regular, marginBottom: 10 }}>My Metrics</Text>
                    <View style={styles.metricContainer}>
                        <View style={styles.metricRectangle}>
                            <Text style={{ color: '#4D506F', fontFamily: FONT.regular, fontSize: SIZES.large }}>2000</Text>
                            <Text style={{ color: '#4D506F', fontFamily: FONT.regular }}>kcal</Text>
                            <Image source={require('../../assets/images/fire.png')}  style={{
                                width: 30,
                                height: 50,
                                borderRadius: 50,
                                alignItems: "center",
                            }}/>
                        </View>
                        <View style={styles.metricRectangle}>
                            <Text style={{ color: '#4D506F', fontFamily: FONT.regular, fontSize: SIZES.large }}>452</Text>
                            <Text style={{ color: '#4D506F', fontFamily: FONT.regular }}>min</Text>
                            <Image source={require('../../assets/images/lightning.png')}  style={{
                                width: 30,
                                height: 40,
                                borderRadius: 50,
                                alignItems: "center",
                            }}/>
                        </View>
                    </View>
                    <View style={styles.metricContainer}>
                        <View style={styles.metricRectangle}>
                            <Text style={{ color: '#4D506F', fontFamily: FONT.regular, fontSize: SIZES.large }}>55</Text>
                            <Text style={{ color: '#4D506F', fontFamily: FONT.regular }}>km</Text>
                            <Image source={require('../../assets/images/person-walking.png')}  style={{
                                width: 30,
                                height: 40,
                                borderRadius: 50,
                                alignItems: "center",
                            }}/>
                        </View>
                        <View style={styles.metricRectangle}>
                            <Text style={{ color: '#4D506F', fontFamily: FONT.regular, fontSize: SIZES.large }}>1200</Text>
                            <Text style={{ color: '#4D506F', fontFamily: FONT.regular }}>pts</Text>
                            <Image source={require('../../assets/images/coins.png')}  style={{
                                width: 35,
                                height: 40,
                                borderRadius: 50,
                                alignItems: "center",
                            }}/>
                        </View>
                    </View>
                </View>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rectangle: {
        width: 80,
        height: 42,
        backgroundColor: '#E4ECFF',
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 60,
    },
    goalContainer: {
        width: 154,
        height: 42,
        backgroundColor: '#E4ECFF',
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        margin: 5
    },
    addButton: {
        width: 80,
        height: 47,
        backgroundColor: '#597EFF',
        borderRadius: 22,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: FONT.bold,
    },
    metricContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    metricRectangle: {
        width: 141,
        height: 91,
        backgroundColor: '#E4ECFF',
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        flexDirection: 'row',

    },
    separator: {
        height: 1,
        width: 280,
        marginLeft: 50,
        backgroundColor: '#4D506F',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
