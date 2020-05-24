import React from 'react';
import { View, Text , Image , TouchableOpacity} from 'react-native'; 
import styles from './Styles';

const Card = ({ image, title }) => (
<TouchableOpacity activeOpacity = {0.7} style = {styles.touchstyle}>
  <View
    style={styles.card}
  >
    <Image style = {styles.cardimage} source = {{uri : image}}/>
  </View>
  <Text style = {styles.cardtext}>{title}</Text>
  </TouchableOpacity>
);

export default Card;
