import {View} from "@/components/Themed";
import {GestureResponderEvent, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";
import {COLORS, FONT, SIZES} from "@/constants";
import React, {useState} from "react";
import RegisterBtn from "@/components/RegisterBtn";

interface RegisterFormProps {
    isChecked: boolean
}

export const RegisterForm = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    return (
        <View>
            <View style={{width: "100%"}}>
                <Text
                    style={{
                        fontFamily: FONT.bold,
                        fontSize: SIZES.large,
                        color: COLORS.primary,
                    }}
                >
                    Register here
                </Text>
                <Text
                    style={{
                        fontFamily: FONT.regular,
                        fontSize: SIZES.large,
                        color: "black",
                    }}
                >
                    Let's create a new account for you!
                </Text>
            </View>


            <View
                style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: SIZES.small,
                    marginTop: SIZES.large,
                    height: 300,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.secondary,
                        marginRight: SIZES.small,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: SIZES.medium,
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <TextInput
                        placeholder="Full Name"
                        value=""
                        onChange={() => {
                        }}
                        style={styles.userInput}
                    />
                </View>

                <View
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.secondary,
                        marginRight: SIZES.small,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: SIZES.medium,
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <TextInput
                        placeholder="Email"
                        value=""
                        onChange={() => {
                        }}
                        style={styles.userInput}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.secondary,
                        marginRight: SIZES.small,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: SIZES.medium,
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <TextInput
                        value="Password"
                        onChange={() => {
                        }}
                        style={styles.userInput}
                    />
                </View>

                <View
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.secondary,
                        marginRight: SIZES.small,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: SIZES.medium,
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <TextInput
                        placeholder="Phone Number"
                        value=""
                        onChange={() => {
                        }}
                        style={styles.userInput}
                    />
                </View>

                <View
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.secondary,
                        marginRight: SIZES.small,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: SIZES.medium,
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <TextInput
                        placeholder="Confirm Password"
                        value=""
                        onChange={() => {
                        }}
                        style={styles.userInput}
                    />
                </View>
            </View>

            <View style={styles.checkBoxContainer}>
                <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
                    {isChecked ? <Text style={styles.checkmark}>✓</Text> : null}
                </TouchableOpacity>
                <Text style={styles.checkboxText}>
                    <Text style={{fontFamily: FONT.bold}}>Agree with</Text> Terms & Conditions
                </Text>
            </View>

            <View
                style={styles.createAccountButton}
            >
                <View
                    style={{
                        flex: 1,
                        marginRight: SIZES.small,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: SIZES.medium,
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <RegisterBtn content="Create Account" handlePress={() => {
                    }} isPrimary={true}/>
                </View>
            </View>

            <View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    userInput: {
        fontFamily: FONT.regular,
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,
    },
    createAccountButton:{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        gap: SIZES.small,
        marginTop: SIZES.large,
        height: 50,
    },
    checkBoxContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkmark: {
        fontSize: 16,
        color: COLORS.primary,
    },
    checkboxText: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.tertiary,
        marginLeft: 10,
    },
});
