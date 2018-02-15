import React from 'react'
import { translate } from 'react-i18next'
import { compose, withProps, withStateHandlers } from 'recompose'
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { CheckList } from '../elements/CheckList'
import { Card } from '../elements/Card'

class Home extends React.Component {
  render () {
    const { t } = this.props

    let locations = null
    if (t('hotels')) {
      const hotels = JSON.parse(t('hotels'))

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
            defaultZoom={parseInt(t('google.maps.zoom'))}
            defaultCenter={JSON.parse(t('google.maps.center'))}
            defaultOptions={{ styles: JSON.parse(t('google.maps.style')) }}
          >
            { hotels.map(hotel => {
              if (hotel.location && hotel.location.lat && hotel.location.long) {
                return (
                  <Marker
                    key={hotel.edv_code}
                    options={{ icon: t('google.maps.pin') }}
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

        locations = (<Card header={`<h1>${t('home.teaser.locations.title')}</h1>`}>
          <MapWithAMarker />
        </Card>)
      }
    }

    return (
      <div className="container">
        <Card header={`<h1>${t('home.teaser.pros.title')}</h1>`}>
          <CheckList items={t('home.teaser.pros.items')} />
        </Card>

        <Card
          header={`<h1>${t('home.teaser.about.title')}</h1>`}
          image={t('home.teaser.about.logo')}
        >
          <span dangerouslySetInnerHTML={{ __html: t('home.teaser.about.text') }} />
        </Card>

        <Card header={`<h1>${t('home.teaser.highlights.title')}</h1>`}>
          <span dangerouslySetInnerHTML={{ __html: t('home.teaser.highlights.text') }} />
        </Card>

        {locations}
      </div>
    )
  }
}

export default translate()(Home)
