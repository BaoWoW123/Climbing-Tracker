import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fontDefault: {
        fontFamily:'Verdana',
    },
    container: {
      backgroundColor: 'lightgray',
      alignItems: 'center',
      justifyContent:'center'
    },
    bottomNavBar: {
        backgroundColor:'dodgerblue',
        color:'white',
    },
    content: {
        display:'flex',
        alignContent:'stretch'
    },
    dashboard: {
        fontSize:30,
        flexWrap:'wrap'
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