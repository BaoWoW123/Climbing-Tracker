import React from "react";
import { View, Text, Button } from 'react-native';
import styles from "../styles/styles";

const HomeComponent = (props) => {
    return (
        <View>
            <Text>Home Page</Text>
            <Button title='Press me' onPress={()=>{alert('pressed')}}/>
            <Button title='Routes' onPress={()=>{props.navigation.navigate('Routes')}}/>
        </View>
        )
}

export default HomeComponent;