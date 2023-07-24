import React from "react";
import { View, Text, Button } from "react-native";
import { DateTime } from "luxon";
import styles from "../styles/styles";
import ProgressCircle from "./ProgressCircle";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Flex } from "native-base";

const Dashboard = ({navigation}) => {
  const date = DateTime.now().toLocaleString();
  let dailyRoutes = 3; //sample input
  let dailyGoal = 10;
  let percent = dailyRoutes/dailyGoal;
  let remainder = (percent >=1 ) ? '': dailyGoal - dailyRoutes;
  let totalRoutes = 24;
  let grades = [];
  return (
    <View style={{display:'flex',alignItems:'center'}}>
        <ProgressCircle value={percent}/>
        <Text style={{fontSize:15}}> Complete {remainder} more routes to achieve daily goal!</Text>
        <Text style={styles.dashboard}>Routes Completed Today: {totalRoutes}</Text>
        <Flex flexDir='row' align='center'>
        Grading Scale 
        <Icon name='information-outline' size={30} onPress={()=>navigation.navigate('Grades') }></Icon>
        </Flex>
    </View>
  );
};

export default Dashboard;
