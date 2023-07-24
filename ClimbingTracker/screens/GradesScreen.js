import {
  Box,
  Flex,
  ScrollView,
  VStack,
  Button,
} from "native-base";
import React, { useState } from "react";
import Grades from "../components/Grades";

const GradeScreen = (props) => {
  const [grade, setGrade] = useState(null);
  const datArr = ['0','1','2','3','4','5','6','7+'];
  const colorArr = [
    "darkBlue.400",
    "blue.400",
    "green.500",
    "green.400",
    "lime.400",
    "yellow.400",
    "orange.400",
    "red.400",
  ];
  return (
    <Flex direction="row">
      <ScrollView  bg={'white'} >
        <VStack space={1}>
          {datArr.map((el, idx) => {
            return (
              <Box >
                <Button bg={`${colorArr[idx]}`} size={200} rounded={0} _text={{fontSize:'5xl'}}
                  onPress={() => {
                    setGrade(idx);
                  }}
                >
                  {`V${el}`}
                </Button>
              </Box>
            );
          })}
        </VStack>
      </ScrollView>
      <Grades grade={grade} style={{flex:1}}/>
    </Flex>
  );
};

export default GradeScreen;
