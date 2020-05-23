import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import NewsCarousel from './NewsCarousel'
import RecentNews from './RecentNews'
import styles from './Styles'

class LandingScreen extends Component{

    render(){
        return (
            <View style={styles.container}>
            <View style = {styles.topview}>
                <View style = {styles.headtext}>
                    <Text style = {styles.datetext}>WEDNESDAY , NOVEMBER 29</Text>
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