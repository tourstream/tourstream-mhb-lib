import React from 'react'
import styled from 'styled-components'
import { translate } from 'react-i18next'
import { Headline1 } from '../elements/Headlines'
import Card from '../elements/Card'

import ProximityList from '../elements/ProximityList'
import TeaserSlider from '../elements/TeaserSlider'
import ListWithIcons from '../elements/ListWithIcons'
import List from '../elements/List'

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
    // TODO: filter hotels locize key for current hotel
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
        <Headline1 theme={theme}>{hotel.name}</Headline1>

        <Card>
          <div className="content" dangerouslySetInnerHTML={{ __html: hotel.introduction }} />
        </Card>

        {(hotel.features || hotel.highlights) &&
          <div>
            <Headline1 theme={theme}>Highlights</Headline1>
            <Card>
              {hotel.features &&
              <div>
                <ListWithIcons items={hotel.features} />
                <br />
              </div>
              }

              {hotel.highlights &&
              <List items={hotel.highlights} />
              }
            </Card>
          </div>
        }

        <Headline1 theme={theme}>Distances</Headline1>
        <Card>
          <ProximityList items={hotel.proximity} />
        </Card>

        <Headline1 theme={theme}>Accommodation</Headline1>
        <Card>
          <div className="content" dangerouslySetInnerHTML={{ __html: hotel.accomodation }} />
        </Card>

        <Headline1 theme={theme}>All Inclusive Ultra Board basis</Headline1>

        <Card image={t('home.teaser.about.logo')}>
          <CssTableDiv>
            <p><span dangerouslySetInnerHTML={{ __html: t('home.teaser.about.text') }} /></p>
          </CssTableDiv>
        </Card>

        <Headline1 theme={theme}>DEBUG, please ignore</Headline1>
        <code style={{ display: 'block', maxWidth: 'auto', padding: '2rem', overflow: 'scroll' }}>
          {JSON.stringify(hotel)}
        </code>

      </div>
    )
  }
}

export default translate()(Hotels)
