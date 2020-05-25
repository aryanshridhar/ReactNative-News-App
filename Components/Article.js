import React, { Component } from 'react'
import {View ,Linking , Modal ,Text} from "react-native"
import Header from './Header'
import RecentCarousel from './RecentCarousel'
import styles from './Styles'

class Article extends Component {

    handlelinks = () => {
        var articles = this.props.data.articles;
        var links = [];
        for(let i=8;i<articles.length;i++)
        {
            links.push(
                {
                    link : articles[i]['urlToImage'],
                    title : articles[i]['title'],
                }
            )
        }

        return links;
    }

    openurl = (index) => {
        let url = this.props.data.articles[index+8]['url']
        Linking.openURL(url);
    }

    render() {
        return (
            <Modal visible = {this.props.visible} animationType = "slide">
                <Header hidevisibility = {this.props.hidevisibility}/>
                <View style = {styles.articleview}>
                    <View style = {styles.articlebottom}>
                        <Text style = {styles.articleheading}>{this.props.heading}</Text>
                    </View>
                    <View style = {styles.articlecarousel}>
                        <RecentCarousel openurl = {this.openurl} links = {this.handlelinks()}/>
                    </View>
                </View>
            </Modal>
        )
    }
}


export default Article;