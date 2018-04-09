import React, { Component } from 'react'
import { Marker, InfoWindow } from 'react-google-maps'
import { translate } from 'react-i18next'
import styled, { withTheme } from 'styled-components'

const StyledMarker = styled.div`
    figure {
      display: none;
      @media (min-width: 768px) { 
      display: block;
      }
    }
    
    a {
      padding: 0.4rem 0.4rem;
      @media (min-width: 768px) { 
      padding: 1rem 2rem;
      }
    }
    
    .title {
      font-size: 1rem !important;
      @media (min-width: 768px) { 
      font-size: inherit;
      }
    }
    
    .address {
      margin: 0 0 1rem 0;
      @media (min-width: 768px) { 
      margin: 0 0 2rem 0;
      }
    }
`

class MapMarker extends Component {
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
      display: 'block',
      color: theme.mapInfoWindowButtonColor ? theme.mapInfoWindowButtonColor : 'white',
      background: theme.mapInfoWindowButtonBackgroundColor ? theme.mapInfoWindowButtonBackgroundColor : 'dimgray',
    }

    const styleImage = {
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
        onClick={() => {
          this.props.activateInfoWindow(hotel.edv_code);
        }}
      >
        {this.props.active ? (
          <InfoWindow
            onCloseClick={() => this.props.deactivateInfoWindow()}
            defaultOptions={{maxWidth: '240'}}
          >
            <StyledMarker>
              <div className="info" style={styleContent}>
                {hotel.mapMarkerImage &&
                <figure style={styleImage}/>
                }
                <h3 className="title" style={styleTitle}>{hotel.name}</h3>
                <p className="address" dangerouslySetInnerHTML={{__html: hotel.address}}/>
                <a href={hotel.details_page_url} style={styleButton}>{t('google.maps.infowindow.buttonText')}</a>
              </div>
            </StyledMarker>
          </InfoWindow>
        ) : ''}
      </Marker>
    )
  }
}

export default translate()(withTheme(MapMarker))
