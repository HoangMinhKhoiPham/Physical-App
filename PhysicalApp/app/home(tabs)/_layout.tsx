import React, { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, router } from "expo-router";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import AsyncStorage from "@react-native-async-storage/async-storage";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [email, setEmail] = useState<string>();
  useEffect(() => {
    let mounted = true;
    AsyncStorage.getItem("email").then((data) => {
      if (mounted) {
        if (data) {
          setEmail(data);
        } else {
          setEmail("");
        }
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Home/[profile]"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          href: {
            pathname: `Home/[profile]`,
            params: {
              profile: `${email}`,
            },
          },
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="Explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <TabBarIcon name="globe" color={color} />,
        }}
      />

      <Tabs.Screen
        name="MyExercises/[profile]"
        options={{
          title: "My Exercises",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="bicycle" color={color} />
          ),
          href: {
            pathname: `MyExercises/[profile]`,
            params: {
              profile: `${email}`,
            },
          },
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
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="comments" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile/[profile]"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          href: {
            pathname: `Profile/[profile]`,
            params: {
              profile: `${email}`,
            },
          },
        }}
      />
    </Tabs>
  );
}
