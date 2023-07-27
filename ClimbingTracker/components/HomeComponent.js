import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import styles from "../styles/styles";
import { Icon, View, Button, Flex, Text, Center} from "native-base";

const HomeComponent = (props) => {
    return (
        <View style={styles.container} flex='1'>
            <Text>Home Page</Text>
            <Flex flexDir='row' align='center'>
        Grading Scale {''}
            <Icon as={MaterialCommunityIcons} name='information-outline' size='5' onPress={()=>{props.navigation.navigate('Grades')}}/>
        </Flex>
        <Center flex='1' width='100%' justifyContent='center'>
            <Button>
                This button does nothing
            </Button>
        </Center>
        </View>
        )
}

export default HomeComponent;