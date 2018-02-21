import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { withGoogleMap, withScriptjs, GoogleMap } from 'react-google-maps'
import MapMarker from './MapMarkers'

const MapWithAMarkers = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ position: 'relative', paddingTop: '56.25%' }} />,
    mapElement: <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} />,
    zoomToMarkers: map => {
      const bounds = new window.google.maps.LatLngBounds()
      let countMarker = 0
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
      if (countMarker) { map.fitBounds(bounds) }
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
            scaledSize: new window.google.maps.Size(30, 50),
            optimized: false,
          },
        }}
        position={{ lat: hotel.location.lat, lng: hotel.location.long }}
        hotel={hotel}
      />
    ))}
  </GoogleMap>
))

class Map extends Component {
  render () {
    const { hotels, center, zoom, styles, pin } = this.props
    return (
      hotels.length > 0 && <MapWithAMarkers
        hotels={hotels}
        pin={pin}
        defaultZoom={zoom}
        defaultCenter={center}
        defaultOptions={{ scrollwheel: false, styles }}
      />
    )
  }
}
export default Map
