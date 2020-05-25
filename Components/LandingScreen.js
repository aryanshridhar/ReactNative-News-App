import React, { Component } from 'react';
import { 
    Text, 
    View, 
    ScrollView , 
    ActivityIndicator, 
    TouchableOpacity,
    Linking
} from 'react-native';
import NewsCarousel from './NewsCarousel'
import RecentNews from './RecentNews'
import styles from './Styles'
import Article from './Article';

class LandingScreen extends Component{

    state = {
        date : new Date(),
        values : {
            days : {
                0 : 'SUNDAY',
                1 : 'MONDAY',
                2 : 'TUESDAY',
                3 : 'WEDNESDAY',
                4 : 'THURSDAY',
                5 : 'FRIDAY',
                6 : 'SATURDAY',
            },
            months : {
                0 : 'JANURARY',
                1 : 'FEBRUARY',
                2 : 'MARCH',
                3 : 'APRIL',
                4 : 'MAY',
                5 : 'JUNE',
                6 : 'JULY',
                7 : 'AUGUST',
                8 : 'SEPTEMBER',
                9 : 'OCTOBER',
                10 : 'NOVEMBER',
                11 : 'DECEMBER',
            }
        },
        news : null,
        visible : false,
    }
    componentDidMount()
    {
        fetch('http://newsapi.org/v2/top-headlines?country=in&apiKey=6291ef3afc11486cbf183a4052bff86a')
        .then((resp) =>{
            return resp.json();
        })
        .then((data) => {
            this.setState({news : data});
        })
        .catch((error) => {
            console.log(error);
        }) 
    }

    openurl = (index) => {
        let url = this.state.news.articles[index]['url']
        Linking.openURL(url);
    }

    showvisibility = () =>
    {
        this.setState({visible : true});
    }

    hidevisibility = () =>
    {
        this.setState({visible : false});
    }

    handlelength = (text) => 
    {
        if (text.length > 75)
        {
            text = text.substring(0,75) + " ..." +  "Tap for More"
        }
        return text;
    }

    handletoplinks = () => {
        let articles = this.state.news.articles
        let links = [
                    {
                        link : articles[0]["urlToImage"],
                        title : this.handlelength(articles[0]['title'])
                    },
                    {
                        link : articles[1]["urlToImage"],
                        title  : this.handlelength(articles[1]['title'])
                    },
                    {
                        link : articles[2]["urlToImage"],
                        title : this.handlelength(articles[2]['title'])
                    },
                    {
                        link : articles[3]["urlToImage"],
                        title : this.handlelength(articles[3]['title'])
                    },
                ]
        return links;
    }


    handlebottomlinks = () => {
        let articles = this.state.news.articles
        let links = [
                    {
                        link : articles[4]["urlToImage"],
                        title : articles[4]['title'],
                        url : articles[4]['url']
                    },
                    {
                        link : articles[5]["urlToImage"],
                        title : articles[5]['title'],
                        url : articles[5]['url']
                    },
                    {
                        link : articles[6]["urlToImage"],
                        title : articles[6]['title'],
                        url : articles[6]['url']
                    },
                    {
                        link : articles[7]["urlToImage"],
                        title : articles[7]['title'],
                        url : articles[7]['url']
                    },
                ]
        return links;
    }

    passdata = (index) => {
        let data = this.state.news.articles[index]
        this.setState({data : data});
    }

    render(){
        if(!this.state.news){
            return (
                <View style = {styles.center}>
                    <ActivityIndicator animating = {true} size="large" color="#38264E" />
                </View>
            )
        }
        return (
            <React.Fragment>
            <Article data = {this.state.news} visible = {this.state.visible} heading = {'Recent News'} hidevisibility = {this.hidevisibility}/>
            <View style={styles.container}>
                <View style = {styles.topview}>
                    <View style = {styles.headtext}>
                        <Text style = {styles.datetext}>{this.state.values.days[this.state.date.getDay()] + " , " + this.state.values.months[this.state.date.getMonth()] + " " + this.state.date.getDate()}</Text>
                        <View style = {{flexDirection : "row"}}>
                            <View style = {{flex : 1}}>
                            <Text style = {styles.newstext}>Top News</Text>
                            </View>
                            <View style = {{paddingRight : 30 , alignItems : "center" , justifyContent : "center"}}>
                                <Text style = {styles.datetext}>Country : {this.props.country}</Text>
                            </View>
                        </View>
                    </View>
                    <View style = {styles.topcarousel}>
                        <NewsCarousel openurl = {this.openurl} links = {this.handletoplinks()} />
                    </View>
                </View>
                <View style = {styles.bottomview}>
                <ScrollView>
                    <View style = {styles.bottomnews}>
                        <View style = {styles.recentnews}>
                            <View style = {styles.bottomtext}>
                                <Text style = {styles.news}>Recent News</Text>
                            </View>
                            <TouchableOpacity onPress = {this.showvisibility} activeOpacity = {0.6} style = {styles.allview}>
                                <Text style = {styles.moreview}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.bottomcarousel}>
                            <RecentNews openurl = {this.openurl} links = {this.handlebottomlinks()}/>
                        </View>
                    </View>
                </ScrollView>
                </View>
            </View>
            </React.Fragment>
        );
    }
}


export default LandingScreen;