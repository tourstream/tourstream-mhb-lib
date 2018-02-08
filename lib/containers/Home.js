import React from 'react'
import styled from 'styled-components'
import { translate } from "react-i18next"
import { Headline1 } from '../elements/Headlines'
import { CheckList } from '../elements/CheckList'

class Home extends React.Component {
  render () {
    const { t, theme } = this.props

    return (
      <div className="container">

        <Headline1 theme={theme}>{t('home.teaser.pros.title')}</Headline1>

        <CheckList items={t('home.teaser.pros.items')} />

        <Headline1 theme={theme}>{t('home.teaser.about.title')}</Headline1>

        <p>Lorem Ipsum</p>

        <Headline1 theme={theme}>{t('home.teaser.highlights.title')}</Headline1>

        <p>Lorem Ipsum</p>

        <Headline1 theme={theme}>{t('home.teaser.locations.title')}</Headline1>

        <p>Lorem Ipsum</p>
      </div>
    )
  }
}


export default translate()(Home)
