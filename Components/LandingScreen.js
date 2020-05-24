import React, { Component } from 'react';
import { Text, View, ScrollView , ActivityIndicator, TouchableOpacity} from 'react-native';
import NewsCarousel from './NewsCarousel'
import RecentNews from './RecentNews'
import styles from './Styles'
import publicIP from 'react-native-public-ip';
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
        country : null,
        news : null,
        visible : false,
        data : {}
    }
    componentDidMount()
    {
        publicIP()
        .then(ip => {
            fetch(`http://ip-api.com/json/${ip}`)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                this.setState({country : data.countryCode});
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
            })
            .catch((error) => {
                console.log(error);
            })
        })
        .catch(error => {
            console.log(error);
        });
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
            text = text.substring(0,75) + " ....." +  "Tap to View More"
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
                        title : articles[4]['title']
                    },
                    {
                        link : articles[5]["urlToImage"],
                        title : articles[5]['title']
                    },
                    {
                        link : articles[6]["urlToImage"],
                        title : articles[6]['title']
                    },
                    {
                        link : articles[7]["urlToImage"],
                        title : articles[7]['title']
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
            <Article data = {this.state.data} visible = {this.state.visible} hidevisibility = {this.hidevisibility}/>
            <View style={styles.container}>
                <View style = {styles.topview}>
                    <View style = {styles.headtext}>
                        <Text style = {styles.datetext}>{this.state.values.days[this.state.date.getDay()] + " , " + this.state.values.months[this.state.date.getMonth()] + " " + this.state.date.getDate()}</Text>
                        <View style = {{flexDirection : "row"}}>
                            <View style = {{flex : 1}}>
                            <Text style = {styles.newstext}>Top News</Text>
                            </View>
                            <View style = {{paddingRight : 30 , alignItems : "center" , justifyContent : "center"}}>
                                <Text style = {styles.datetext}>Country : {this.state.country}</Text>
                            </View>
                        </View>
                    </View>
                    <View style = {styles.topcarousel}>
                        <NewsCarousel passdata = {this.passdata} showvisibility = {this.showvisibility} links = {this.handletoplinks()} />
                    </View>
                </View>
                <View style = {styles.bottomview}>
                <ScrollView>
                    <View style = {styles.bottomnews}>
                        <View style = {styles.recentnews}>
                            <View style = {styles.bottomtext}>
                                <Text style = {styles.news}>Recent News</Text>
                            </View>
                            <TouchableOpacity activeOpacity = {0.6} style = {styles.allview}>
                                <Text style = {styles.moreview}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.bottomcarousel}>
                                <RecentNews links = {this.handlebottomlinks()}/>
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