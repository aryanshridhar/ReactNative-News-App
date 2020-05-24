import React, { Component } from 'react'
import { View , Modal , Text, ScrollView , Image } from 'react-native';
import Header from './Header'


class Article extends Component {
    render() {

        return (
            <React.Fragment>
                <Modal visible = {this.props.visible} animationType = {'slide'}>
                    <Header hidevisibility = {this.props.hidevisibility}/>
                <ScrollView>
                    <Text></Text>
                    <Image style = {{width : 400 , height : 400}} source = {{uri : this.props.data['urlToImage']}} />
                </ScrollView>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Article;
