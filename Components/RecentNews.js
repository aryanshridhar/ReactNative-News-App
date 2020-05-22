import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { sliderWidth, sliderItemWidth } from './CarouselStyle';
import Card from './Card';

export default class RecentNews extends Component {
  state = {
    data: [
      {
        title: '1'
      },
      {
        title: '2'
      },
      {
        title: '3'
      },
      {
        title: '4'
      },
    ],
  };

  renderListComponent = ({ item }) => (
    <Card title={item.title} />
  );

  render() {
    return (
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop : 8,
    backgroundColor: '#fff',
  },
});
