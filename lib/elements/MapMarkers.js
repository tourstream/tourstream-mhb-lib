import React, { Component } from 'react'
import { Marker, InfoWindow } from 'react-google-maps'
import { translate } from 'react-i18next'
import { withTheme } from 'styled-components'

class MapMarker extends Component {
  constructor () {
    super()
    this.state = {
      open: false,
    }
  }

  render () {
    const { position, hotel, options, theme, t } = this.props

    const styleTitle = {
      fontFamily: theme.headlineFontFamily,
    }
    const styleContent = {
      textAlign: 'center',
      fontFamily: theme.baseFontFamily,
    }
    const styleButton = {
      display: 'inline-block',
      padding: '1rem 2rem',
      color: theme.mapInfoWindowButtonColor ? theme.mapInfoWindowButtonColor : 'white',
      background: theme.mapInfoWindowButtonBackgroundColor ? theme.mapInfoWindowButtonBackgroundColor : 'dimgray',
    }

    const styleImage = {
      display: 'block',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      height: '200px',
      padding: '0',
      margin: '0',
    }
    if (hotel.mapMarkerImage) {
      styleImage.backgroundImage = `url(${hotel.mapMarkerImage})`
    }

    return (
      <Marker
        key={hotel.edv_code}
        position={position}
        options={options}
        optimized={false}
        onClick={() => this.setState({ open: !this.state.open })}
      >
        {this.state.open ? (
          <InfoWindow
            onCloseClick={() => this.setState({ open: !this.state.open })}
            defaultOptions={{ maxWidth: '240' }}
          >
            <div style={styleContent}>
              {hotel.mapMarkerImage &&
              <figure style={styleImage} />
              }
              <h3 style={styleTitle}>{hotel.name}</h3>
              <p dangerouslySetInnerHTML={{ __html: hotel.address }} />
              <a href={hotel.details_page_url} style={styleButton}>{t('google.maps.infowindow.buttonText')}</a>
            </div>
          </InfoWindow>
        ) : ''}
      </Marker>
    )
  }
}

export default translate()(withTheme(MapMarker))
