import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Theme from "./styles/Theme"; 
import { NativeBaseProvider } from "native-base";
import BottomTabs from "./components/BottomTabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={Theme}>
      <NavigationContainer>
        <SafeAreaView style={{flex:1}}>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={({ navigation }) => ({ 
              headerShown: false })}
          />
        </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
