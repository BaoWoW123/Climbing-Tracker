import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fontDefault: {
        fontFamily:'Verdana',
    },
    container: {
      flex: 1,
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
        fontSize:'30',
        flexWrap:'wrap'
    }
  });
  
  export default styles;