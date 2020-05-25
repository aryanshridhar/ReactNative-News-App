import Carousel , {Pagination} from 'react-native-snap-carousel';
import React ,{Component} from 'react';
import { Text, View ,  TouchableOpacity, Image ,Dimensions} from 'react-native'
import styles from './Styles';

const fullwidth = Dimensions.get('window').width;

class RecentCarousel extends Component {

    state ={
        activeIndex:0,
        carouselItems: this.props.links,
    }
 
    handlepress = () =>{
        this.props.openurl(this.state.activeIndex)
    }

    _renderItem = ({item, index}) => {
        return (
            <View style = {{flexDirection : "column",  justifyContent : "center" , alignItems : "center"}}>
                <TouchableOpacity activeOpacity = {0.8} onPress = {this.handlepress} style={styles.allcarouseltext}>
                <Image style ={styles.allcarouselimage} source = {{uri : item.link}}/>
                </TouchableOpacity>
                <View style = {styles.allcarouselview}>
                    <Text style = {styles.allcarouseltitle}>{item.title}</Text>
                </View>
            </View>
        );
    }

    get pagination () {
        return (
            <Pagination
              dotsLength={this.state.carouselItems.length}
              activeDotIndex={this.state.activeIndex}
              dotStyle={{
                  borderRadius: 5,
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }
 
    render () {
        return (
            <View style = {{paddingBottom : 30}}>
                <Carousel
                layout = {"default"}
                data={this.state.carouselItems}
                renderItem={this._renderItem}
                sliderWidth = {fullwidth}
                itemWidth={fullwidth}
                onSnapToItem={(index) => this.setState({ activeIndex: index }) }
                />

                {this.pagination}
            </View>
        );
    }
}

export default RecentCarousel;