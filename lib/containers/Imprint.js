import React from 'react'
import styled from 'styled-components'
import { translate } from "react-i18next"

class Imprint extends React.Component {
  render () {
    return (
      <div className="container">
        <h1>Imprint</h1>
      </div>
    )
  }
}


export default translate()(Imprint)
