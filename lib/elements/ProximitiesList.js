import React, { Component } from 'react'
import styled from 'styled-components'
import { clearFix } from 'polished'
import { translate } from 'react-i18next'

const StyledList = styled.div`
  display: block;
  padding: 0;
  margin: 0;
  ${clearFix()}
  .item-wrapper {
  }
  .item {
    float: left;
    margin-right: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    background-color: rgba(200, 200, 200, 1);
    color: rgba(0, 0, 0, 1);
    width: 32%;
    .item-col {
      display: flex;
      padding: 1rem 1rem;
    }
    .item-col-1 {
      margin-right: auto !important;
    }
  }
`

class ProximitiesList extends Component {
  render () {
    const { t, items } = this.props

    if (!items) {
      return null
    }

    const listItems = Object.keys(items).map(key =>
      (
        <div className="item" key={key.toString()}>
          <span className="item-col item-col-1">{t(`proximities.types.${key}`)}:</span><span className="item-col item-col-2">{items[key].value ? items[key].value.toString() : ''}{items[key].entity ? items[key].entity.toString() : ''}{items[key].to ? ` ${t('proximities.to')} ${items[key].to.toString()}` : ''}</span>
        </div>
      )
    )

    return (
      <StyledList><div className="item-wrapper">{listItems}</div></StyledList>
    )
  }
}

export default translate()(ProximitiesList)
