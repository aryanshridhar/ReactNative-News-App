import React, { Component } from 'react'
import { View , Modal } from 'react-native';
import Header from './Header'


class Article extends Component {
    render() {
        return (
            <View>
                <Modal visible = {this.props.visible} animationType = {'slide'}>
                    <Header hidevisibility = {this.props.hidevisibility}/>
                </Modal>
            </View>
        )
    }
}

export default Article;
