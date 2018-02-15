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
  
  .left {
    @media (min-width: 768px) {
      float: left;
      width: 25%;
    }
    
    img {
      max-height: 98%;
      max-width: 98%;    
    }
  }
  
  .right {
    padding-left: 1rem;
    @media (min-width: 768px) {
      float: left;
      width: 75%;
    }
  }
`

class Card extends Component {
  render () {
    const { header, image } = this.props

    let content = <div className="card-body">{this.props.children}</div>

    if (image) {
      content = (<div className="card-body">
        <div className="left"><img src={image} alt="" /></div>
        <div className="right">{this.props.children}</div>
      </div>)
    }

    return (
      <StyledCard class="card">
        <div className="card-header" dangerouslySetInnerHTML={{ __html: header }} />
        {content}
      </StyledCard>
    )
  }
}

module.exports = {
  Card,
}
