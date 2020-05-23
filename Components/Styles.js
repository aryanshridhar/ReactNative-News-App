import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    topview : {
        flex : 1 ,
        backgroundColor : "#fff" , 
        flexDirection : "column" , 
        width : '100%'
    },
    headtext : {
        paddingLeft : 20 , 
        paddingTop : 50
    },
    datetext : {
      opacity : 0.5
    },
    newstext : {
      fontSize : 30 , 
      fontWeight : "bold"
    },
    topcarousel : {
      justifyContent : "center" , 
      alignItems : "center" , 
      flex : 1 , 
      paddingTop : 20
    },
    bottomview : {
      flex : 0.8 ,
      backgroundColor : "white" ,
      flexDirection : "row" ,
      width : '100%' , 
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 24
    },
    bottomnews : {
      flex : 1 ,
      backgroundColor : "#fff" , 
      flexDirection : "column" , 
      width : '100%'
    },
    recentnews :{
      paddingLeft : 20 , 
      paddingTop : 10
    },
    news : {
      fontSize : 23 , 
      fontWeight : "bold"
    },
    bottomcarousel : {
      justifyContent : "center" , 
      alignItems : "center" , 
      flex : 1 , 
      paddingTop : 20,
    }
  });
  
export default styles;