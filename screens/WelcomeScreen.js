import React, { Component } from 'react'
import {Text, View} from 'react-native'
import Slides from '../src/Slides';

const SlidesData = [
  { text: 'Welcome to the Job Finder App', color: '#5942f4'},
  { text: 'Login using your facebook account', color: '#e241f4'},
  { text: 'Find awesome job near you.', color: '#910b2d'}
]
 class WelcomeScreen extends Component {
   onClickLogin = () => {
     return this.props.navigation.navigate('Auth')
   }
  render() {
    return (
      <Slides onClickLogin={this.onClickLogin} slideData={SlidesData} />
    )
  }
}
export default WelcomeScreen;