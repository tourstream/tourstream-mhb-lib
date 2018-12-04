import React from 'react'
// import styled from 'styled-components'
import { translate } from 'react-i18next'

class Privacy extends React.Component {
  render () {
    const { t } = this.props

    return (
      <div className="container">
        <div className="content">
          <h1>{t('privacy.title')}</h1>

          <div dangerouslySetInnerHTML={{ __html: t('privacy.text') }} />
        </div>
      </div>
    )
  }
}


export default translate()(Privacy)
