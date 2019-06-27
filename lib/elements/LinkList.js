import React, { Component } from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  list-style: none;
  padding: 1rem 0;
  margin: 0;
  
  li {
  }
`

class LinkList extends Component {
  render () {
    const { items, target } = this.props

    if (!items || items.length === 0) {
      return null
    }

    const listItems = items.map((entry, index) => {
      const [url, text] = entry.split('|').map(part => part.toString().trim())
      return (
        <li key={`link-list-item-${index}`}>
          <a href={url} target={target || '_top'}>{text || url}</a>
        </li>
      )
    })

    return (
      <StyledList>{listItems}</StyledList>
    )
  }
}

export default LinkList
