import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import NewsCarousel from './NewsCarousel'
import RecentNews from './RecentNews'
import styles from './Styles'

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

        }
    }


    render(){
        return (
            <View style={styles.container}>
                <View style = {styles.topview}>
                    <View style = {styles.headtext}>
                        <Text style = {styles.datetext}>{this.state.values.days[this.state.date.getDay()] + " , " + this.state.values.months[this.state.date.getMonth()] + " " + this.state.date.getDate()}</Text>
                        <Text style = {styles.newstext}>Top News</Text>
                    </View>
                    <View style = {styles.topcarousel}>
                        <NewsCarousel/>
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