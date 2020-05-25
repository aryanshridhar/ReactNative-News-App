import React, { Component } from 'react'
import {View ,Linking , Modal ,Text , ActivityIndicator} from "react-native"
import styles from './Styles'
import Article from './Article'

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
            
        return links;
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
            <Article 
            data = {this.state.news} 
            visible = {this.state.visible} 
            heading = {this.props.category} 
            hidevisibility = {this.props.hidevisibility}/>
        )
    }
}


export default CategoryItem;