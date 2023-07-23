import React from "react";
import { View, Text, Button } from "react-native";
import Dashboard from "../components/Dashboard";
import styles from "../styles/styles";

const DashboardScreen = (props) => {
    return (
        <View style={styles.container}>
            <Dashboard/>
        </View>
    )
}

export default DashboardScreen;