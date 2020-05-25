import React, { Component } from 'react'
import {View ,Linking , Modal ,Text , ActivityIndicator} from "react-native"
import Header from './Header'
import RecentCarousel from './RecentCarousel'
import styles from './Styles'

class CategoryItem extends Component {

    state = {
        news : null
    }

    componentDidMount(){
        fetch(this.props.url)
        .then((resp) =>{
            return resp.json();
        })
        .then((data) => {
            this.setState({news : data});
            this.state.news = data;
        })
        .catch((error) => {
            console.log(error);
        }) 
    }

    handlelinks = () => {
        var articles = this.state.news.articles;
        var links = [];
        for(let i=0;i<articles.length;i++)
        {
            links.push(
                {
                    link : articles[i]['urlToImage'],
                    title : articles[i]['title'],
                }
                )
            }
            
        console.log(links);
        return links;
    }


    openurl = (index) => {
        let url = this.props.data.articles[index+8]['url']
        Linking.openURL(url);
    }

    render() {
        if(!this.state.news){
            return (
                <Modal visible = {this.state.visible} animationType = {"fade"}>
                    <View style = {styles.center}>
                        <ActivityIndicator animating = {true} size="large" color="#38264E" />
                    </View>
                </Modal>
            )
        }
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


export default CategoryItem;