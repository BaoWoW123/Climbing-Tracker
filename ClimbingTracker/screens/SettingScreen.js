import { View, Text, useColorMode, Switch } from "native-base";
import { StatusBar } from "react-native";
import React, { useEffect } from "react";
import styles from "../styles/styles";

const SettingScreen = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleColorMode = () => {
    StatusBar.setBarStyle(`${colorMode}-content`);
    toggleColorMode();
  };

  return (
    <View flex="1" style={styles.container}>
      <Text>Dark Mode {colorMode}</Text>
      <Switch
        offThumbColor="white"
        onTrackColor='rose.500'
        onThumbColor='white'
        offTrackColor="gray.500"
        value={colorMode === "dark"}
        onValueChange={handleColorMode}
      />
    </View>
  );
};

export default SettingScreen;
