import React from "react";
import { Text, Flex, Box, Center } from "native-base";
import styles from "../styles/styles";
const Grades = ({ grade }) => {
  switch (`${grade}`) {
    case "0":
      return (
        <Flex p="2" flex="1">
          <Center>
            <Text fontSize="3xl">V0</Text>
          </Center>
          <Text style={styles.gradeText} flex="1">
            For climbers of all different levels, this grade is the easiest and
            where everyone starts out. Some first-timers can flash these!
          </Text>
          <Center>First climbing session</Center>
        </Flex>
      );
    case "1":
      return (
        <Flex p="2" flex="1">
          <Center>
            <Text fontSize="3xl">V1</Text>
          </Center>
          <Text style={styles.gradeText} flex={1}>
            Still easy, but can be a challenge to a new climber. Just know this
            is where the addiction starts to settle in.
          </Text>
          <Center>1-2 climbing sessions</Center>
        </Flex>
      );
    case "2":
      return (
        <Flex p="2" flex="1">
          <Center>
            <Text fontSize="3xl">V2</Text>
          </Center>
          <Text style={styles.gradeText} flex="1">
            Slightly more challenging for new climbers. This difficulty can be
            where inexperienced climbers may start to struggle
          </Text>
          <Center>1-2 week</Center>
        </Flex>
      );
    case "3":
      return (
        <Flex p="2" flex="1">
          <Center>
            <Text fontSize="3xl">V3</Text>
          </Center>
          <Text style={styles.gradeText} flex="1">
            Getting to intermediate difficulty, most climbers at this level will
            spend their time climbing at this grade before moving onto the next.
            The progression from V3 to V4 usually pose the first plateau for
            climbers.
          </Text>
          <Center>2-4 weeks</Center>
        </Flex>
      );
    case "4":
      return (
        <Flex p="2" flex="1">
          <Center>
            <Text fontSize="3xl">V4</Text>
          </Center>
          <Text style={styles.gradeText} flex="1">
            You're getting to the fun stuff! Routes at this grade have a higher
            demand for finger strength and techniques.
          </Text>
          <Center>1-3 months</Center>
        </Flex>
      );
    case "5":
      return (
        <Flex p="2" flex="1">
          <Center>
            <Text fontSize="3xl">V5</Text>
          </Center>
          <Text style={styles.gradeText} flex="1">
            At this level, climbers have a sturdy foundation of climbing
            techniques, body movement precision, and strength.
          </Text>
          <Center>3-6 months</Center>
        </Flex>
      );
    case "6":
      return (
        <Flex p="2" flex="1">
          <Center>
            <Text fontSize="3xl">V6</Text>
          </Center>
          <Text style={styles.gradeText} flex="1">
            Climbers at this grade, are close to becoming proficient and
            advanced climbers. Routes can be confusing to solve, physically
            demanding of finger strength, but satisfying to complete.
          </Text>
          <Center>1-2 years</Center>
        </Flex>
      );
    case "7":
      return (
        <Flex p="2" flex="1">
          <Center>
            <Text fontSize="3xl">V7+</Text>
          </Center>
          <Text style={styles.gradeText} flex="1">
            Anything at this grade and above are for the freakishly strong,
            almost being able to hold onto basically nothing and stand on the
            tiniest holds known to mankind."
          </Text>
          <Center>2+ years</Center>
        </Flex>
      );
    default:
      return (
        <Flex p="2" flex="1">
          <Center flex="1">
            <Text style={styles.gradeText}>
              Select one of the grades below.
            </Text>
          </Center>
        </Flex>
      );
  }
};

export default Grades;
