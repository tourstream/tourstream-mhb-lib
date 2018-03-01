import React, { Component } from 'react'
import styled from 'styled-components'
import { clearFix } from 'polished'

const ListStars = styled.div`
  display: inline-block;
  ul {
    ${clearFix()}
    margin: 0;
    padding: 0;
    white-space: no-wrap;
    list-style: none;
    li {
      float: left;
      margin: 0;
    }
  }
  
  i {
    font-size: 1rem;
    line-height: inherit;
    vertical-align: middle;
    margin: .2rem;
  }
`

class StarRating extends Component {
  static renderStars (value) {
    const stars = []
    for (let i=0; i < value; i++) {
      if ((value-i) < 1) {
        stars.push(<i key={i.toString()} className={'icons-star-half'} />)
      } else {
        stars.push(<i key={i.toString()} className={'icons-christmas-star'} />)
      }
    }
    return (
      <ul>{stars}</ul>
    )
  }

  render () {
    const { rating } = this.props

    if (!rating) {
      return null
    }

    const value = parseFloat(rating)

    if (!value) {
      return null
    }
    return (
      <ListStars>
        {StarRating.renderStars(value)}
      </ListStars>
    )
  }
}

export default StarRating
