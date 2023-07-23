import React, { useState } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import Overlay from "react-native-modal-overlay";

const Grades = () => {
  const [visible, setVisible] = useState(false);
  const [detail, setDetail] = useState("");
  const hideModal = () => setVisible(false);
  const showModal = (description) => {
    setDetail(description);
    setVisible(true);
  };

  return (
    <View>
      <Button
        title="V0"
        onPress={() =>
          showModal(
            "For climbers of all different levels, this grade is the easiest and where everyone starts out."
          )
        }
      />
      <Button
        title="V1"
        onPress={() =>
          showModal("Still easy, but can be a challenge to a new climber.")
        }
      />
      <Button
        title="V2"
        onPress={() =>
          showModal(
            "Slightly more challenging for new climbers. This difficulty can be where inexperienced climbers may start to struggle"
          )
        }
      />
      <Button
        title="V3"
        onPress={() =>
          showModal(
            "Getting to intermediate/advance difficulty, most novice climbers will spend their time climbing at this grade before moving onto the next."
          )
        }
      />
      <Button
        title="V4"
        onPress={() =>
          showModal(
            "You're getting to the fun stuff! Routes at this grade have a higher demand for finger strength and technique."
          )
        }
      />
      <Button
        title="V5"
        onPress={() =>
          showModal(
            "At this level, climbers have a sturdy foundation of climbing techniques, body movement precision, and strength."
          )
        }
      />
      <Button
        title="V6"
        onPress={() =>
          showModal(
            "Climbers at this grade, are close to becoming proficient and advanced climbers. Routes can be confusing to solve, physically demanding of finger strength, but satisfying to complete."
          )
        }
      />
      <Button
        title="V7+"
        onPress={() =>
          showModal(
            "Anything at this professional grade and above are for the freakishly strong, almost being able to hold onto basically nothing and stand on the tiniest holds known to mankind."
          )
        }
      />
      <Overlay visible={visible} onClose={hideModal} closeOnTouchOutside>
        <Button title="Close" onPress={hideModal}></Button>
        <Text>{detail}</Text>
      </Overlay>
    </View>
  );
};

export default Grades;
