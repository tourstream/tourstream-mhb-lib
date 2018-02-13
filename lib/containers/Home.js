import React from 'react'
import { translate } from "react-i18next"
import { CheckList } from '../elements/CheckList'
import { Card } from '../elements/Card'

class Home extends React.Component {
  render () {
    const { t, theme } = this.props

    return (
      <div className="container">

        <Card header={`<h1>${t('home.teaser.pros.title')}</h1>`}>
          <CheckList items={t('home.teaser.pros.items')} />
        </Card>

        <Card header={`<h1>${t('home.teaser.about.title')}</h1>`}>
          <p>Lorem Ipsum</p>
        </Card>

        <Card header={`<h1>${t('home.teaser.highlights.title')}</h1>`}>
          <p>Lorem Ipsum</p>
        </Card>

        <Card header={`<h1>${t('home.teaser.locations.title')}</h1>`}>
          <p>Lorem Ipsum</p>
        </Card>

      </div>
    )
  }
}


export default translate()(Home)
