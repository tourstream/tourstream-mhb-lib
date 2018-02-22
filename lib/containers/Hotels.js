import React from 'react'
// import styled from 'styled-components'
import { translate } from 'react-i18next'
import { Headline1 } from '../elements/Headlines'


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

    return (
      <div className="container">
        <Headline1 theme={theme}>Hotels</Headline1>
        <p>{JSON.stringify(hotel)}</p>
      </div>
    )
  }
}

export default translate()(Hotels)
