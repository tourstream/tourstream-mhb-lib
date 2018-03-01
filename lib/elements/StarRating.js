import React, { Component } from 'react'
import styled from 'styled-components'

const ListStars = styled.div`
  display: inline-block;
  white-space: no-wrap;
  line-height: inherit;
  vertical-align: top;
  font-size: 1rem;
  i {
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
      <span>{stars}</span>
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
