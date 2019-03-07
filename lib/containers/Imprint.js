import React from 'react'
// import styled from 'styled-components'
import { translate } from 'react-i18next'
// import { Headline1 } from '../elements/Headlines'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  dataLayer: {
    dataLayer: {
      page: {
        pageID: 'imprint',
        pageName: 'imprint'
      }
    },
  },
  dataLayerName: 'dataLayer'
}

class Imprint extends React.Component {
  render () {
    const { t } = this.props

    TagManager.dataLayer(tagManagerArgs)

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
