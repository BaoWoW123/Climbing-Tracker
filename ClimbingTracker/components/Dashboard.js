import React, { useState } from "react";
import { Text } from "react-native";
import { DateTime } from "luxon";
import styles from "../styles/styles";
import ProgressCircle from "./ProgressCircle";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Box, Center, Flex, ScrollView, Button, HStack } from "native-base";
import { gradeArr, colorArr } from "../constants/grades";

const Dashboard = (props) => {
  const date = DateTime.now().toLocaleString();
  let dailyRoutes = 3; //sample input
  let dailyGoal = 10;
  let percent = dailyRoutes / dailyGoal;
  let remainder = percent >= 1 ? "" : dailyGoal - dailyRoutes;
  let totalRoutes = 24;
  let grades = [];

  const [grade, setGrade] = useState(null);

  return (
    <Flex align="center" bg="blue.100" flex="1">
      <Center p={3} gap={2} minW="100%">
        <ProgressCircle value={percent} />
        <Center minW="100%" _text={{ fontSize: "xl" }}>
          <Box _text={{ fontSize: "3xl", fontWeight: "bold" }}>{remainder}</Box>
          <Center _text={{ fontSize: "xl" }}>
            more routes to reach daily goal!
          </Center>
        </Center>
      </Center>
      <Text style={styles.dashboard}>
        Routes Completed Today: {totalRoutes}
      </Text>
      <Flex flexDir="row" align="center">
        Grading Scale
        <Icon
          name="information-outline"
          size={30}
          onPress={() => props.navigation.navigate("Grades")}
        ></Icon>
      </Flex>
      <Center flex="1" minW="100%">
        <Text>{grade}</Text>
      </Center>
      <Flex flex="1">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space={1}>
            {gradeArr.map((el, idx) => {
              return (
                <Box key={idx}>
                  <Button
                    bg={`${colorArr[idx]}`}
                    size={125}
                    _text={{ fontSize: "3xl" }}
                    onPress={() => {
                      setGrade(idx);
                    }}
                  >
                    {`V${el}`}
                  </Button>
                </Box>
              );
            })}
          </HStack>
        </ScrollView>
      </Flex>
    </Flex>
  );
};

/* 
     
     
 */

export default Dashboard;
