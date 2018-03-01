import React, { Component } from 'react'
import styled from 'styled-components'

const StyledA = styled.a`
  color: ${props => props.theme.callToActionColor || 'black'};
  font-weight: 700;
  &::after {
    font-family: "icomoon";
    content: "\\e901"; 
    transform: rotate(${props => props.active ? '180' : '0'}deg); 
    display: inline-block; 
    margin-right: -1rem;
    margin-left: 0.5rem;
    font-weight: bold;
    vertical-align: middle;
    line-height: inherit;
    font-size: 80%;
  }

  
`

const ContentMore = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
`


class ShowMore extends Component {
  constructor () {
    super()
    this.toggleClass = this.toggleClass.bind(this)
    this.state = {
      isActive: false,
    }
  }
  toggleClass () {
    const currentState = this.state.isActive
    this.setState({ isActive: !currentState })
  }

  render () {
    const { content, contentMore, labelMore, labelLess } = this.props

    return (
      <div>
        {content}
        {contentMore &&
          <div>
            <ContentMore active={this.state.isActive}>
              {contentMore}
            </ContentMore>
            <StyledA
              active={this.state.isActive}
              onClick={this.toggleClass}
            >{this.state.isActive ? labelLess : labelMore}</StyledA>
          </div>
        }
      </div>
    )
  }
}

export default ShowMore
