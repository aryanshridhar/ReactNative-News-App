import {StyleSheet , Dimensions} from "react-native"
import { sliderItemWidth, sliderItemHorizontalMargin } from './CarouselStyle';

const fullheight = Dimensions.get('window').height;
const fullwidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

    // For landing page

    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    topview : {
      flex : 1.2,
      backgroundColor : "#38264E" , 
      flexDirection : "column" , 
      width : '100%'
    },
    headtext : {
        paddingLeft : 20 , 
        paddingTop : fullheight/14.724,
    },
    datetext : {
      opacity : 0.6,
      color : "#fff",
    },
    newstext : {
      fontSize : 30 , 
      fontWeight : "bold",
      color : "#fff",
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
      paddingTop : 10,
      flexDirection : "row"
    },
    news : {
      fontSize : 23 , 
      fontWeight : "bold",
      color : "#38264E",
    },
    moreview :{
      fontSize : 15,
      opacity :0.8,
      color : "#38264E",
      fontWeight : "700"
    },
    bottomcarousel : {
      justifyContent : "center" , 
      alignItems : "center" , 
      flex : 1 , 
      paddingTop : 10,
    },
    center : {
      flex : 1,
      flexDirection :'row',
      justifyContent : "center",
      alignItems : "center",
    },
    bottomtext : {
      flex : 1
    },
    allview : {
      flex : 1 , 
      flexDirection : "row" , 
      justifyContent : "flex-end" , 
      alignItems : "center" , 
      paddingRight : 25
    },
    // For Category Page

    fullview : {
      flex : 1 ,
      backgroundColor : "#fff" , 
      flexDirection : "column" , 
      width : '100%'
    },
    row : {
      flexDirection : "row",
      paddingRight : 20,
      paddingLeft : 20,
    },
    cell1 : {
      padding : fullheight/18.4068,
      shadowColor: "#000",
      borderRightWidth : 3,
      borderBottomWidth : 2,
      borderColor : "#38264E",
      flex : 1,
      flexDirection : 'column',
      justifyContent : "center",
      alignItems : "center",
    },
    cell2 : {
      padding :fullheight/18.4068,
      shadowColor: "#000",
      borderBottomWidth : 2,
      borderColor : "#38264E",
      flex : 1,
      flexDirection : 'column',
      justifyContent : "center",
      alignItems : "center",
    },
    categorytext : {
      fontSize : 30 , 
      fontWeight : "bold",
      color : "#38264E",
    },
    celltext : {
      color : "#38264E" , 
      fontSize : 18 , 
      fontWeight : "700"
    },

    //RecentNews

    carouselcontainer : {
      flex: 1,
      paddingTop : 8,
      backgroundColor: '#fff',
    },

    //Card

    card : {
      width: sliderItemWidth,
      height: fullheight/7.36,
      marginLeft : 20,
      marginHorizontal: sliderItemHorizontalMargin,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor : "black",
    },
    cardimage : {
      height : fullheight/7.36 , 
      width : sliderItemWidth
    },
    touchstyle : {
      paddingBottom : 20,
    },
    cardtext : {
      marginLeft : 20 , 
      color : "#38264E" , 
      fontSize : 14 , 
      paddingTop : 10
    },

    //NewsCarousel 

    carouseltext : {
      borderRadius: 5,
      height: fullheight/3.683,
      marginLeft: 25,
      marginRight: 25, 
    },
    carouselimage : {
      zIndex : 100 , 
      height : fullheight/3.683,
      resizeMode : "cover"
    },
    carouselview : {
      paddingTop : 10
    },
    carouseltitle : {
      color : "#fff" , 
      marginLeft : 25 , 
      marginRight : 25 , 
      fontSize : 16 , 
      flexWrap : "nowrap"
    },

    // RecentCarousel

    allcarouseltext : {
      borderRadius: 5,
      height: fullheight/2.5,
      width : fullwidth/1.2,
      marginLeft: 25,
      marginRight: 25, 
    },
    allcarouselimage : {
      zIndex : 100 , 
      height : fullheight/2.5,
      width : fullwidth/1.2,
      resizeMode : "cover"
    },
    allcarouselview : {
      paddingTop : 20,
      paddingLeft : 5,
    },
    allcarouseltitle : {
      color : "#38264E",
      marginLeft : 25 , 
      marginRight : 25 , 
      fontSize : 16 , 
      flexWrap : "nowrap"
    },

    // Article

    articleview : {
      flex : 1 , 
      flexDirection : "column"
    },
    articlebottom : {
      flex : 0.1, 
      justifyContent : "flex-end", 
      paddingLeft : 25
    },
    articleheading : {
      fontSize : 24 , 
      fontWeight : "bold",
      color : "#38264E" , 
      textTransform : "capitalize"
    },
    articlecarousel : {
      flex : 1 ,
      flexDirection : "column" , 
      justifyContent : "center",
      alignItems : "center",
      paddingTop : 35
    }

  });
  
export default styles;