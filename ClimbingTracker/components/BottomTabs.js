import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
import RoutesScreen from "../screens/RoutesScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DashboardScreen from "../screens/DashboardScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingScreen from "../screens/SettingScreen";
import { useColorMode } from "native-base";
import Theme from "../styles/Theme";

const Tab = createMaterialTopTabNavigator();

const BottomTabs = () => {
  const { colorMode } = useColorMode();

  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: "white",
        },
        tabBarIconStyle: {
          width: "100%",
          height: "100%",
        },
        tabBarStyle: {
          backgroundColor:
            colorMode === "light"
              ? Theme.colors.light.primary
              : Theme.colors.dark.primary,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => {
            return <Icon name="home" size={25} color={color} />;
          },
        })}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={() => ({
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color }) => {
            return (
              <Icon name="calendar-blank-outline" size={25} color={color} />
            );
          },
        })}
      />
      <Tab.Screen
        name="Routes"
        component={RoutesScreen}
        options={() => ({
          tabBarLabel: "Routes",
          tabBarIcon: ({ color }) => {
            return <Icon name="atlassian" size={25} color={color} />;
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => {
            return <Icon name="account" size={25} color={color} />;
          },
        })}
      />
      <Tab.Screen
        name="Settings"
        children={() => <SettingScreen />}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => {
            return <Icon name="dots-vertical" size={25} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
