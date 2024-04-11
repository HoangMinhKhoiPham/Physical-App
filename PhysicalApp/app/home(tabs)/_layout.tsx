import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import welcomeScreen from "@/app/(tabs)/welcome";

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                // Disable the static render of the header on web
                // to prevent a hydration error in React Navigation v6.
                headerShown: useClientOnlyValue(false, true),
            }}
        >

            <Tabs.Screen
                name="Home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
                }}
            />

            <Tabs.Screen
                name="Explore"
                options={{
                    title: "Explore",
                    tabBarIcon: ({ color }) => <TabBarIcon name="globe" color={color} />,
                }}
            />

            <Tabs.Screen
                name="MyExercises"
                options={{
                    title: "MyExercises",
                    tabBarIcon: ({ color }) => <TabBarIcon name="bicycle" color={color} />,
                }}
            />

            <Tabs.Screen
                name="Rewards"
                options={{
                    title: "Rewards",
                    tabBarIcon: ({ color }) => <TabBarIcon name="gift" color={color} />,
                }}
            />

            <Tabs.Screen
                name="Forum"
                options={{
                    title: "Forum",
                    tabBarIcon: ({ color }) => <TabBarIcon name="comments" color={color} />,
                }}
            />

            <Tabs.Screen
                name="Profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
                }}
            />
        </Tabs>


    );
}
