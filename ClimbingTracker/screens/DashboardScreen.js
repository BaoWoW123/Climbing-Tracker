import React from "react";
import Dashboard from "../components/Dashboard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GradeScreen from "./GradesScreen";

const Stack = createNativeStackNavigator();

const DashboardScreen = (props) => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="DashboardMain"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Grades" component={GradeScreen} />
      </Stack.Navigator>
  );
};

export default DashboardScreen;
