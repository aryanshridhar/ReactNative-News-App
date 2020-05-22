import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewsCarousel from './Components/NewsCarousel'

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {{flex : 1 ,backgroundColor : "#fff" , flexDirection : "column" , width : '100%'}}>
        <View style = {{paddingLeft : 20 , paddingTop : 50}}>
          <Text style = {{opacity : 0.5}}>WEDNESDAY , NOVEMBER 29</Text>
          <Text style = {{fontSize : 30 , fontWeight : "bold"}}>Top News</Text>
        </View>
        <View style = {{justifyContent : "center" , alignItems : "center" , flex : 1 , paddingTop : 25}}>
          <NewsCarousel/>
        </View>
      </View>
      <View style = {{flex : 0.7 ,backgroundColor : "white" ,flexDirection : "row" , width : '100%' , borderTopColor : "floralwhite" , borderWidth : 1}}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
