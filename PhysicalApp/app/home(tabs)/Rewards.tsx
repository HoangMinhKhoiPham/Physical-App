import {Text, View} from "@/components/Themed";
import {COLORS, FONT, SIZES} from "../../constants";
import Reward from "@/components/Reward";
import {StyleSheet} from "react-native";
import ProgressBar from "@/components/PointBar";

export default function Rewards() {
    const currentBalance = 8000;
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                paddingTop: 60,
                paddingHorizontal: 20,
            }}
        >
            <Text style={{fontSize: SIZES.xxxLarge, fontFamily: FONT.regular, paddingBottom: 10}}>
                My Achievements
            </Text>
            <Text style={styles.sectionTitle}>
                My Points
            </Text>
            <View>
                <ProgressBar value={currentBalance}/>
            </View>
            <Text style={styles.sectionTitle}>
                Rewards
            </Text>
            <View style={styles.rewardFlex}>
                <Reward name={"Eat some sweets"} points={200} currentBalance={currentBalance}></Reward>
                <Reward name={"Have some coffee/tea"} points={300} currentBalance={currentBalance}></Reward>
                <Reward name={"Take a walk"} points={10000} currentBalance={currentBalance}></Reward>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: SIZES.large,
        fontFamily: FONT.regular,
        alignSelf: 'flex-start',
        marginLeft: -10,
        marginTop: 10,
        padding: 15
    },
    rewardFlex: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
    }
});
