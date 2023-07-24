import React, { useState } from "react";
import { Text } from "native-base";
import styles from "../styles/styles";
const Grades = ({ grade }) => {
  switch (`${grade}`) {
    case "0":
      return (
        <Text style={styles.gradeText}>
          For climbers of all different levels, this grade is the easiest and
          where everyone starts out.
        </Text>
      );
    case "1":
      return (
        <Text style={styles.gradeText}>
          Still easy, but can be a challenge to a new climber.
        </Text>
      );
    case "2":
      return (
        <Text style={styles.gradeText}>
          Slightly more challenging for new climbers. This difficulty can be
          where inexperienced climbers may start to struggle
        </Text>
      );
    case "3":
      return (
        <Text style={styles.gradeText}>
          Getting to intermediate/advance difficulty, most novice climbers will
          spend their time climbing at this grade before moving onto the next.
        </Text>
      );
    case "4":
      return (
        <Text style={styles.gradeText}>
          You're getting to the fun stuff! Routes at this grade have a higher
          demand for finger strength and technique.
        </Text>
      );
    case "5":
      return (
        <Text style={styles.gradeText}>
          At this level, climbers have a sturdy foundation of climbing
          techniques, body movement precision, and strength.
        </Text>
      );
    case "6":
      return (
        <Text style={styles.gradeText}>
          Climbers at this grade, are close to becoming proficient and advanced
          climbers. Routes can be confusing to solve, physically demanding of
          finger strength, but satisfying to complete.
        </Text>
      );
    case "7":
      return (
        <Text style={styles.gradeText}>
          Anything at this grade and above are for the freakishly strong, almost
          being able to hold onto basically nothing and stand on the tiniest
          holds known to mankind."
        </Text>
      );
    default:
      return (
        <Text style={styles.gradeText}>
          Choose one of the grades on the left!
        </Text>
      );
  }
};

export default Grades;
