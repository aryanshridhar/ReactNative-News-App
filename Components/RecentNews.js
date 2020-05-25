import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, sliderItemWidth } from './CarouselStyle';
import Card from './Card';
import styles from './Styles'

export default class RecentNews extends Component {
  state = {
    data: this.props.links
  };

  renderListComponent = ({ item }) => (
    <Card image = {item.link} title={item.title} url = {item.url} />
  );

  render() {
    return (
      <View style={styles.carouselcontainer}>
        <Carousel
          data={this.state.data}
          renderItem={this.renderListComponent}
          sliderWidth={sliderWidth}
          itemWidth={sliderItemWidth}
          activeSlideAlignment={'start'}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
        />
      </View>
    );
  }
}
