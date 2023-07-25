import React from "react";
import Dashboard from "../components/Dashboard";
import { NativeBaseProvider } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GradeScreen from "./GradesScreen";

const Stack = createNativeStackNavigator();

const DashboardScreen = (props) => {
  return (
    <NativeBaseProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="DashboardMain"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Grades" component={GradeScreen} />
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

export default DashboardScreen;
