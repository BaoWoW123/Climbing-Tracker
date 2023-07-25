import { Box, Center, HStack ,Icon,IconButton, Stagger, useDisclose } from "native-base";
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons'
const StaggerBtns = () => {
    const {
      isOpen,
      onToggle
    } = useDisclose();
    return <Center>
        <Box alignItems="center">
          <Stagger visible={isOpen} initial={{
          opacity: 0,
          scale: 0,
          translateY: 34
        }} animate={{
          translateY: 0,
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            mass: 0.8,
            stagger: {
              offset: 30,
              reverse: true
            }
          }
        }} exit={{
          translateY: 20,
          scale: 0.5,
          opacity: 0,
          transition: {
            duration: 100,
            stagger: {
              offset: 30,
              reverse: true
            }
          }
        }}>
            <IconButton mb="4" variant="solid" bg="red.500" colorScheme="red" borderRadius="full" icon={<Icon as={MaterialCommunityIcons} size="3" name="photo-library" _dark={{
            color: "warmGray.50"
          }} color="warmGray.50" />} />
          </Stagger>
        </Box>
        <HStack alignItems="center">
          <IconButton variant="solid" borderRadius="full" size="lg" onPress={onToggle} bg="cyan.400" icon={<Icon as={MaterialCommunityIcons} size="3" name="dots-horizontal" color="warmGray.50" _dark={{
          color: "warmGray.50"
        }} />} />
        </HStack>
      </Center>;
  };

  export default StaggerBtns;