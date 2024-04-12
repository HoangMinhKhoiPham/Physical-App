import { Text, View } from "@/components/Themed";
import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import CategoriesFilter from "@/components/categoriesFilter";
import PostCard from "@/components/Post";
import {StyleSheet, TouchableOpacity} from "react-native";
import {FONT, SIZES} from "@/constants";

export default function Forum() {
    return (
        <View
            style={{
                flex: 1,
                paddingBottom: 20, // Add padding to accommodate the button
            }}
        >
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 40
                }}
            >
                <Text style={{fontSize: SIZES.xxxLarge, fontFamily: FONT.regular}}>
                    Forum
                </Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <CategoriesFilter />
            </View>
            <View style={{ flex: 1 }}>
                <PostCard />
            </View>
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    width: 209,
                    height: 70,
                    borderRadius: 20,
                    backgroundColor: '#597EFF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                }}
                onPress={() => {
                }}
            >
                <Text style={{ color: '#FFFFFF', marginTop: 5, textAlign: "left",
                    fontSize: SIZES.xLarge}}>
                    New post</Text>
                <FontAwesome name="plus" size={50} color="#FFFFFF" style={{ marginLeft: 10, marginTop: 5 }} />
            </TouchableOpacity>
        </View>
    );
}

