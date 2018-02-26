import React from 'react'

import { translate } from 'react-i18next'
import { Headline1 } from '../elements/Headlines'

class Contacts extends React.Component {
  render () {
    const { t, theme } = this.props

    return (
      <div className="container">
        <Headline1 theme={theme}>{t('contacts.title')}</Headline1>

        <div className="content" dangerouslySetInnerHTML={{ __html: t('contacts.text') }} />
      </div>
    )
  }
}

export default translate()(Contacts)
