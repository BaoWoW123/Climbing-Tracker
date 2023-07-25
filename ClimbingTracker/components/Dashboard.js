import React, { useState, useRef } from "react";
import { Text, Dimensions } from "react-native";
import { DateTime } from "luxon";
import styles from "../styles/styles";
import ProgressCircle from "./ProgressCircle";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Box, Center, Flex, ScrollView, Button, HStack } from "native-base";
import { gradeArr, colorArr } from "../constants/grades";

const Dashboard = (props) => {
  const scrollViewRef = useRef(null);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const date = DateTime.now().toLocaleString();
  let dailyRoutes = 3; //sample input
  let dailyGoal = 10;
  let percent = dailyRoutes / dailyGoal;
  let remainder = percent >= 1 ? "" : dailyGoal - dailyRoutes;
  let totalRoutes = 24;
  let grades = [];
  const [grade, setGrade] = useState(null);

  const handleScrollToIdx = (idx) => {
    setSelectedIdx(idx);

    if (scrollViewRef.current)
      scrollViewRef.current.scrollTo({ x: idx * 125, animated: true });
  };

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
      <Center flex="1">
        <Text>1</Text>
      </Center>
      <Flex flex="1">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
        >
          <HStack space="2">
            {gradeArr.map((el, idx) => {
              return (
                <Box key={idx}>
                  <Button
                    rounded="10"
                    bg={`${colorArr[idx]}`}
                    size={120}
                    _text={{ fontSize: "3xl" }}
                    onPress={() => {
                      setGrade(idx);
                      handleScrollToIdx(idx - 1);
                    }}
                    style={{
                      borderWidth: 5,
                      borderColor: idx - 1 == selectedIdx ? "white" : "black",
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
