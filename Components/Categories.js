import React, { Component } from 'react'
import {Text, View , Image} from 'react-native'
import styles from './Styles'

class Categories extends Component {
    render() {
        return (

            <View style={styles.container}>
                <View style = {styles.topview}>
                    <View style = {styles.headtext}>
                        <Text style = {styles.newstext}>Categories</Text>
                    </View>
                    <View>
                        <View styles = {styles.fullview}>
                            <View style = {styles.row}>
                                <View style = {styles.cell}>
                                    <Image style = {{width : 100 , height : 100}} source = {require('../assets/Photos/Business/business.svg')} />
                                    <Text>Business</Text>
                                </View>
                                <View style = {styles.cell}>
                                    <Text>Cell2</Text>
                                </View>
                            </View>
                            <View style = {styles.row}>
                                <View style = {styles.cell}>
                                    <Text>Cell3</Text>
                                </View>
                                <View style = {styles.cell}>
                                    <Text>Cell4</Text>
                                </View>
                            </View>
                            <View style = {styles.row}>
                                <View style = {styles.cell}>
                                    <Text>Cell5</Text>
                                </View>
                                <View style = {styles.cell}>
                                    <Text>Cell6</Text>
                                </View>   
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Categories;