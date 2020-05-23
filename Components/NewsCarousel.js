import Carousel,{ Pagination }  from 'react-native-snap-carousel';
import React ,{Component} from 'react';
import { StyleSheet, Text, View ,  TouchableOpacity, Image } from 'react-native'

class NewsCarousel extends Component {

    state ={
        activeIndex:0,
        carouselItems: this.props.links
    }
 
    handlepress = () =>{
        console.log('This is pressed')
    }

    _renderItem = ({item, index}) => {
        return (
            <TouchableOpacity activeOpacity = {0.8} onPress = {this.handlepress} style={{
                borderRadius: 5,
                height: 350,
                marginLeft: 25,
                marginRight: 25, 
                }}>
            <Image style ={{zIndex : 100 , height : 350 , resizeMode : "cover"}} source = {{uri : item.link}}/>
            </TouchableOpacity>
        );
    }

    get pagination () {
        return (
            <Pagination
              dotsLength={this.state.carouselItems.length}
              activeDotIndex={this.state.activeIndex}
              dotStyle={{
                  backgroundColor : "#fff",
                  marginHorizontal: 8,
              }}
              inactiveDotOpacity={0.3}
              inactiveDotScale={0.6}
              o

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