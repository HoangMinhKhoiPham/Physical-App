import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, {useContext, useEffect} from "react";
import { useColorScheme } from "@/components/useColorScheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
    InriaSerifRegular: require("../assets/fonts/InriaSerif-Regular.ttf"),
    InriaSerifBold: require("../assets/fonts/InriaSerif-Bold.ttf"),
    InriaSerifItalic: require("../assets/fonts/InriaSerif-Italic.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  // Wait for fonts to load before showing the home page
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  let token;
  // @ts-ignore
  useEffect(() => {
    (async () => {
      token = await AsyncStorage.getItem('userData')
    })()
  }, [])
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {token ? (
                <Stack.Screen name="home(tabs)" options={{ headerShown: false }} />
            ):
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        }
      </Stack>
    </ThemeProvider>
  );
}
