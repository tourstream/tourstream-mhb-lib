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
import ShowMore from '../elements/ShowMore'

const CssTableDiv = styled.div`
  display: table;
  height: 150px;
  
  p {
    display: table-cell;
    vertical-align: middle;
    text-align: justify;
  }
`

const StyledIcon = styled.i`
  color: ${props => props.theme.proximityListItemBulletColor || 'black'};
  margin-right: .5rem;
  @media (min-width: 1200px) {
    margin-right: 1rem;
  }
`

const UnderlinedH3 = styled.h3`
  border-bottom: 1px solid ${props => props.theme.baseFontColor || 'black'};
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  @media (min-width: 1200px) {
    margin-bottom: 2rem;
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

        <br />
        <br />

        <CardBoxed header={`<h1>${hotel.name}</h1>`}>
          <p dangerouslySetInnerHTML={{ __html: hotel.introduction }} />
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
            </div>
            }

            {hotel.highlights &&
            <List items={hotel.highlights} />
            }
          </CardBoxed>
        </div>
        }

        <CardBoxed header={hotel.accommodationTitle}>
          <ShowMore
            content={<div dangerouslySetInnerHTML={{ __html: hotel.accommodation }} />}
            contentMore={<div className={'content-more'} dangerouslySetInnerHTML={{ __html: hotel.accommodationMore }} />}
            labelMore={t('general.showMore')}
            labelLess={t('general.showLess')}
          />
        </CardBoxed>

        <CardBoxed header={hotel.restaurantsTitle}>
          <ShowMore
            content={<div dangerouslySetInnerHTML={{ __html: hotel.restaurants }} />}
            contentMore={<div className={'content-more'} dangerouslySetInnerHTML={{ __html: hotel.restaurantsMore }} />}
            labelMore={t('general.showMore')}
            labelLess={t('general.showLess')}
          />
        </CardBoxed>

        <CardBoxed header={hotel.proximityTitle}>
          <ProximityList items={hotel.proximity} />
        </CardBoxed>

        <CardBoxed>
          <UnderlinedH3>Contact Us</UnderlinedH3>

          <h3>{hotel.name}</h3>
          <p>
            {hotel.address &&
            <span>
              <StyledIcon className={'icons-map-pin'} /> <span dangerouslySetInnerHTML={{ __html: hotel.address }} /><br />
            </span>
            }
            {hotel.email &&
            <span>
              <StyledIcon className={'icons-at'} /> <span dangerouslySetInnerHTML={{ __html: hotel.email }} /><br />
            </span>
            }
            {hotel.phone &&
            <span>
              <StyledIcon className={'icons-phone'} /> <span dangerouslySetInnerHTML={{ __html: hotel.phone }} /><br />
            </span>
            }
          </p>
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
