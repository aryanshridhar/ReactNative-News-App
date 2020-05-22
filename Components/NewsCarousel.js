import Carousel,{ Pagination }  from 'react-native-snap-carousel';
import React ,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native'

class NewsCarousel extends Component {

    state ={
        activeIndex:0,
        carouselItems: [
            {
                title:"Item 1",
                text: "Text 1",
            },
            {
                title:"Item 2",
                text: "Text 2",
            },
            {
                title:"Item 3",
                text: "Text 3",
            },
            {
                title:"Item 4",
                text: "Text 4",
            },
            {
                title:"Item 5",
                text: "Text 5",
            },
        ]
    }
 
    _renderItem = ({item, index}) => {
        return (
            <View style={{
                backgroundColor:'black',
                borderRadius: 5,
                height: 350,
                marginLeft: 25,
                marginRight: 25, 
                }}>
              <Text style={{fontSize: 30}}>{item.title}</Text>
              <Text>{item.text}</Text>
            </View>
        );
    }

    get pagination () {
        return (
            <Pagination
              dotsLength={this.state.carouselItems.length}
              activeDotIndex={this.state.activeIndex}
              dotStyle={{
                  marginHorizontal: 8,
              }}
              inactiveDotOpacity={0.3}
              inactiveDotScale={0.6}
            />
        );
    }

 
    render () {
        return (
            <View>
                <Carousel
                layout = {"default"}
                data={this.state.carouselItems}
                renderItem={this._renderItem}
                sliderWidth = {500}
                itemWidth={400}
                onSnapToItem={(index) => this.setState({ activeIndex: index }) }
                />

                { this.pagination }
            </View>
        );
    }
}

export default NewsCarousel;