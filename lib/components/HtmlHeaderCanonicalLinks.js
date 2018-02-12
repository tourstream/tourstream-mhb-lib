import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { translate } from 'react-i18next'
import { translateCurrentUrl } from '../helper/translateCurrentUrl'

class HtmlHeaderCanonicalLinks extends Component {
  render () {
    const { t, i18n } = this.props
    const urls = translateCurrentUrl(i18n)

    return (
      <Helmet>
        <title>{t('header.title')}</title>
        { /** <link rel="canonical" href={`${window.location.origin}`} />
          */ }
        {Object.keys(urls).map(key => {
          return <link key={key} rel="alternate" href={window.location.origin + urls[key]} hrefLang={key} />
        }
        )}
      </Helmet>
    )
  }
}

export default translate()(HtmlHeaderCanonicalLinks)
