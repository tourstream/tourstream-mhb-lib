import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { withGoogleMap, withScriptjs, GoogleMap } from 'react-google-maps'
import MapMarker from './MapMarkers'

class Map extends Component {
  render () {
    const { hotels, center, zoom, styles, pin } = this.props


    let map = null

    if (hotels.length) {
      const MapWithAMarker = compose(
        withProps({
          googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
          loadingElement: <div style={{ height: '100%' }} />,
          containerElement: <div style={{ position: 'relative', paddingTop: '56.25%' }} />,
          mapElement: <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} />,
        }),
        withScriptjs,
        withGoogleMap
      )(() =>
        (<GoogleMap
          defaultZoom={zoom}
          defaultCenter={center}
          defaultOptions={{ scrollwheel: false, styles }}
        >
          { hotels.map(hotel => {
            if (hotel.location && hotel.location.lat && hotel.location.long) {
              return (
                <MapMarker
                  key={hotel.edv_code}
                  // eslint-disable-next-line
                  options={{ icon: { url: pin, scaledSize: new google.maps.Size(30, 50), optimized: false } }}
                  position={{ lat: hotel.location.lat, lng: hotel.location.long }}
                  hotel={hotel}
                />
              )
            }
            return null
          })}
        </GoogleMap>)
      )

      map = <MapWithAMarker />
    }

    return map
  }
}

export default Map
