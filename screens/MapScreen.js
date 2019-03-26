import React, { Component } from 'react'
import {Text, View} from 'react-native';
import { MapView, AppLoading} from 'expo';

 class MapScreen extends Component {
  state = {
    region: {
      latitude: 40.76727216,
      longitude: -73.99392888,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    showMap: false,
    markers: []
  }
  
  componentDidMount(){
    this.fetchData()
    this.setState({ showMap: true})
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region })
  }

  async fetchData(){
    const res = await fetch('https://feeds.citibikenyc.com/stations/stations.json');
    const data = await res.json();
    this.setState({ markers: data.stationBeanList });
  }

  render() {
    if(!this.state.showMap){
      return <AppLoading />
    }
    return (
      <MapView 
        showsUserLocation 
        showsCompass={true}
        style={{ flex: 1 }} 
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
    )
  }
}
export default MapScreen;
