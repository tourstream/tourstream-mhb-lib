import React from 'react'
import TagManager from 'react-gtm-module'

import { translate } from 'react-i18next'
// import { Headline1 } from '../elements/Headlines'

const tagManagerArgs = {
  dataLayer: {
    dataLayer: {
      page: {
        pageID: 'contact',
        pageName: 'contact'
      }
    },
  },
  dataLayerName: 'dataLayer'
}

class Contacts extends React.Component {
  render () {
    const { t } = this.props

    TagManager.dataLayer(tagManagerArgs)

    return (
      <div className="container">
        <div className="content">
          <h1>{t('contact.title')}</h1>

          <div dangerouslySetInnerHTML={{ __html: t('contact.text') }} />
        </div>
      </div>
    )
  }
}

export default translate()(Contacts)
