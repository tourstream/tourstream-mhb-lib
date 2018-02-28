import React, { Component } from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  list-style: none;
  padding: 1rem 0;
  margin: 0;
  
  li {
    line-height: 2rem;
    margin-bottom: 1rem;
    vertical-align: middle;
    i {
      margin-right: 1rem;
      font-size: 2rem;
      float: left;
      color: ${props => props.theme.proximityListItemBulletColor || 'black'};
    }
  }
  
  display: flex;
  flex-wrap: wrap;
  li {
    width: 100%;
    &:nth-of-type(odd) { }
    @media (max-width: 992px) { 
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

class ListWithIcons extends Component {
  render () {
    const { items } = this.props

    if (items.constructor !== Array || items.length === 0) {
      return null
    }

    const listItems = items.map(entry => (
      <li key={entry.key.toString()}>
        <i className={`icons-${entry.key.toString()}`} /> {entry.description.toString()}
      </li>
    ))

    return (
      <StyledList>{listItems}</StyledList>
    )
  }
}

export default ListWithIcons
