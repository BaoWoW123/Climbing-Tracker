import React from "react";
import { View,Text } from "react-native";
import { Button } from "react-native";
import HomeComponent from "../components/HomeComponent";
import styles from "../styles/styles";

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <HomeComponent navigation={props.navigation}/>
            <Button title="SCREEN BUTTON TO ROUTES" onPress={()=>props.navigation.navigate('Routes')}/>
        </View>
    )
}

export default HomeScreen;