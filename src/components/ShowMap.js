import React, { Component} from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import googleMapStyles from "../GoogleMapStyle";

export class MapContainer extends Component {
    state = {
        selectedCenter:null
      };

  render() {
      const {selectedCenter}=this.state
    return (
      <Map
        google={this.props.google}
        zoom={11}
        style={googleMapStyles}
        initialCenter={{ lat: 47.646338, lng: -122.324242 }}
      >

        {this.props.parks.map(park => (
            <Marker
            position={{ lat: park.latitude, lng: park.longitude }}
            onClick={this.onMarkerClick}
            name= {park.name}
            key={park.id}
            onClick={() => {this.setState({selectedCenter: park})}}
            />
        ))}

            {selectedCenter? <InfoWindow
                onCloseClick={() => {
                    this.setState({selectedCenter: null})
                }}
                position={{lat: selectedCenter.latitude, lng: selectedCenter.longitude}}
            >
            </InfoWindow>: null}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);