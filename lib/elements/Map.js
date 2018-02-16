import React, { Component } from 'react'
import { compose, withProps, withStateHandlers } from 'recompose'
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

class Map extends Component {
  render () {
    const { hotels, center, zoom, styles, pin } = this.props

    let map = null

    if (hotels.length) {
      const MapWithAMarker = compose(
        withProps({
          googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
          loadingElement: <div style={{ height: '100%' }} />,
          containerElement: <div style={{ height: '600px' }} />,
          mapElement: <div style={{ height: '100%' }} />,
        }),
        withStateHandlers(
          () => ({ isOpen: false }
          ), {
            onToggleOpen: ({ isOpen }) => () => ({
              isOpen: !isOpen,
            }),
          }
        ),
        withScriptjs,
        withGoogleMap
      )(props =>
        (<GoogleMap
          defaultZoom={zoom}
          defaultCenter={center}
          defaultOptions={{ styles }}
        >
          { hotels.map(hotel => {
            if (hotel.location && hotel.location.lat && hotel.location.long) {
              return (
                <Marker
                  key={hotel.edv_code}
                  options={{ icon: pin }}
                  position={{ lat: hotel.location.lat, lng: hotel.location.long }}
                  onClick={props.onToggleOpen}
                >
                  {props.isOpen &&
                  <InfoWindow
                    onCloseClick={props.onToggleOpen}
                  >
                    <a href={hotel.details_page_url}>{hotel.name}</a>
                  </InfoWindow>
                  }
                </Marker>
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
