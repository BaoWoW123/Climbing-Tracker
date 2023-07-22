import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import RoutesScreen from "./screens/RoutesScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DashboardScreen from "./screens/DashboardScreen";
import SettingScreen from "./screens/SettingScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          activeTintColor: "dodgerblue",
          inactiveTintColor: "gray",
          activeBackgroundColor: "lightgray",
          inactiveBackgroundColor: "white",
          labelStyle: {
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 5,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="home" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            tabBarLabel: "Dashboard",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="calendar-blank-outline" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Routes"
          component={RoutesScreen}
          options={{
            tabBarLabel: "Routes",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="atlassian" size={size} color={color} />;
            },
          }}
        />
                <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="account" size={size} color={color} />;
            },
          }}
        />
                <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="cog" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
