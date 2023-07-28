import React from "react";
import HomeComponent from "../components/HomeComponent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GradeScreen from "./GradesScreen";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeMain"
          component={HomeComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Grades" component={GradeScreen} />
      </Stack.Navigator>
  );
};

export default HomeScreen;
