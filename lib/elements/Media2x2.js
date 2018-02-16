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
    img {
      height: 250px;
    }
    @media (min-width: 400px) {
      img {
        height: 350px;
      }
    }
    @media (min-width: 768px) {
      padding: 1rem 2rem 1rem 2rem;
      img {
        height: 300px;
      }
    }
    @media (min-width: 992px) {
      img {
        height: 400px;
      }
    }
  }
  
  .left {
    margin-top: 0.5rem;
    @media (min-width: 768px) {
      float: left;
      width: 50%;
      padding: 1% 1% 1% 1%;
    }
  }
  
  .right {
    margin-top: 0.5rem;
    @media (min-width: 768px) {
      float: right;
      width: 50%;
      padding: 1% 1% 1% 1%;
    }
  }
`

class Media2x2 extends Component {
  render () {
    const { header, media } = this.props

    return (
      <StyledCard class="card">
        <div className="card-header" dangerouslySetInnerHTML={{ __html: header }} />
        <div className="card-body">
          <div className="left"><img src="/images/shutterstock_560973166.jpeg" alt="" /></div>
          <div className="right"><img src="/images/shutterstock_577455703.jpeg" alt="" /></div>
        </div>
        <div className="card-body">
          <div className="left"><img src="/images/shutterstock_678253975.jpeg" alt="" /></div>
          <div className="right"><img src="/images/shutterstock_560973166.jpeg" alt="" /></div>
        </div>
      </StyledCard>
    )
  }
}

export default Media2x2
