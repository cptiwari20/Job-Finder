import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { AsyncStorage } from 'react-native';
import Slides from '../src/Slides';

const SlidesData = [
  { text: 'Welcome to the Job Finder App', color: '#5942f4'},
  { text: 'Login using your facebook account', color: '#e241f4'},
  { text: 'Find awesome job near you.', color: '#910b2d'}
]
 class WelcomeScreen extends Component {
   state = { token: null }

   onClickLogin = () => {
     return this.props.navigation.navigate('Auth')
   }

   async componentWillMount(){
      const token = await AsyncStorage.getItem('fb_token');

      if(token){
        this.props.navigation.navigate('Map');
        this.setState({ token })
      }else{
        this.setState({ token: false })
      }
   }

  render() {
    if(this.state.token === null){
      return <AppLoading />
    }
    return (
      <Slides onClickLogin={this.onClickLogin} slideData={SlidesData} />
    )
  }
}
export default WelcomeScreen;