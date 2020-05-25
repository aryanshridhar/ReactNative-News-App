import React, { Component } from 'react';
import { View, Text , Image , TouchableOpacity, Linking} from 'react-native'; 
import styles from './Styles';


class Card extends Component {

  openurl = () => {
    Linking.openURL(this.props.url);
  }

  render()
  {
    return(
      <TouchableOpacity onPress = {this.openurl} activeOpacity = {0.7} style = {styles.touchstyle}>
        <View style={styles.card}>
          <Image style = {styles.cardimage} source = {{uri : this.props.image}}/>
        </View>
        <Text style = {styles.cardtext}>{this.props.title}</Text>
      </TouchableOpacity>

    )
  }
}

export default Card;
