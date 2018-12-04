import React from 'react'
// import styled from 'styled-components'
import { translate } from 'react-i18next'
// import { Headline1 } from '../elements/Headlines'


class Imprint extends React.Component {
  render () {
    const { t } = this.props

    return (
      <div className="container">
        <div className="content">
          <h1>{t('imprint.title')}</h1>
          <div dangerouslySetInnerHTML={{ __html: t('imprint.text') }} />
        </div>
      </div>
    )
  }
}

export default translate()(Imprint)
