import React, { Component } from 'react'
import styled from 'styled-components'
import { clearFix } from 'polished'

const StyledCard = styled.div`
  ${clearFix()}
  padding: 0;
  display: block;
  
  .card-header {
    color: ${props => props.theme.headline1Color};
    background-color: ${props => props.theme.headline1BackgroundColor};
    font-family: ${props => props.theme.headline1Font};
    width: auto;
    display: block;
    font-size: 28px;
    line-height: 28px;
    padding: .5rem 0;
    text-align: center;
    vertical-align: middle;
    h1, h2, h3, h4, h5, span {
      padding: 1rem 0;
      margin: 0;
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
    }
  }

  .card-body {
    ${clearFix()}
    padding: 1rem;
    @media (min-width: 768px) {
      padding: 2rem 3rem;
    }
  }
  
  .left {
    @media (min-width: 768px) {
      float: left;
      width: 25%;
    }
    
    img {
      display: none;
      @media (min-width: 768px) {
        display: block;
        max-height: 150px;
      }
      @media (min-width: 992px) {
        max-height: 300px;
      }
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
        {header &&
          <div className="card-header" dangerouslySetInnerHTML={{ __html: header }} />
        }
        {content}
      </StyledCard>
    )
  }
}

export default Card
