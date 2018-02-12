import React, { Component } from 'react'
import styled from 'styled-components'
import { translate } from 'react-i18next'
import { Link } from 'react-router-dom'


const StyledHeader = styled.header`
  background-color: ${props => props.theme.headerBackgroundColor};
  position: relative;
  height: ${props => props.theme.headerHeight};
  width: 100%;
  /*
  @media (min-width: 576px) { height: ${props => 200 / props.theme.baseFontSize}rem; }
  @media (min-width: 768px) { height: ${props => 300 / props.theme.baseFontSize}rem; }
  @media (min-width: 992px) { height: ${props => 400 / props.theme.baseFontSize}rem; }
  @media (min-width: 1200px) { height: ${props => 500 / props.theme.baseFontSize}rem; }
  */
  
`

const HeaderLogo = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  float: left;
  margin-left: 40px;
  height: 80px;
  a {
    text-decoration: none;
    display: inline-block;
    padding: 0;
    margin: 5px 0 0 0;
    height: 70px;
  }
  img {
    height: 100%;
    border: 0;
    padding: 0;
    margin: 0;
  }
`

class Header extends Component {
  render () {
    const { t, i18n } = this.props

    return (
      <div className="container">
        <StyledHeader>
          <HeaderLogo>
            <Link to={`/${i18n.language}`}><img src={t('header.logo.image')} alt="" /></Link>
          </HeaderLogo>
        </StyledHeader>
      </div>
    )
  }
}

export default translate()(Header)
