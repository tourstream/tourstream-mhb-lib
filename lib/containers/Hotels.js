import React from 'react'
// import styled from 'styled-components'
import { translate } from 'react-i18next'
import { Headline1 } from '../elements/Headlines'


class Hotels extends React.Component {
  render () {
    const { t, theme } = this.props
    // TODO: filter hotels locize key for current hotel
    const hotel = t('hotels')
    return (
      <div className="container">
        <Headline1 theme={theme}>Hotels</Headline1>
        <p>{hotel}</p>
      </div>
    )
  }
}

export default translate()(Hotels)
