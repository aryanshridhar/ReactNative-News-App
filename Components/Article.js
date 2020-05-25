import React, { Component } from 'react'
import {View ,Linking , Modal ,Text} from "react-native"
import Header from './Header'
import RecentCarousel from './RecentCarousel'

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
                <View style = {{flex : 1 , flexDirection : "column"}}>
                    <View style = {{flex : 0.1 , justifyContent : "flex-end" , paddingLeft : 25}}>
                        <Text style = {{fontSize : 24 , fontWeight : "bold",color : "#38264E"}}>Recent News</Text>
                    </View>
                    <View style = {{flex : 1 ,flexDirection : "column" , justifyContent : "center",alignItems : "center",paddingTop : 35}}>
                        <RecentCarousel openurl = {this.openurl} links = {this.handlelinks()}/>
                    </View>
                </View>
            </Modal>
        )
    }
}


export default Article;