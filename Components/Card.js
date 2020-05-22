import React from 'react';
import { View, Text } from 'react-native'; 
import { sliderItemWidth, sliderItemHorizontalMargin } from './CarouselStyle';

const Card = ({ title }) => (
<View>
  <View
    style={{
      width: sliderItemWidth,
      height: 100,
      marginLeft : 20,
      marginHorizontal: sliderItemHorizontalMargin,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
    }}
  >
  </View>
  <Text style = {{marginLeft : 20}}></Text>
  </View>
);

export default Card;
