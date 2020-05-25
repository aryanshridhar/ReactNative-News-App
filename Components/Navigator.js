import React , {Component} from "react";
import { BottomNavigation } from 'react-native-paper';
import { StyleSheet , View , ActivityIndicator} from "react-native";
import LandingScreen from "./LandingScreen";
import Categories from "./Categories";
import publicIP from 'react-native-public-ip';
import styles from './Styles'



class Navigator extends Component {
  state = {
    country : null,
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'album' , color : "#1B2433"},
      { key: 'category', title: 'Category', icon: 'library' , color : "#1B2433"},
    ],
  };


  componentDidMount()
  {
      publicIP()
      .then(ip => {
          fetch(`http://ip-api.com/json/${ip}`)
          .then((resp) => {
              return resp.json();
          })
          .then((data) => {
              this.setState({country : data.countryCode});
          })
          .catch((error) => {
              console.log(error);
          })
      })
      .catch(error => {
          console.log(error);
      });
  }

  LandingRoute = () => {
    return(
      <LandingScreen country = {this.state.country}/>
    )
  }
  
  
  CategoriesRoute = () => {
    return(
      <Categories country = {this.state.country}/>
    )
  }

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: this.LandingRoute,
    category : this.CategoriesRoute
  });

  render() {
    if(!this.state.country){
      return (
          <View style = {styles.center}>
              <ActivityIndicator animating = {true} size="large" color="#38264E" />
          </View>
      )
    } 
    return (
      
      <BottomNavigation
        activeColor = {'white'}
        style = {{backgroundColor : '#1B2433'}}
        navigationState={this.state}
        barStyle = {customstyles.navigatorstyle}
        renderScene={this._renderScene}
        shifting = {true}
        onIndexChange = {this._handleIndexChange}
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