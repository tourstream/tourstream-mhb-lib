import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { withGoogleMap, withScriptjs, GoogleMap } from 'react-google-maps'
import MapMarker from './MapMarkers'

const MapWithAMarkers = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBrCtOGv9WeSOOkYQDm2ADsD7LfpNWiAq4&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ position: 'relative', paddingTop: '56.25%' }} />,
    mapElement: <div style={{
 position: 'absolute', top: 0, left: 0, height: '100%', width: '100%',
}} />,
    zoomToMarkers: map => {
      const bounds = new window.google.maps.LatLngBounds()
      let countMarker = 0
      if (map && map.props && map.props.children) {
        map.props.children.forEach(child => {
          if (child.type === MapMarker) {
            countMarker+=1
            bounds.extend(
              new window.google.maps.LatLng(
                child.props.position.lat,
                child.props.position.lng
              )
            )
          }
        })
      }
      if (countMarker > 1) { map.fitBounds(bounds) }
    },
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    ref={props.zoomToMarkers}
    defaultZoom={props.defaultZoom}
    defaultCenter={props.defaultCenter}
    defaultOptions={props.defaultOptions}
  >
    {props.hotels.map(hotel => (
      <MapMarker
        key={hotel.edv_code}
        options={{
          icon: {
            url: props.pin,
            scaledSize: new window.google.maps.Size(35, 35),
            optimized: false,
          },
        }}
        position={{ lat: hotel.location.lat, lng: hotel.location.lng }}
        hotel={hotel}
        activateInfoWindow={props.activateInfoWindow}
        deactivateInfoWindow={props.deactivateInfoWindow}
        active={hotel.edv_code === props.mapComponentRef.state.activeMarkerId}
      />
    ))}
  </GoogleMap>
))

class Map extends Component {
  state = {
    activeMarkerId: null,
  };

  activateInfoWindow = id => {
    this.setState({ activeMarkerId: id })
  }

  deactivateInfoWindow = () => {
    this.setState({ activeMarkerId: null })
  }

  render () {
    const {
      hotels, center, zoom, styles, pin,
    } = this.props

    return (
      hotels.length > 0 &&
        <MapWithAMarkers
          hotels={hotels}
          pin={pin}
          defaultZoom={zoom}
          defaultCenter={center}
          defaultOptions={{ gestureHandling: 'cooperative', scrollwheel: false, styles }}
          activateInfoWindow={this.activateInfoWindow}
          deactivateInfoWindow={this.deactivateInfoWindow}
          mapComponentRef={this}
        />
    )
  }
}

export default Map
