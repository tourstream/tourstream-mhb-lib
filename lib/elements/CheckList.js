import React, { Component } from 'react'
import styled from 'styled-components'
import { clearFix } from 'polished'

const StyledCheckList = styled.div`
  text-align: center;
  margin: 0 0 20px 0; padding: 0;
  ul {
    display: inline-block;
    list-style: none;
    margin: 0 auto;
    width: 60%;
    padding: 0;
    ${clearFix()}
    li {
      text-align: left;
      list-style-type: none;
      margin-left: 0;
      background-image:url(/icons/x.svg);
      background-repeat:no-repeat;
      background-position:left center;
      background-size: auto 60%;
      display: inline-block;
      width: 50%;
      float: left;
      span {
        padding: 5px 5px 5px 25px;
        display: inline-block;
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

    console.log(listItems)

    return (
      <StyledCheckList><ul>{listItems}</ul></StyledCheckList>
    )
  }
}

module.exports = {
  CheckList,
}
