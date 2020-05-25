import Carousel from 'react-native-snap-carousel';
import React ,{Component} from 'react';
import { Text, View ,  TouchableOpacity, Image ,Dimensions} from 'react-native'
import styles from './Styles';

const fullwidth = Dimensions.get('window').width;

class NewsCarousel extends Component {

    state ={
        activeIndex:0,
        carouselItems: this.props.links,
    }
 
    handlepress = () =>{
        this.props.openurl(this.state.activeIndex)
    }

    _renderItem = ({item, index}) => {
        return (
            <View>
                <TouchableOpacity activeOpacity = {0.8} onPress = {this.handlepress} style={styles.carouseltext}>
                <Image style ={styles.carouselimage} source = {{uri : item.link}}/>
                </TouchableOpacity>
                <View style = {styles.carouselview}>
                    <Text style = {styles.carouseltitle}>{item.title}</Text>
                </View>
            </View>
        );
    }
 
    render () {
        return (
            <View>
                <Carousel
                layout = {"default"}
                data={this.state.carouselItems}
                renderItem={this._renderItem}
                sliderWidth = {fullwidth}
                itemWidth={fullwidth}
                onSnapToItem={(index) => this.setState({ activeIndex: index }) }
                />
            </View>
        );
    }
}

export default NewsCarousel;