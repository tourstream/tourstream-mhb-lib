import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { translate } from 'react-i18next'
import { translateCurrentUrl } from '../helper/translateCurrentUrl'

class HtmlHeaderCanonicalLinks extends Component {
  render () {
    const { t, i18n } = this.props
    const { urls, currentPage } = translateCurrentUrl(i18n)

    let links = null
    let canonical = null

    if (currentPage.length) {
      canonical = <link rel="canonical" href={window.location.origin + urls.en} />
      links = Object.keys(urls).map(key => {
        if (key !== 'en') {
          return <link key={key} rel="alternate" href={window.location.origin + urls[key]} hrefLang={key} />
        } else {
          return null
        }
      })
    }

    return (
      <Helmet>
        <title>{t('header.title')}</title>
        {canonical}
        {links}
      </Helmet>
    )
  }
}

export default translate()(HtmlHeaderCanonicalLinks)
