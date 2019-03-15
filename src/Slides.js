import React, { Component } from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native'

class Slides extends Component {
  renderData = () => (
    this.props.slideData.map((slide) => {
      return (
      <View 
        style={[styles.slide, { backgroundColor: slide.color}]} 
        key={slide.text}
        >
        <Text style={styles.text}>{slide.text}</Text>
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
  }
}

export default Slides;