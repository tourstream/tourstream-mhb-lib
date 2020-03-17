import React, { Component } from 'react'
import styled from 'styled-components'
import Close from '../assets/close.svg'

const Alert = styled.div`
  background: rgb(255, 160, 0);
  position: absolute;
  padding: 10px 55px 10px 10px;
  z-index: 999;
  width: 100%;
  top: 80px;
  color: #fff;
  font-size: 18px;
  text-align: center;
`

const CloseLink = styled.a`
  position: absolute;
  right: 20px;
  top: 10px;
`

const ImageIcon = styled.img`
  width: 20px;
`
class Message extends Component {
  render () {
    const { children, onClose, isOpen } = this.props
    if (isOpen) {
      return (
        <Alert {...this.props}>
          <div dangerouslySetInnerHTML={{ __html: children }} />
          <CloseLink onClick={onClose}>
            <ImageIcon src={Close} alt="Close icon" />
          </CloseLink>
        </Alert>
      )
    }
    return null
  }
}
export default Message
