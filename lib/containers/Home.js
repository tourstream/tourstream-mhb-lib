import React from 'react'
import ReactPlayer from 'react-player'
import { translate } from 'react-i18next'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import CheckList from '../elements/CheckList'
import Card from '../elements/Card'
import Map from '../elements/Map'
import Gallery from '../elements/Gallery'
import TeaserSlider from '../elements/TeaserSlider'

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
  margin-bottom: 2rem;
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
            <LazyLoad height={600} offset={300}>
              <Map
                hotels={hotels}
                pin={t('google.maps.pin')}
                center={JSON.parse(t('google.maps.center'))}
                zoom={parseInt(t('google.maps.zoom'))}
                styles={JSON.parse(t('google.maps.style'))}
              />
            </LazyLoad>
          </Card>)
      }
    }

    let highlightsImages = null
    if (t('home.teaser.highlights.images')) {
      try {
        highlightsImages = JSON.parse(t('home.teaser.highlights.images'))
      } catch (e) {
        console.log('home.teaser.highlights.images', e.message)
      }
    }

    let sliderImages = null
    if (t('home.teaser.slider.images')) {
      try {
        sliderImages = JSON.parse(t('home.teaser.slider.images'))
      } catch (e) {
        console.log('home.teaser.slider.images', e.message)
      }
    }

    let videoUrls = null
    if (t('home.teaser.highlights.video') !== 'home.teaser.highlights.video') {
      videoUrls = t('home.teaser.highlights.video').split(';').map(item => item.trim())
    }

    return (

      <div className="container">
        <TeaserSlider media={sliderImages} />

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
        </Card>
        { videoUrls && videoUrls.length &&
        <Card header={`<h1>${t('home.teaser.highlights.videotitle')}</h1>`} >
          {videoUrls.map((videoUrl, index) => (
            <LazyLoad key={`highlightsVideo${index}`} height={600} offset={300}>
              <StyledPlayer>
                <div className="react-player-container">
                  <ReactPlayer
                    url={videoUrl}
                    className="react-player"
                    controls
                    playsinline
                    config={{
                      youtube: {
                        playerVars: { modestbranding: 1 },
                      },
                    }}
                    width="100%"
                    height="100%"
                  />
                </div>
              </StyledPlayer>
            </LazyLoad>
          ))}
        </Card>
        }
        {locations}
      </div>
    )
  }
}

export default translate()(Home)
