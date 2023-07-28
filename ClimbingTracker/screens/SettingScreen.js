import { View, Text, useColorMode, Switch } from "native-base";
import { StatusBar } from "react-native";
import React from "react";
import styles from "../styles/styles";

const SettingScreen = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleColorMode = () => {
    toggleColorMode();
    StatusBar.setBarStyle(`${colorMode}-content`);
  };
  return (
    <View flex="1" style={styles.container}>
      <Text>Dark Mode {colorMode}</Text>
      <Switch
        offThumbColor={"white"}
        onTrackColor="black"
        onThumbColor={"white"}
        value={colorMode === "dark"}
        onValueChange={handleColorMode}
      />
    </View>
  );
};

export default SettingScreen;
