import React, { Component } from 'react'
import styled from 'styled-components'
import { translate } from 'react-i18next'

const StyledList = styled.div`
  display: block;
  padding: 0;
  margin: 0;
  
  .item-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  
  .item {
    width: 100%;
    margin: 0 0 1rem 0;
    padding: 10px;
    &:nth-of-type(odd) {
    }
    background-color: ${props => props.theme.proximityListItemBackgroundColor || 'rgba(200, 200, 200, 1)'};
    color: ${props => props.theme.proximityListItemColor || 'rgba(0, 0, 0, 1)'};
    display: flex;
    flex-direction: row;
    .item-col {
      display: flex;
    }
    .item-col-1 {
      margin-right: auto !important;
    }
    
    @media (min-width: 576px) and (max-width: 992px) { 
      width: 49%; 
      margin-left: 1%;
      margin-right: 1%;
      &:nth-of-type(2n+1) {
        margin-left: 0;
      }
      &:nth-of-type(2n) {
        margin-right: 0;
      }
    }
    @media (min-width: 992px) { 
      width: 32%; 
      margin-left: 1%;
      margin-right: 1%;
      &:nth-of-type(3n+1) {
        margin-left: 0;
      }
      &:nth-of-type(3n) {
        margin-right: 0;
      }
    }
    @media (min-width: 1200px) {  }

  }
`

class ProximityList extends Component {
  render () {
    const { t, items } = this.props

    if (!items) {
      return null
    }

    const listItems = Object.keys(items).map(key =>
      (
        <div className="item" key={key.toString()}>
          <span className="item-col item-col-1">{t(`proximity.types.${key}`)}:</span>
          <span className="item-col item-col-2">{items[key].value ? items[key].value.toString() : ''}{items[key].entity ? items[key].entity.toString() : ''}{items[key].to ? ` ${t('proximity.to')} ${items[key].to.toString()}` : ''}</span>
        </div>
      )
    )

    return (
      <StyledList><div className="item-wrapper">{listItems}</div></StyledList>
    )
  }
}

export default translate()(ProximityList)
