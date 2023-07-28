import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Theme from "./styles/Theme";
import { StatusBar } from "react-native";
import { Box, NativeBaseProvider } from "native-base";
import BottomTabs from "./components/BottomTabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={Theme}>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTabs"
            children={() => (
              <Box flex={1} variant={"safeArea"} safeArea>
                <BottomTabs />
              </Box>
            )}
            options={() => ({
              headerShown: false,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
