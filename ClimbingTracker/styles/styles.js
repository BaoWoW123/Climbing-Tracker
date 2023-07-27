import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fontDefault: {
        fontFamily:'Verdana',
    },
    container: {
      alignItems: 'center',
      justifyContent:'center',
    },
    bottomNavBar: {
        color:'white',
    },
    content: {
        display:'flex',
        alignContent:'stretch'
    },
    gradeScreen: {
        display:'flex',
        flexDirection:'row'
    },
    gradeText: {
        fontSize:20,
    },
    gradeFooter: {
        fontSize:20,
    }
  });
  
  export default styles;