import {
  Box,
  Flex,
  ScrollView,
  Button,
  Divider,
  Center,
  HStack,
} from "native-base";
import React, { useState } from "react";
import Grades from "../components/Grades";
import { gradeArr, colorArr } from "../constants/grades";

const GradeScreen = (props) => {
  const [grade, setGrade] = useState(null);
  return (
    <Flex flex="1">
      <Flex align="center" justify="center" p={2} bg="blue.100">
        In bouldering, grades are a way to measure the difficulty of a climb or
        route. Grades are usually represented by a number or color system. The
        higher the number, the more difficult the route. Displayed below is the
        grade, their description, and the estimated time required to reach the
        grade.
      </Flex>
      <Divider />
      <Box flex="1">
        <Grades grade={grade} />
        <ScrollView
          bg={"blue.100"}
          horizontal
          showsHorizontalScrollIndicator="false"
          flex="1"
        >
          <HStack space={1}>
            {gradeArr.map((el, idx) => {
              return (
                <Center key={idx}>
                  <Button
                    bg={`${colorArr[idx]}`}
                    size={125}
                    rounded={0}
                    _text={{ fontSize: "5xl" }}
                    onPress={() => {
                      setGrade(idx);
                    }}
                  >
                    {`V${el}`}
                  </Button>
                </Center>
              );
            })}
          </HStack>
        </ScrollView>
      </Box>
    </Flex>
  );
};

export default GradeScreen;
