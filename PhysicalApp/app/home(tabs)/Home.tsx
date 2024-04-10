import { Text, View } from "@/components/Themed";
import LogInForm from "@/components/LogInForm";
import { FONT, SIZES } from "../../constants";
import {FontAwesome} from "@expo/vector-icons";
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import ProgressBar from "@/components/PointBar";

export default function Home() {
    return (
        <View
            style={{
                flex: 1,
                paddingTop: 70,
            }}
        >
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                }}
            >
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50 , marginLeft: 10}}>
                        <View style={styles.rectangle}>
                            <FontAwesome name="bolt" size={30} color="#597EFF" style={{ marginRight: 5 }} />
                            <Text style={{ fontSize: SIZES.xLarge, fontFamily: FONT.regular, color: '#597EFF'}}>
                                52
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.calendarContainer}>
                    <View style={styles.calendarRow}>
                        <Text style={styles.dayText}>MON</Text>
                        <View style={styles.tickCircle}>
                            <FontAwesome name="check" size={10} color="#FFFFFF" />
                        </View>
                    </View>
                    <View style={styles.calendarRow}>
                        <Text style={styles.dayText}>TUE</Text>
                        <View style={styles.tickCircle}>
                            <FontAwesome name="check" size={10} color="#FFFFFF" />
                        </View>
                    </View>
                    <View style={styles.calendarRow}>
                        <Text style={styles.dayText}>WED</Text>
                        <View style={styles.tickCircle}>
                            <FontAwesome name="check" size={10} color="#FFFFFF" />
                        </View>
                    </View>
                    <View style={styles.calendarRow}>
                        <Text style={styles.dayText}>THU</Text>
                        <View style={styles.undoneTickCircle}>
                        </View>
                    </View>
                    <View style={styles.calendarRow}>
                        <Text style={styles.dayText}>FRI</Text>
                        <View style={styles.undoneTickCircle}>
                        </View>
                    </View>
                    <View style={styles.calendarRow}>
                        <Text style={styles.dayText}>SAT</Text>
                        <View style={styles.undoneTickCircle}>
                        </View>
                    </View>
                    <View style={styles.calendarRow}>
                        <Text style={styles.dayText}>SUN</Text>
                        <View style={styles.undoneTickCircle}>
                        </View>
                    </View>
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    position: 'absolute',
                    marginTop: 250,
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginLeft: 10,
                }}
            >
                <Text style={{ fontSize: SIZES.large, fontFamily: FONT.regular, marginBottom: 10, marginLeft: 15}}>My Points</Text>
                <View style={styles.pointsContainer}>
                    <ProgressBar value={25000} />
                </View>

                <View style={styles.separator}></View>
                <View style={{ flex: 1, position: 'absolute', marginTop: 295, flexDirection: 'column', alignItems: 'flex-start', marginLeft: 15}}>
                    <Text style={{ fontSize: SIZES.large, fontFamily: FONT.regular, marginBottom: 10 }}>My Metrics</Text>
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
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 100,
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
        marginLeft: 10,
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
    calendarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    calendarRow: {
        alignItems: 'center',
        marginLeft: 10
    },
    dayText: {
        color: '#4D506F',
        fontFamily: FONT.regular,
        marginRight: 10,
    },
    tickCircle: {
        width: 20,
        height: 20,
        marginTop: 5,
        borderRadius: 15,
        backgroundColor: '#597EFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    undoneTickCircle: {
        width: 20,
        height: 20,
        marginTop: 5,
        borderRadius: 15,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pointsContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: SIZES.large,
        fontFamily: FONT.regular,
        marginBottom: 10,
    },
});
