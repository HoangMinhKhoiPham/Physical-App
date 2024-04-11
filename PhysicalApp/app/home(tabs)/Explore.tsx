import {Text, View} from "@/components/Themed";
import LogInForm from "@/components/LogInForm";
import {FONT, SIZES} from "../../constants";
import Exercise from "@/components/Exercise";
import SearchBar from "@/components/SearchBar";
import {StyleSheet} from "react-native";

export default function Explore() {

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text style={{fontSize: SIZES.xxxLarge, fontFamily: FONT.regular}}>
                Explore
            </Text>
            <View
                style={{
                    marginVertical: 30,
                }}
            />
            <View>
                <SearchBar></SearchBar>
            </View>
            <View style={styles.container}>
                <Exercise></Exercise>
                <Exercise></Exercise>
                <Exercise></Exercise>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        rowGap: 20,
    },

})
