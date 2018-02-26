import React, { Component } from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  li {
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
        <i className={`icons-${entry.key.toString()}`} />{entry.description.toString()}
      </li>
    ))

    return (
      <StyledList>{listItems}</StyledList>
    )
  }
}

export default ListWithIcons
