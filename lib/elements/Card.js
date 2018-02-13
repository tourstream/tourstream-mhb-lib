import React, { Component } from 'react'
import styled from 'styled-components'
import { clearFix } from 'polished'

const StyledCard = styled.div`
  ${clearFix()}
  padding: 0;
  margin: 0 0 20px 0;
  display: block;
  
  .card-header {
    color: ${props => props.theme.headline1Color};
    background-color: ${props => props.theme.headline1BackgroundColor};
    font-family: ${props => props.theme.headline1Font};
    height: 38px;
    width: auto;
    display: block;
    font-size: 28px;
    font-weight: 300;
    line-height: 38px;
    padding: 0;
    text-align: center;
    vertical-align: middle;
    h1, h2, h3, h4, h5 {
      padding: 0;
      margin: 0;
      font-size: 28px;
      font-weight: 300;
      line-height: 38px;
    }
  }

  .card-body {
    padding: 0.5rem 1rem
  }
`

class Card extends React.Component {
  render () {
    const { header } = this.props

    return (
      <StyledCard class="card">
        <div className="card-header" dangerouslySetInnerHTML={{ __html: header }} />
        <div className="card-body">
          {this.props.children}
        </div>
      </StyledCard>
    )
  }
}

module.exports = {
  Card,
}
