import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const PostCard = () => {
    const [data, setData] = useState([
        {
            id: 1,
            avatar: require("../assets/images/tristan.png"),
            name: "Tristan",
            title: "Need help with my form",
            comment: { count: 10, clicked: false },
            heart: { count: 10, clicked: false },
        },
        {
            id: 2,
            avatar: require("../assets/images/claire.png"),
            name: "Claire",
            title: "Should I treat myself to cake?",
            comment: { count: 1.3, clicked: false },
            heart: { count: 40, clicked: false },
        },
        {
            id: 3,
            avatar: require("../assets/images/tom.png"),
            name: "Tom",
            title: "Does water ruin my gains?",
            comment: { count: 1.1, clicked: false },
            heart: { count: 50, clicked: false },
        },
        {
            id: 4,
            avatar: require("../assets/images/dwayne.png"),
            name: "Dwayne",
            title: "Switching from home workouts",
            comment: { count: 1.5, clicked: false },
            heart: { count: 1, clicked: false },
        },
        {
            id: 5,
            avatar: require("../assets/images/jeff.png"),
            name: "Jeff",
            title: "How many calories should I burn per day?",
            comment: { count: 2, clicked: false },
            heart: { count: 200, clicked: false },
        }
    ]);

    const handleCommentClick = (id: any) => {
        setData((prevState) =>
            prevState.map((item) =>
                item.id === id ? { ...item, comment: { ...item.comment, clicked: !item.comment.clicked } } : item
            )
        );
    };

    const handleHeartClick = (id: any) => {
        setData((prevState) =>
            prevState.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        heart: {
                            count: item.heart.clicked ? item.heart.count - 1 : item.heart.count + 1,
                            clicked: !item.heart.clicked,
                        },
                    }
                    : item
            )
        );
    };

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <View style={styles.rectangle}>
                    <View style={styles.contentContainer}>
                        <Image style={styles.avatar} source={item.avatar} />
                        <View style={styles.textContainer}>
                            <Text style={styles.titleText}>{item.title}</Text>
                            <Text style={styles.nameText}>{item.name}</Text>
                        </View>
                    </View>
                    <View style={styles.footerContainer}>
                        <TouchableOpacity onPress={() => handleCommentClick(item.id)} style={styles.footerItem}>
                            <FontAwesome name={item.comment.clicked ? "comment" : "comment-o"} size={20} color="#4D506F" />
                            <Text style={styles.footerText}>{item.comment.count}k</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleHeartClick(item.id)} style={styles.footerItem}>
                            <FontAwesome name={item.heart.clicked ? "heart" : "heart-o"} size={20} color="#4D506F" />
                            <Text style={styles.footerText}>{item.heart.count}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

const styles = StyleSheet.create({
    rectangle: {
        width: 375,
        height: 83,
        margin: 10,
        marginRight: 10,
        borderRadius: 22,
        paddingHorizontal: 10,
        paddingVertical: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        backgroundColor: "#E4ECFF",
    },
    contentContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        width: 62,
        height: 70,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    titleText: {
        fontSize: 16,
        marginBottom: 5,
        color: "#4D506F",
    },
    nameText: {
        marginTop: 20,
        fontSize: 14,
        fontWeight: "bold",
        color: "#4D506F",
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: -20,
    },
    footerItem: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
    },
    footerText: {
        marginLeft: 5,
        fontSize: 14,
        color: "#4D506F",
    },
});

export default PostCard;
