import React from 'react'
import styled from 'styled-components'
import { translate } from 'react-i18next'
import { Headline1 } from '../elements/Headlines'
import Card from '../elements/Card'
import CardBoxed from '../elements/CardBoxed'

import ProximityList from '../elements/ProximityList'
import TeaserSlider from '../elements/TeaserSlider'
import ListWithIcons from '../elements/ListWithIcons'
import List from '../elements/List'
import GallerySlider from '../elements/GallerySlider'

const CssTableDiv = styled.div`
  display: table;
  height: 150px;
  
  p {
    display: table-cell;
    vertical-align: middle;
    text-align: justify;
  }
`

class Hotels extends React.Component {
  render () {
    const { t, theme, match } = this.props
    let hotels = null
    try {
      hotels = JSON.parse(t('hotels'))
    } catch (e) {
      console.log('hotels', e.message)
    }

    let hotel = null
    if (hotels.constructor === Array && match.params && match.params.edv_code) {
      hotel = hotels.filter(hotel => hotel.edv_code === match.params.edv_code).shift()
    }

    return (
      <div className="container">
        <TeaserSlider media={hotel.sliderImages} />

        <CardBoxed header={hotel.name}>
          <div dangerouslySetInnerHTML={{ __html: hotel.introduction }} />
        </CardBoxed>

        {hotel.carouselImages &&
        <GallerySlider media={hotel.carouselImages} />
        }

        {(hotel.features || hotel.highlights) &&
          <div>
            <CardBoxed header={hotel.highlightsTitle}>
              {hotel.features &&
              <div>
                <ListWithIcons items={hotel.features} />
                <br />
              </div>
              }

              {hotel.highlights &&
              <List items={hotel.highlights} />
              }
            </CardBoxed>
          </div>
        }

        <CardBoxed header={hotel.proximityTitle}>
          <ProximityList items={hotel.proximity} />
        </CardBoxed>

        <CardBoxed header={hotel.accommodationTitle}>
          <div dangerouslySetInnerHTML={{ __html: hotel.accommodation }} />
        </CardBoxed>

        <CardBoxed header={hotel.restaurantsTitle}>
          <div dangerouslySetInnerHTML={{ __html: hotel.restaurants }} />
        </CardBoxed>

        <Headline1 theme={theme}>{hotel.outAboutTitle}</Headline1>
        <Card image={hotel.outAboutLogo}>
          <CssTableDiv>
            <p><span dangerouslySetInnerHTML={{ __html: hotel.outAbout }} /></p>
          </CssTableDiv>
        </Card>
      </div>
    )
  }
}

export default translate()(Hotels)
