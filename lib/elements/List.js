import React, { Component } from 'react'
import styled from 'styled-components'
import { clearFix } from 'polished'

const StyledList = styled.ul`
  li {
  }
`

class List extends Component {
  render () {
    const { items } = this.props

    if (!items) {
      return null
    }

    let itemsList = []
    if (typeof items === 'string') {
      itemsList = items.split('\n')
    }
    if (typeof items === 'object') {
      itemsList = Object.values(items)
    }

    if (!itemsList.length) {
      return null
    }

    const listItems = itemsList.map((value, index) =>
      <li key={index.toString()}>{value.toString()}</li>
    )

    return (
      <StyledList>{listItems}</StyledList>
    )
  }
}

export default List
