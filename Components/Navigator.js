import React , {Component} from "react";
import { BottomNavigation, Text } from 'react-native-paper';
import { StyleSheet } from "react-native";
import LandingScreen from "./LandingScreen";


const LandingRoute = () => {
  return(
    <LandingScreen/>
  )
}
class Navigator extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'album' , color : "#1B2433"},
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: LandingRoute,
  });

  render() {
    return (
      <BottomNavigation
        activeColor = {'white'}
        style = {{backgroundColor : '#1B2433'}}
        navigationState={this.state}
        barStyle = {customstyles.navigatorstyle}
        renderScene={this._renderScene}
      />
    );
  }
}

export default Navigator

const customstyles = StyleSheet.create({
  navigatorstyle : {
    marginBottom  :10,
    backgroundColor : "#1B2433"
  }
})