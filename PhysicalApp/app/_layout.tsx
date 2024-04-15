import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useContext, useEffect } from "react";
import { useColorScheme } from "@/components/useColorScheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserInformation, userProfiles } from "@/constants/UserProfiles";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SofiaSansRegular: require("../assets/fonts/SofiaSans-Regular.ttf"),
    SofiaSansBold: require("../assets/fonts/SofiaSans-Bold.ttf"),
    SofiaSansItalic: require("../assets/fonts/SofiaSans-Italic.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  // Wait for fonts to load before showing the home page
  useEffect(() => {
    if (loaded) {
      loadUserProfiles();
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const loadUserProfiles = async () => {
  try {
    const personas = userProfiles;
    await AsyncStorage.setItem("personas", JSON.stringify(personas));
  } catch (error) {
    console.error("Error storing data:", error);
  }
};

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="home(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
