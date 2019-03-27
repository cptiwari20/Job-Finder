import React, { Component } from 'react'
import { MapView, AppLoading} from 'expo';
import { connect } from 'react-redux';
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

  render() {
    if(!this.state.showMap){
      return <AppLoading />
    }

    console.log('state', this.state.markers.length)
    console.log('props', this.props.markers.length)

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

function mapStateToProps(state){  
  return { markers: state.markers}
}


export default connect(mapStateToProps, { fetchData })(MapScreen);
