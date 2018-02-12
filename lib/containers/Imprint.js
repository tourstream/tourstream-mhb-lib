import React from 'react'
// import styled from 'styled-components'
import { translate } from 'react-i18next'
import { Headline1 } from '../elements/Headlines'


class Imprint extends React.Component {
  render () {
    const { t, theme } = this.props

    return (
      <div className="container">
        <Headline1 theme={theme}>{t('imprint.title')}</Headline1>

        <div className="content" dangerouslySetInnerHTML={{ __html: t('imprint.text') }} />
      </div>
    )
  }
}

export default translate()(Imprint)
