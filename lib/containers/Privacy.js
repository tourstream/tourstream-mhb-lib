import React from 'react'
import { translate } from 'react-i18next'
import { Headline1 } from '../elements/Headlines'

class Privacy extends React.Component {
  render () {
    const { t } = this.props

    return (
      <div className="container">
        <div className={'content'}>
          <Headline1>{t('privacy.title')}</Headline1>

          <div dangerouslySetInnerHTML={{ __html: t('privacy.text') }} />
        </div>
      </div>
    )
  }
}


export default translate()(Privacy)
