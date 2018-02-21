import React, { Component } from 'react'
import { Marker, InfoWindow } from 'react-google-maps'

class MapMarker extends Component {
  constructor () {
    super()
    this.state = {
      open: false,
    }
  }

  render () {
    const {
      props: {
        position,
        hotel,
        options,
      },
    } = this

    return (
      <Marker
        key={hotel.edv_code}
        position={position}
        options={options}
        optimized={false}
        onClick={() => this.setState({ open: !this.state.open })}
      >
        {this.state.open ? (
          <InfoWindow onCloseClick={() => this.setState({ open: !this.state.open })}>
            <a href={hotel.details_page_url}>{hotel.name}</a>
          </InfoWindow>
        ) : ''}
      </Marker>
    )
  }
}

export default MapMarker
