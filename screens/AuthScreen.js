import React, { Component } from 'react'
import {Text, View, AsyncStorage} from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../actions';

 class AuthScreen extends Component {
   componentDidMount(){
      this.props.loginToFacebook();
      //  AsyncStorage.removeItem('fb_token');
      this.onAuthComplete(this.props);
   }

   componentWillReceiveProps(nextProps){
     this.onAuthComplete(nextProps)
   }

   onAuthComplete(props){
     if(props.token){
       return this.props.navigation.navigate('Map')
     }
   }
  render() {
    return (
      <View />
    )
  }
}

function mapStateToProps({ auth }){
  return { token: auth.token }
}

export default connect(mapStateToProps, actions)(AuthScreen);
