import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { RootStack } from "./src/types";
import { StudentScreen } from "./src/screens/StudentScreen";
import { ExploreScreen } from "./src/screens/ExploreScreen";
import { DetailScreen } from "./src/screens/DetailScreen";
import { c } from "./src/theme";
const Stack = createNativeStackNavigator<RootStack>();
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <NavigationContainer
        theme={{
          ...DarkTheme,
          colors: {
            ...DarkTheme.colors,
            background: c.bg,
            card: c.panel,
            primary: c.purple,
            text: c.text,
            border: c.border,
          },
        }}
      >
        <Stack.Navigator
          initialRouteName="Student"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: c.bg },
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen name="Student" component={StudentScreen} />
          <Stack.Screen name="Explore" component={ExploreScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
