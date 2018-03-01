import React, { Component } from 'react'
import styled from 'styled-components'
import { clearFix } from 'polished'

const StyledCard = styled.div`
  ${clearFix()}
  padding: 0;
  display: block;
  margin-bottom: 2rem;
  
  .card-header {
    font-family: ${props => props.theme.headlineFontFamily};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 28px;
    padding: 1rem;
    @media (min-width: 1200px) {
      font-size: 2.25rem;
      padding-left: 25%;
    }
    h1, h2, h3, h4, h5, span {
      padding: 0;
      margin: 0;
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
    }
  }

  .card-body {
    padding: 0 1rem;
    ${clearFix()}
    @media (min-width: 1200px) {
      padding-left: 25%;
      padding-right: 9%;
    }
  }
`

class CardBoxed extends Component {
  render () {
    const { header } = this.props

    return (
      <StyledCard class="card">
        {header && typeof header === 'string' &&
        <div className="card-header" dangerouslySetInnerHTML={{ __html: header }} />
        }
        {header && typeof header === 'object' &&
        <div className="card-header">{header}</div>
        }
        <div className="card-body">{this.props.children}</div>
      </StyledCard>
    )
  }
}

export default CardBoxed
