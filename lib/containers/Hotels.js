import React from 'react'
// import styled from 'styled-components'
import { translate } from 'react-i18next'
import { Headline1 } from '../elements/Headlines'
import Card from '../elements/Card'
import List from '../elements/List'
import ProximitiesList from '../elements/ProximitiesList'


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

    console.log('params:', match)
    console.log('hotels:', hotels)

    hotel.introduction = '<p><b>OPENING February 2018</b></p><p>BEX DESIGN PLUS is a city hotel perfect for business and leisure alike with easy access to the capital’s business center, banks, shopping areas, malls, museums and sandy beaches alike.&nbsp; Ideally located in the heart of Las Palmas, the capital of the island of Gran Canaria, BEX DESIGN PLUS is a 4-star, bed &amp; breakfast hotel encompassing 97 new and modern designed rooms. Guests staying at this centrally located hotel can enjoy access to the famous Las Canteras beach that is a mere 6 minutes’ walk away or can choose to shop at “El Muelle” shopping center, visit the Museum of Science and Technology, the new Aquarium “Poema del Mar” or the Casino that are all a few steps away.</p><p>BEX DESIGN PLUS building that hosted the facilities of the Foreign Bank of Spain for years and was owned by the City of Las Palmas capital was outside the real estate market since 2011. Previously, in this building the municipal services of public transport were centralized. But people know the building as "Banco Exterior de España", hence its name “BEX” DESIGN PLUS. This modern Hotel will make a nod to the banking issue with doors of the rooms being like those of a safe, inside glass walkaway, columns looking like stacked coins, etc.… that will turn BEX DESIGN PLUS into a unique stylish city hotel. &nbsp;</p>'

    hotel.highlights = 'perfect place to explore the city\n' +
      'completely renovated\n' +
      'central location close to all connections\n' +
      'modern and stylish\n' +
      'for business or for leisure\n' +
      'elegant rooftop bar'

    hotel.proximities = {
      airport: {
        value: '25',
        entity: 'km',
      },
      nextTown: {
        value: '20',
        entity: 'km',
        to: 'Telde',
      },
      beach: {
        value: '700',
        entity: 'm',
        to: 'Las Canteras',
      },
      restaurants: {
        value: '50',
        entity: 'm',
      },
      shoppingArea: {
        value: '650',
        entity: 'm',
        to: 'El Muelle',
      },
    }

    return (
      <div className="container">
        <Headline1 theme={theme}>{hotel.name}</Headline1>
        <Card>
          <div className="content" dangerouslySetInnerHTML={{ __html: hotel.introduction }} />
        </Card>

        <Headline1 theme={theme}>Highlights</Headline1>
        <Card>
          <List items={hotel.highlights} />
        </Card>

        <Headline1 theme={theme}>Distances</Headline1>
        <Card>
          <ProximitiesList items={hotel.proximities} />
        </Card>

        <Headline1 theme={theme}>Accommodation</Headline1>

        <Headline1 theme={theme}>All Inclusive Ultra Board basis</Headline1>

        <hr />
        <code>
          <p>{JSON.stringify(hotel)}</p>
        </code>

      </div>
    )
  }
}

export default translate()(Hotels)
