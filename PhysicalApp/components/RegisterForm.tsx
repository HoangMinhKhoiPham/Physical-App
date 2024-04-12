import {View} from "@/components/Themed";
import {
    Alert,
    GestureResponderEvent,
    NativeSyntheticEvent,
    StyleSheet,
    Text,
    TextInput, TextInputChangeEventData,
    TouchableOpacity
} from "react-native";
import {COLORS, FONT, SIZES} from "@/constants";
import React, {useContext, useState} from "react";
import RegisterBtn from "@/components/RegisterBtn";
import {createUserWithEmailAndPassword} from "@firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface RegisterFormProps {
    isChecked: boolean
}
export const RegisterForm = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [values, setValues] = useState({})
    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')


    const onHandleSignUp = async () => {
        if (email !== '' && password !== '') {
            try {
                await AsyncStorage.setItem('email', email);
                await AsyncStorage.setItem('password', password);
                await AsyncStorage.setItem('fullName', fullName);
                await AsyncStorage.setItem('phoneNumber', phoneNumber);
                await AsyncStorage.setItem('confirmedPassword', confirmedPassword);

                const userData = {
                    email,
                    password,
                    fullName,
                    phoneNumber,
                    confirmedPassword,
                };
                await AsyncStorage.setItem('userData', JSON.stringify(userData));
            } catch (error) {
                console.error('Error storing data:', error);
            }
        }
    }
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
                        color: COLORS.text,
                        paddingTop: 10,
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
                    gap: SIZES.medium,
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
                        value={fullName}
                        onChange={(fullName:NativeSyntheticEvent<TextInputChangeEventData>) => {
                            setFullName(fullName.nativeEvent.text)
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
                        value={email}
                        onChange={(email:NativeSyntheticEvent<TextInputChangeEventData>) => {
                            setEmail(email.nativeEvent.text)
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
                        placeholder="Password"
                        value={password}
                        onChange={(password:NativeSyntheticEvent<TextInputChangeEventData>) => {
                            setPassword(password.nativeEvent.text)
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
                        value={confirmedPassword}
                        onChange={(confirmedPassword:NativeSyntheticEvent<TextInputChangeEventData>) => {
                            setConfirmedPassword(confirmedPassword.nativeEvent.text)
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
                        value={phoneNumber}
                        onChange={(phoneNumber:NativeSyntheticEvent<TextInputChangeEventData>) => {
                            setPhoneNumber(phoneNumber.nativeEvent.text)
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
                    <RegisterBtn content="Create new account" handlePress={onHandleSignUp} isPrimary={true}/>
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
        color: COLORS.text,
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
        padding: 20,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkmark: {
        fontSize: 14,
        color: COLORS.primary,
    },
    checkboxText: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.tertiary,
        marginLeft: 10,
    },
});
