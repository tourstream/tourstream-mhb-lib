import LazyLoad from 'react-lazyload'
import ReactPlayer from 'react-player'

import React from 'react'
import styled from 'styled-components'
import { translate } from 'react-i18next'
import Card from '../elements/Card'
import CardBoxed from '../elements/CardBoxed'

import ProximityList from '../elements/ProximityList'
import TeaserSlider from '../elements/TeaserSlider'
import ListWithIcons from '../elements/ListWithIcons'
import List from '../elements/List'
import GallerySlider from '../elements/GallerySlider'
import ShowMore from '../elements/ShowMore'
import StarRating from '../elements/StarRating'
import LinkList from '../elements/LinkList'
import Message from '../elements/Message'

const StyledIcon = styled.i`
  color: ${props => props.theme.get('callToActionColor') || 'black'};
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

const StyledLine = styled.hr`
  border: none;
  border-bottom: 1px solid ${props => props.theme.baseFontColor || 'black'};
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (min-width: 1200px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`

const TextGroup = styled.span`
  .text-extended {
    display: none;
    
    &.content-more {
      display: block;
    }
  }
  
  @media (min-width: 992px) {
    .text-extended {
      display: block;
      
      &.content-more {
        display: none;
      }
    }
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

class Hotels extends React.Component {
  state={
    isOpen: true,
  }
  render () {
    const { t, match } = this.props
    const { isOpen } = this.state
    let hotels = null
    try {
      hotels = (typeof t('hotels') === 'string') ? JSON.parse(t('hotels')) : t('hotels')
    } catch (e) {
      console.error('hotels', e.message)
    }

    let hotel = null
    if (hotels.constructor === Array && match.params && match.params.edv_code) {
      hotel = hotels.filter(hotel => hotel.edv_code === match.params.edv_code).shift()
    }

    return (
      <div className="container">
        {hotel.message && hotel.message !== '' && (
          <Message isOpen={isOpen} onClose={() => this.setState({ isOpen: false })}>
            {hotel.message}
          </Message>
        )}

        <TeaserSlider media={hotel.sliderImages} />

        <br />
        <br />

        <CardBoxed header={<h1>{hotel.name} <StarRating rating={hotel.stars} /></h1>}>
          <p dangerouslySetInnerHTML={{ __html: hotel.introduction }} />
        </CardBoxed>

        {hotel.carouselImages &&
        <GallerySlider media={hotel.carouselImages} />
        }

        {hotel.highlightsTitle && (hotel.features || hotel.highlights) &&
        <div>
          <CardBoxed header={`<h2>${hotel.highlightsTitle}</h2>`}>
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

        {(hotel.video) &&
        <div>
          <CardBoxed header={`<h1>${hotel.videoTitle}</h1>`}>
            <LazyLoad height={300} offset={300}>
              <StyledPlayer>
                <div className="react-player-container">
                  <ReactPlayer
                    url={hotel.video}
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
          </CardBoxed>
        </div>
        }

        <CardBoxed header={`<h2>${hotel.accommodationTitle}</h2>`}>
          <ShowMore
            content={
              <TextGroup>
                <div dangerouslySetInnerHTML={{ __html: hotel.accommodation }} />
                <div className="text-extended" dangerouslySetInnerHTML={{ __html: hotel.accommodationExtended }} />
              </TextGroup>
            }
            contentMore={
              <TextGroup>
                <div className="content-more text-extended" dangerouslySetInnerHTML={{ __html: hotel.accommodationExtended }} />
                <div className="content-more" dangerouslySetInnerHTML={{ __html: hotel.accommodationMore }} />
              </TextGroup>
            }
            labelMore={t('general.showMore')}
            labelLess={t('general.showLess')}
          />
        </CardBoxed>

        {hotel.restaurantsTitle && hotel.restaurants && (
          <CardBoxed header={`<h2>${hotel.restaurantsTitle}</h2>`}>
            <ShowMore
              content={
                <TextGroup>
                  <div dangerouslySetInnerHTML={{ __html: hotel.restaurants }} />
                  <div className="text-extended" dangerouslySetInnerHTML={{ __html: hotel.restaurantsExtended }} />
                </TextGroup>
            }
              contentMore={
                <TextGroup>
                  <div className="content-more text-extended" dangerouslySetInnerHTML={{ __html: hotel.restaurantsExtended }} />
                  <div className="content-more" dangerouslySetInnerHTML={{ __html: hotel.restaurantsMore }} />
                </TextGroup>
            }
              labelMore={t('general.showMore')}
              labelLess={t('general.showLess')}
          />
          </CardBoxed>
        )}

        {(hotel.facilitiesTitle) && (hotel.facilities) && (
          <CardBoxed header={`<h2>${hotel.facilitiesTitle}</h2>`}>
            {hotel.facilitiesMore && (
              <ShowMore
                content={
                  <TextGroup>
                    <div dangerouslySetInnerHTML={{ __html: hotel.facilities }} />
                  </TextGroup>
                }
                contentMore={
                  <TextGroup>
                    <div className="content-more" dangerouslySetInnerHTML={{ __html: hotel.facilitiesMore }} />
                  </TextGroup>
                }
                labelMore={t('general.showMore')}
                labelLess={t('general.showLess')}
              />
            ) || (
              <div dangerouslySetInnerHTML={{ __html: hotel.facilities }} />
            )}
            {hotel.facilitiesAdd && (
              <React.Fragment>
                <br />
                <div dangerouslySetInnerHTML={{ __html: hotel.facilitiesAdd }} />
              </React.Fragment>
            )}
          </CardBoxed>
        )}

        {(hotel.wellnessTitle) && (hotel.wellness) && (
          <CardBoxed header={`<h2>${hotel.wellnessTitle}</h2>`}>
            <div dangerouslySetInnerHTML={{ __html: hotel.wellness }} />
          </CardBoxed>
        )}

        {(hotel.extrasTitle) && (hotel.extras) && (
          <div>
            <CardBoxed header={`<h2>${hotel.extrasTitle}</h2>`}>
              {hotel.extras.map((obj, index) => (
                <div key={`extra_${index}_`}>
                  {obj.description && (
                    <p>{obj.description}</p>
                  )}
                  <List items={obj.list} />
                  {obj.afterDescription && (
                    <p>{obj.afterDescription}</p>
                  )}
                </div>
              ))}
            </CardBoxed>
          </div>
        )}

        {(hotel.sportActivitiesTitle) && (hotel.sportActivities) && (
        <CardBoxed header={`<h2>${hotel.sportActivitiesTitle}</h2>`}>
          <div dangerouslySetInnerHTML={{ __html: hotel.sportActivities }} />
        </CardBoxed>
        )}

        {(hotel.miniclubTitle) && (hotel.miniclub) && (
        <CardBoxed header={`<h2>${hotel.miniclubTitle}</h2>`}>
          <div dangerouslySetInnerHTML={{ __html: hotel.miniclub }} />
        </CardBoxed>
        )}

        {(hotel.specialEventsTitle) && (hotel.specialEvents) && (
        <CardBoxed header={`<h2>${hotel.specialEventsTitle}</h2>`}>
          <div dangerouslySetInnerHTML={{ __html: hotel.specialEvents }} />
        </CardBoxed>
        )}

        {(hotel.entertainmentTitle) && (hotel.entertainment) && (
          <CardBoxed header={`<h2>${hotel.entertainmentTitle}</h2>`}>
            <div dangerouslySetInnerHTML={{ __html: hotel.entertainment }} />
            <br />
          </CardBoxed>
        )}

        {(hotel.meetingRoomsTitle) && (hotel.meetingRooms) && (
          <CardBoxed header={`<h2>${hotel.meetingRoomsTitle}</h2>`}>
            <div dangerouslySetInnerHTML={{ __html: hotel.meetingRooms }} />
            <br />
          </CardBoxed>
        )}

        <CardBoxed header={`<h2>${hotel.proximityTitle}</h2>`}>
          <ProximityList items={hotel.proximity} />
        </CardBoxed>

        {(hotel.mediaListTitle) && (hotel.mediaList) && (
          <CardBoxed header={`<h2>${hotel.mediaListTitle}</h2>`}>
            <LinkList target="_blank" items={hotel.mediaList} />
            <br />
          </CardBoxed>
        )}

        <CardBoxed>
          <UnderlinedH3>{t('contact.title')}</UnderlinedH3>

          <h3>{hotel.name}</h3>
          <p>
            {hotel.address &&
            <span>
              <StyledIcon className="icons-map-pin" /> <span dangerouslySetInnerHTML={{ __html: hotel.address }} /><br />
            </span>
            }
            {hotel.email &&
            <span>
              <StyledIcon className="icons-at" /> <span dangerouslySetInnerHTML={{ __html: hotel.email }} /><br />
            </span>
            }
            {hotel.phone &&
            <span>
              <StyledIcon className="icons-phone" /> <span dangerouslySetInnerHTML={{ __html: hotel.phone }} /><br />
            </span>
            }
          </p>
        </CardBoxed>

        <StyledLine />

        <Card image={hotel.outAboutLogo}>
          <h2>{hotel.outAboutTitle}</h2>
          <p><span dangerouslySetInnerHTML={{ __html: hotel.outAbout }} /></p>
        </Card>
      </div>
    )
  }
}

export default translate()(Hotels)
