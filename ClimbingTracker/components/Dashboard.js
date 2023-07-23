import React from "react";
import { View, Text, Button } from "react-native";
import { DateTime } from "luxon";
import styles from "../styles/styles";
import ProgressCircle from "./ProgressCircle";

const Dashboard = (props) => {
  const date = DateTime.now().toLocaleString();
  let dailyRoutes = 3; //sample input
  let dailyGoal = 10;
  let percent = dailyRoutes/dailyGoal;
  let remainder = (percent >=1 ) ? '': dailyGoal - dailyRoutes;
  let totalRoutes = 24;
  let grades = [];
  return (
    <View style={{display:'flex', alignItems:'center'}}>
        <ProgressCircle value={percent}/>
        <Text style={{fontSize:15}}> Complete {remainder} more routes to achieve daily goal!</Text>
        <Text style={styles.dashboard}>Routes Completed Today: {totalRoutes}</Text>
<Button title="V0"></Button>
<Button title="V1"></Button>
<Button title="V2"></Button>
<Button title="V3"></Button>
<Button title="V4"></Button>
<Button title="V5"></Button>

    </View>
  );
};

export default Dashboard;
