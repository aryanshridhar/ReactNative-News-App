import React , {Component} from "react"
import { Appbar} from 'react-native-paper';
import {StyleSheet} from "react-native"

class Header extends Component {

    handleback = () => {
        this.props.hidevisibility();
    }

  render() {
    return (
      <Appbar.Header style = {styles.header}>
        <Appbar.BackAction
          onPress={this.handleback}
        />
      </Appbar.Header>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
    header : {
        backgroundColor : "#38264E", 
    }
})

