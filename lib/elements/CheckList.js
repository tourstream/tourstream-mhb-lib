import React, { Component } from 'react'
import styled from 'styled-components'
import { clearFix } from 'polished'

const StyledCheckList = styled.div`
  text-align: center;
  margin: 1rem 1rem 1rem 1rem;
  padding: 0;
  ul {
    display: block;
    list-style: none;
    margin: 0 auto;
    @media (min-width: 768px) {
      width: 85%;
    }
    padding: 0;
    ${clearFix()}
    li {
      text-align: left;
      list-style-type: none;
      margin-left: 0;
      display: block;
      @media (min-width: 768px) {
        float: left;
        width: 50%;
      }
      span {
        padding: 0 1rem 1rem 1.5rem;
        display: inline-block;
      }
      &:before {
        font-family: "icomoon";
        content: "\\e900"; 
        display: inline-block; 
        width: 1rem;
        margin-right: -1rem;
        @media (min-width: 1200px) {
          margin-right: -0.5rem;
        }
        vertical-align: top;
        margin-top: 0.2rem;
      }
    }
  }
`

class CheckList extends Component {
  render () {
    const { items } = this.props

    if (!items) {
      return null
    }

    const itemsList = items.split('\n')

    if (!itemsList.length) {
      return null
    }

    const listItems = itemsList.map((value, index) =>
      <li key={index.toString()}><span>{value.toString()}</span></li>
    )

    return (
      <StyledCheckList><ul>{listItems}</ul></StyledCheckList>
    )
  }
}

export default CheckList
