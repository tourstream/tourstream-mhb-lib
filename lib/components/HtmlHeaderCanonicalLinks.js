import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { translate } from 'react-i18next'
import { translateCurrentUrl } from '../helper/translateCurrentUrl'

class HtmlHeaderCanonicalLinks extends Component {
  render () {
    const { t, i18n, languages } = this.props
    const { urls } = translateCurrentUrl(i18n)

    let links = null
    let canonical = null

    if (urls && urls.en) {
      canonical = <link rel="canonical" href={window.location.origin + urls.en} />
      links = Object.keys(urls).map(key => {
        let result = null
        if (key !== 'en') {
          result = <link key={key} rel="alternate" href={window.location.origin + urls[key]} hrefLang={key} />
        }
        return result
      })
    } else {
      canonical = <link rel="canonical" href={`${window.location.origin}/en/`} />
      links = Object.keys(languages).map(key => {
        let result = null
        if (key !== 'en') {
          result = <link key={key} rel="alternate" href={`${window.location.origin}/${key}/`} hrefLang={key} />
        }
        return result
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
