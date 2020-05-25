import React, { Component } from 'react'
import {Text, View , Image, TouchableOpacity} from 'react-native'
import styles from './Styles'
import CategoryItem from './CategoryItem';

class Categories extends Component {

    state = {
        visible : false,
        url : null,
        category: null,
    }

    hidevisibility = () =>
    {
        this.setState({visible : false});
        this.setState({url : null});
    }

    handlepress = (item) => {
        this.setState({category : item});
        this.setState({url : `http://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${item}&apiKey=6291ef3afc11486cbf183a4052bff86a`})
        this.setState({visible : true});
    }

    render() {
        if(!this.state.url)
        {
        return (
            <React.Fragment>
            <View style={styles.container}>
                <View style = {styles.fullview}>
                    <View style = {styles.headtext}>
                        <Text style = {styles.categorytext}>Categories</Text>
                    </View>
                    <View>
                        <View style = {{paddingTop : 40}}>
                            <View style = {styles.row}>
                                <TouchableOpacity onPress = {this.handlepress.bind(this , 'business')} activeOpacity = {0.5} style = {styles.cell1}>
                                    <Image style = {{width : 30 , height : 40}} source = {require('../assets/Photos/Business/business.png')} />
                                    <Text style = {styles.celltext}>Business</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress = {this.handlepress.bind(this , 'entertainment')} activeOpacity = {0.5} style = {styles.cell2}>
                                <Image style = {{width : 30 , height : 40}} source = {require('../assets/Photos/Entertainment/Entertainment.png')} />
                                    <Text style = {{...styles.celltext , fontSize : 14}}>Entertainment</Text>
                                </TouchableOpacity>
                            </View>
                            <View style = {styles.row}>
                                <TouchableOpacity onPress = {this.handlepress.bind(this , 'health')} activeOpacity = {0.5} style = {styles.cell1}>
                                <Image style = {{width : 30 , height : 30}} source = {require('../assets/Photos/Health/Health.png')} />
                                    <Text style = {styles.celltext}>Health</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress = {this.handlepress.bind(this , 'science')} activeOpacity = {0.5} style = {styles.cell2}>
                                <Image style = {{width : 30 , height : 30}} source = {require('../assets/Photos/Science/Science.png')} />
                                    <Text style = {styles.celltext}>Science</Text>
                                </TouchableOpacity>
                            </View>
                            <View style = {styles.row}>
                                <TouchableOpacity onPress = {this.handlepress.bind(this , 'sports')} activeOpacity = {0.5} style = {{...styles.cell1 , borderBottomWidth: 0}}>
                                <Image style = {{width : 30 , height : 30}} source = {require('../assets/Photos/Sports/Sports.png')} />
                                    <Text style = {styles.celltext}>Sports</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress = {this.handlepress.bind(this , 'technology')} activeOpacity = {0.5} style = {{...styles.cell2 , borderBottomWidth : 0}}>
                                <Image style = {{width : 30 , height : 30}} source = {require('../assets/Photos/Technology/Technology.png')} />
                                    <Text style = {{...styles.celltext , fontSize : 17}}>Technology</Text>
                                </TouchableOpacity>   
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            </React.Fragment>
            )
        }
        return(
            <React.Fragment>
            <CategoryItem url = {this.state.url} category = {this.state.category} visible = {this.state.visible} hidevisibility = {this.hidevisibility}/>
            <View style={styles.container}>
                <View style = {styles.fullview}>
                    <View style = {styles.headtext}>
                        <Text style = {styles.categorytext}>Categories</Text>
                    </View>
                    <View>
                        <View style = {{paddingTop : 40}}>
                            <View style = {styles.row}>
                                <TouchableOpacity onPress = {this.handlepress.bind(this , 'business')} activeOpacity = {0.5} style = {styles.cell1}>
                                    <Image style = {{width : 30 , height : 40}} source = {require('../assets/Photos/Business/business.png')} />
                                    <Text style = {styles.celltext}>Business</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress = {this.handlepress.bind(this , 'entertainment')} activeOpacity = {0.5} style = {styles.cell2}>
                                <Image style = {{width : 30 , height : 40}} source = {require('../assets/Photos/Entertainment/Entertainment.png')} />
                                    <Text style = {{...styles.celltext , fontSize : 14}}>Entertainment</Text>
                                </TouchableOpacity>
                            </View>
                            <View style = {styles.row}>
                                <TouchableOpacity onPress = {this.handlepress.bind(this , 'health')} activeOpacity = {0.5} style = {styles.cell1}>
                                <Image style = {{width : 30 , height : 30}} source = {require('../assets/Photos/Health/Health.png')} />
                                    <Text style = {styles.celltext}>Health</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress = {this.handlepress.bind(this , 'science')} activeOpacity = {0.5} style = {styles.cell2}>
                                <Image style = {{width : 30 , height : 30}} source = {require('../assets/Photos/Science/Science.png')} />
                                    <Text style = {styles.celltext}>Science</Text>
                                </TouchableOpacity>
                            </View>
                            <View style = {styles.row}>
                                <TouchableOpacity onPress = {this.handlepress.bind(this , 'sports')} activeOpacity = {0.5} style = {{...styles.cell1 , borderBottomWidth: 0}}>
                                <Image style = {{width : 30 , height : 30}} source = {require('../assets/Photos/Sports/Sports.png')} />
                                    <Text style = {styles.celltext}>Sports</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress = {this.handlepress.bind(this , 'technology')} activeOpacity = {0.5} style = {{...styles.cell2 , borderBottomWidth : 0}}>
                                <Image style = {{width : 30 , height : 30}} source = {require('../assets/Photos/Technology/Technology.png')} />
                                    <Text style = {{...styles.celltext , fontSize : 17}}>Technology</Text>
                                </TouchableOpacity>   
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            </React.Fragment>
        )
    }
}

export default Categories;