import React, { Component } from 'react'
import {Text, View , Image, TouchableOpacity} from 'react-native'
import styles from './Styles'

class Categories extends Component {
    render() {
        return (

            <View style={styles.container}>
                <View style = {styles.fullview}>
                    <View style = {styles.headtext}>
                        <Text style = {styles.categorytext}>Categories</Text>
                    </View>
                    <View>
                        <View style = {{paddingTop : 40}}>
                            <View style = {styles.row}>
                                <TouchableOpacity  activeOpacity = {0.5} style = {styles.cell1}>
                                    <Image style = {{width : 30 , height : 40}} source = {require('../assets/Photos/Business/business.png')} />
                                    <Text style = {styles.celltext}>Business</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity = {0.5} style = {styles.cell2}>
                                <Image style = {{width : 30 , height : 40}} source = {require('../assets/Photos/Entertainment/Entertainment.png')} />
                                    <Text style = {{...styles.celltext , fontSize : 14}}>Entertainment</Text>
                                </TouchableOpacity>
                            </View>
                            <View style = {styles.row}>
                                <TouchableOpacity activeOpacity = {0.5} style = {styles.cell1}>
                                <Image style = {{width : 30 , height : 30}} source = {require('../assets/Photos/Health/Health.png')} />
                                    <Text style = {styles.celltext}>Health</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity = {0.5} style = {styles.cell2}>
                                <Image style = {{width : 30 , height : 30}} source = {require('../assets/Photos/Science/Science.png')} />
                                    <Text style = {styles.celltext}>Science</Text>
                                </TouchableOpacity>
                            </View>
                            <View style = {styles.row}>
                                <TouchableOpacity activeOpacity = {0.5} style = {{...styles.cell1 , borderBottomWidth: 0}}>
                                <Image style = {{width : 30 , height : 30}} source = {require('../assets/Photos/Sports/Sports.png')} />
                                    <Text style = {styles.celltext}>Sports</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity = {0.5} style = {{...styles.cell2 , borderBottomWidth : 0}}>
                                <Image style = {{width : 30 , height : 30}} source = {require('../assets/Photos/Technology/Technology.png')} />
                                    <Text style = {{...styles.celltext , fontSize : 17}}>Technology</Text>
                                </TouchableOpacity>   
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Categories;