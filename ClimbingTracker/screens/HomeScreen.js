import React from "react";
import HomeComponent from "../components/HomeComponent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GradeScreen from "./GradesScreen";
import { NativeBaseProvider } from "native-base";

const Stack = createNativeStackNavigator();

const HomeScreen = (props) => {
  return (
    <NativeBaseProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeMain"
          component={HomeComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Grades" component={GradeScreen} />
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

export default HomeScreen;
