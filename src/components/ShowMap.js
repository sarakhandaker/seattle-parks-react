import React, { Component} from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import googleMapStyles from "../GoogleMapStyle";

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {}      
      };

      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

  render() {
    var icon = {
            url: "https://loc8tor.co.uk/wp-content/uploads/2015/08/stencil.png", // url
            scaledSize: new this.props.google.maps.Size(90, 42), // scaled size
        };
      const {parks, single}=this.props
    return (
      <Map
        google={this.props.google}
        zoom={11}
        style={googleMapStyles}
        initialCenter={!single ?{ lat: 47.646338, lng: -122.324242 }: {lat: parks[0].latitude, lng: parks[0].longitude }}
      >

        {this.props.parks.map(park => (
            <Marker
            position={{ lat: park.latitude, lng: park.longitude }}
            onClick={this.onMarkerClick}
             name= {park.name}
            key={park.id}
            />
        ))}

{ this.props.user? <Marker
            position={{ lat: this.props.user.latitude, lng: this.props.user.longitude }}
            onClick={this.onMarkerClick}
             name="YOU!"
             icon={icon}
            />:null

}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>

      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);