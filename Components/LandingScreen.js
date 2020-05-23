import React, { Component } from 'react';
import { Text, View, ScrollView , ActivityIndicator} from 'react-native';
import NewsCarousel from './NewsCarousel'
import RecentNews from './RecentNews'
import styles from './Styles'
import publicIP from 'react-native-public-ip';

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
                    console.log(this.state.news)
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

    handlelinks = () => {
        let links = [
                    {
                        link : this.state.news.articles[0]["urlToImage"]
                    },
                    {
                        link : this.state.news.articles[1]["urlToImage"]
                    },
                    {
                        link : this.state.news.articles[2]["urlToImage"]
                    },
                    {
                        link : this.state.news.articles[3]["urlToImage"]
                    },
                ]
        return links;
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
                        <NewsCarousel links = {this.handlelinks()}/>
                    </View>
                </View>
                <View style = {styles.bottomview}>
                    <View style = {styles.bottomnews}>
                        <View style = {styles.recentnews}>
                            <Text style = {styles.news}>Recent News</Text>
                        </View>
                        <View style = {styles.bottomcarousel}>
                            <ScrollView>
                                <RecentNews/>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}


export default LandingScreen;