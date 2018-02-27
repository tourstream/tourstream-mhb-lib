import React from 'react'

import { translate } from 'react-i18next'
// import { Headline1 } from '../elements/Headlines'

class Contacts extends React.Component {
  render () {
    const { t } = this.props

    return (
      <div className="container">
        <div className={'content'}>
          <h1>{t('contact.title')}</h1>

          <div dangerouslySetInnerHTML={{ __html: t('contact.text') }} />
        </div>
      </div>
    )
  }
}

export default translate()(Contacts)
