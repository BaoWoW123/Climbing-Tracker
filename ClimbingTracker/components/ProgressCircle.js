import CircularProgress from "react-native-circular-progress-indicator";

const ProgressCircle = (props) => {
  return (
    <CircularProgress
      value={props.value * 100}
      valueSuffix={"%"}
      duration={1500}
      radius={100}
      circleBackgroundColor="white"
      activeStrokeColor="dodgerblue"
      activeStrokeSecondaryColor='darkblue'
      inActiveStrokeColor="skyblue"
    />
  );
};

export default ProgressCircle;
