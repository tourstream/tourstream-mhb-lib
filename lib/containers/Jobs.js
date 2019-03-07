import React from 'react'
// import styled from 'styled-components'
import { translate } from 'react-i18next'
// import { Headline1 } from '../elements/Headlines'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  dataLayer: {
    dataLayer: {
      page: {
        pageID: 'jobs',
        pageName: 'jobs'
      }
    },
  },
  dataLayerName: 'dataLayer'
}

class Jobs extends React.Component {
  render () {
    const { t } = this.props

    TagManager.dataLayer(tagManagerArgs)

    return (
      <div className="container">
        <div className="content">
          <h1>{t('jobs.title')}</h1>

          <div dangerouslySetInnerHTML={{ __html: t('jobs.text') }} />
        </div>
      </div>
    )
  }
}

export default translate()(Jobs)
