import React, { Component } from 'react';
import { View } from 'react-native';
import { MapView, AppLoading} from 'expo';
import { connect } from 'react-redux';
import {Button } from 'react-native-elements';
import { fetchData } from '../actions'; 


class MapScreen extends Component {
  state = {
    region: {
      latitude: 40.76727216,
      longitude: -73.99392888,
      latitudeDelta: 0.0022,
      longitudeDelta: 0.00421,
    },
    showMap: false,
    markers: []
  }
  
  async componentDidMount(){
    this.setState({showMap: true})
    await this.props.fetchData();
    if(this.state.markers.length === 0){
      this.setState({ markers: this.props.markers })
    }
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region })
  }
  onButtonPress = () => {
    this.props.fetchData()
  }

  render() {
    if(!this.state.showMap){
      return <AppLoading />
    }
    return (
        <View style={{ flex: 1 }}>
          <MapView 
            style={{ flex: 1 }}
            showsUserLocation 
            showsCompass={true} 
            region={this.state.region} 
            onRegionChangeComplete={this.onRegionChangeComplete}
            >
            {this.state.markers.map((marker, index) => (
              <MapView.Marker 
              key={index}
              coordinate={
                {latitude: marker.latitude,
                  longitude: marker.longitude,}
                }
                title={marker.stationName}
                />
                ))}
          </MapView>
          <View style={{ position: 'absolute', bottom: 20, left: 0, right: 0}}>
            <Button 
              title="Search Jobs in this area"
              icon={{name: 'search'}}
              backgroundColor='#009688'
              raised
              onPress={this.onButtonPress}
              />
          </View>
        </View>
    )
  }
}

function mapStateToProps(state){  
  return { markers: state.markers}
}


export default connect(mapStateToProps, { fetchData })(MapScreen);
