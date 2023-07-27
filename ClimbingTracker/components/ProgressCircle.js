import { useColorMode } from "native-base";
import CircularProgress from "react-native-circular-progress-indicator";
import Theme from "../styles/Theme";

const ProgressCircle = (props) => {
  const { colorMode } = useColorMode();
  return (
    <CircularProgress
      value={props.value * 100}
      valueSuffix={"%"}
      duration={1500}
      radius={100}
      circleBackgroundColor ='transparent'
      activeStrokeColor= { colorMode === 'light' ? Theme.colors.light.primary: Theme.colors.dark.primary}
      activeStrokedarkColor= { colorMode === 'light' ? Theme.colors.light.dark:  Theme.colors.dark.dark}
      inActiveStrokeColor= { colorMode === 'light' ? Theme.colors.light.secondary: Theme.colors.dark.secondary}
    />
  );
};

export default ProgressCircle;
