import React, { Component } from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native'
import { Button } from 'react-native-elements';

class Slides extends Component {
  renderEndButton = (index) => {
    if(this.props.slideData.length - 1 === index){
      return (
      <Button 
        title='Login Now'
        onPress={this.props.onClickLogin}
        raised
        buttonStyle={styles.buttonStyle}
      />
    )
  }
}

  renderData = () => (
    this.props.slideData.map((slide, index) => {
      return (
      <View 
        style={[styles.slide, { backgroundColor: slide.color}]} 
        key={slide.text}
        >
        <Text style={styles.text}>{slide.text}</Text>
        {this.renderEndButton(index)}
      </View>
    )
    }
  ))

  render() {
    return (
      <ScrollView 
        style={{flex: 1}}
        horizontal
        pagingEnabled
      >
        {this.renderData()}
      </ScrollView>
    )
  }
}

const WIDTH = Dimensions.get('window').width;

const styles = {
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH
  },
  text: {
    fontSize: 30,
    padding: 20,
    color: 'white'
  },
  buttonStyle: {
    backgroundColor: 'rgb(187, 65, 244)'
  }
}

export default Slides;