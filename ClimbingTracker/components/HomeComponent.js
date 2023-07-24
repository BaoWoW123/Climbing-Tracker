import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import { View, Text } from 'react-native';
import styles from "../styles/styles";
import { Flex } from "native-base";

const HomeComponent = (props) => {
    return (
        <View style={styles.container}>
            <Text>Home Page</Text>
            <Flex flexDir='row' align='center'>
        Grading Scale 
            <Icon name='information-outline' size={40}onPress={()=>{props.navigation.navigate('Grades')}}/>
        </Flex>
        </View>
        )
}

export default HomeComponent;