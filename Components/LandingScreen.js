import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewsCarousel from './NewsCarousel'
import RecentNews from './RecentNews'

class LandingScreen extends Component{

    render(){

        return (
            <View style={styles.container}>
            <View style = {{flex : 1 ,backgroundColor : "#fff" , flexDirection : "column" , width : '100%',}}>
                <View style = {{paddingLeft : 20 , paddingTop : 50}}>
                    <Text style = {{opacity : 0.5}}>WEDNESDAY , NOVEMBER 29</Text>
                    <Text style = {{fontSize : 30 , fontWeight : "bold"}}>Top News</Text>
                </View>
                <View style = {{justifyContent : "center" , alignItems : "center" , flex : 1 , paddingTop : 20}}>
                    <NewsCarousel/>
                </View>
            </View>
            <View style = {{flex : 0.8 ,backgroundColor : "white" ,flexDirection : "row" , width : '100%' , shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,
elevation: 24,}}>

            <View style = {{flex : 1 ,backgroundColor : "#fff" , flexDirection : "column" , width : '100%',}}>
                <View style = {{paddingLeft : 20 , paddingTop : 10}}>
                    <Text style = {{fontSize : 23 , fontWeight : "bold"}}>Recent News</Text>
                </View>
                <View style = {{justifyContent : "center" , alignItems : "center" , flex : 1 , paddingTop : 20}}>
                    <RecentNews/>
                </View>
            </View>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LandingScreen;