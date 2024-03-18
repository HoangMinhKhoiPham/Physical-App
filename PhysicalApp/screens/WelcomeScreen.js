import {StatusBar, Text, View, Image} from 'react-native';
import React from "react";
import {LinearGradient} from 'expo-linear-gradient'
export default function WelcomeScreen() {
    return (
        <View className="flex-1 flex justify-end">
                <Image className="h-full w-full absolute" source={require('../assets/HomePageImage.png')}/>
            <LinearGradient
                colors={['transparent', '#18181b']}
                style={{width: wp(100), height: hp(70)}}
                start={{x:0.5, y:0}}
                end={{x: 0.5, y:0.8}}
            ></LinearGradient>
        </View>
    );
}


