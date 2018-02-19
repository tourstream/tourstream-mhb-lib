import React from 'react'
import ReactPlayer from 'react-player'
import { translate } from 'react-i18next'
import styled from 'styled-components'
import CheckList from '../elements/CheckList'
import Card from '../elements/Card'
import Map from '../elements/Map'
import Gallery from '../elements/Gallery'


const CssTableDiv = styled.div`
  display: table;
  height: 150px;
  
  p {
    display: table-cell;
    vertical-align: middle;
    text-align: justify;
  }
`

const StyledPlayer = styled.div`
  .react-player-container {
    position: relative;
    padding-top: 56.25%;
  }
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`

class Home extends React.Component {
  render () {
    const { t } = this.props
    let locations = null

    if (t('hotels')) {
      const hotels = JSON.parse(t('hotels'))

      if (hotels.length) {
        locations = (
          <Card header={`<h1>${t('home.teaser.locations.title')}</h1>`}>
            <Map
              hotels={hotels}
              pin={t('google.maps.pin')}
              center={JSON.parse(t('google.maps.center'))}
              zoom={parseInt(t('google.maps.zoom'))}
              styles={JSON.parse(t('google.maps.style'))}
            />
          </Card>)
      }
    }

    let highlightsImages = null
    if (t('galleryImages')) {
      highlightsImages = JSON.parse(t('home.teaser.highlights.images'))
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
          <CssTableDiv>
            <p><span dangerouslySetInnerHTML={{ __html: t('home.teaser.about.text') }} /></p>
          </CssTableDiv>
        </Card>

        <Card header={`<h1>${t('home.teaser.highlights.title')}</h1>`} >
          <Gallery media={highlightsImages} />

          <StyledPlayer>
            <div className="react-player-container">
              <ReactPlayer url="https://vimeo.com/254269298" className="react-player" playsinline width="100%" height="100%" />
            </div>
          </StyledPlayer>
        </Card>

        {locations}
      </div>
    )
  }
}

export default translate()(Home)
