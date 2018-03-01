import React, { Component } from 'react'
import styled from 'styled-components'
import { translate } from 'react-i18next'
import { clearFix } from 'polished'

const StyledList = styled.ul`
  ${clearFix()}
  padding: 1rem 0;
  margin: 0 0 0 3rem;
  
  list-style-type: square;
  
  > li {
    color: ${props => props.theme.callToActionColor || 'black'};
    float: left;
    width: 100%;
    span {
      color: ${props => props.theme.baseFontColor || 'black'};
    }
  }
  
  @media (min-width: 576px) {
    > li {
      width: 100%;
    } 
  }

  @media (min-width: 768px) {
    > li {
      width: 50%;
    } 
  }
  
  @media (min-width: 1900px) {
    > li {
      width: 33%;
    } 
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
        <li key={key.toString()}>
          <span>{t(`proximity.string.${key}`, items[key])}</span>
        </li>
      )
    )

    return (
      <StyledList>{listItems}</StyledList>
    )
  }
}

export default translate()(ProximityList)
