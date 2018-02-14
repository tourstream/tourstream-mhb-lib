import React from 'react'
import { translate } from 'react-i18next'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { CheckList } from '../elements/CheckList'
import { Card } from '../elements/Card'


class Home extends React.Component {
  render () {
    const { t } = this.props

    const MapWithAMarker = withGoogleMap(props =>
      <GoogleMap defaultZoom={18} defaultCenter={{ lat: 52.516308, lng: 13.389197 }}>
        <Marker position={{ lat: 52.516308, lng: 13.389197 }} />
      </GoogleMap>
    )

    return (
      <div className="container">
        <Card header={`<h1>${t('home.teaser.pros.title')}</h1>`}>
          <CheckList items={t('home.teaser.pros.items')} />
        </Card>

        <Card header={`<h1>${t('home.teaser.about.title')}</h1>`}>
          <span dangerouslySetInnerHTML={{ __html: t('home.teaser.about.text') }} />
        </Card>

        <Card header={`<h1>${t('home.teaser.highlights.title')}</h1>`}>
          <span dangerouslySetInnerHTML={{ __html: t('home.teaser.highlights.text') }} />
        </Card>

        <Card header={`<h1>${t('home.teaser.locations.title')}</h1>`}>
          <MapWithAMarker
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${t('google.maps.api.key')}&v=3.exp&libraries=geometry,drawing`}
            containerElement={<div style={{ height: '600px' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </Card>
      </div>
    )
  }
}

export default translate()(Home)
