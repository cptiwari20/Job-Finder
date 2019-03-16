import React, { Component } from 'react'
import {Text, View} from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../actions';

 class AuthScreen extends Component {
   componentDidMount(){
     this.props.loginToFacebook()
   }
  render() {
    return (
      <View>
        <Text>AuthScreen</Text>
      </View>
    )
  }
}
export default connect(null, actions)(AuthScreen);
