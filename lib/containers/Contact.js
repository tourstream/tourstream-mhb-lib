import React from 'react'
import styled from 'styled-components'
import { translate } from "react-i18next"

class Contact extends React.Component {
  render () {
    return (
      <div className="container">
        <h1>Contact</h1>
      </div>
    )
  }
}


export default translate()(Contact)
