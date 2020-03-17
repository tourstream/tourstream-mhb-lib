import React, { Component } from 'react'
import styled from 'styled-components'

const Alert = styled.ul`
  background: ${({ color }) => color || 'rgb(255, 160, 0)'};
`

class Message extends Component {
  render () {
    const { children } = this.props
    return (
      <Alert {...this.props}>
        <div dangerouslySetInnerHTML={{ __html: children }} />
      </Alert>
    )
  }
}
export default Message
