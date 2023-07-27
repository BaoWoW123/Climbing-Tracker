import { View, Text, colorMode, useColorMode, Switch } from "native-base";
import React from "react";
import styles from "../styles/styles";

const SettingScreen = (props) => {
    const {colorMode, toggleColorMode} = useColorMode();


    return (
        <View  flex='1' style={styles.container}>
            <Text>
                Dark Mode {colorMode}
            </Text>
              <Switch offThumbColor={'white'} onTrackColor='black' onThumbColor={'white'}
              value={colorMode ==='dark'}
                onValueChange={() =>toggleColorMode()}
              />
        </View>
    )
}

export default SettingScreen;