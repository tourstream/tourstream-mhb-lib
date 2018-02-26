import React from 'react'
// import styled from 'styled-components'
import { translate } from 'react-i18next'
import { Headline1 } from '../elements/Headlines'

class Jobs extends React.Component {
  render () {
    const { t, theme } = this.props

    return (
      <div className="container">
        <Headline1 theme={theme}>{t('jobs.title')}</Headline1>

        <div className="content" dangerouslySetInnerHTML={{ __html: t('jobs.text') }} />
      </div>
    )
  }
}

export default translate()(Jobs)
