import React, { Component } from 'react'
import styled from 'styled-components'
import { translate } from 'react-i18next'
import { Link } from 'react-router-dom'

import HeaderLanguageDropDown from './HeaderLanguageDropDown'
import { translateCurrentUrl } from '../helper/translateCurrentUrl'

const StyledHeader = styled.header`
  background-color: ${props => props.theme.headerBackgroundColor};
  position: relative;
  min-height: ${props => props.theme.headerHeight};
  font-size: ${props => props.theme.headerFontSize};
  color: ${props => props.theme.headerFontColor};
  width: 100%;
  /*
  @media (min-width: 576px) { height: ${props => 200 / props.theme.baseFontSize}rem; }
  @media (min-width: 768px) { height: ${props => 300 / props.theme.baseFontSize}rem; }
  @media (min-width: 992px) { height: ${props => 400 / props.theme.baseFontSize}rem; }
  @media (min-width: 1200px) { height: ${props => 500 / props.theme.baseFontSize}rem; }
  */

  
  @media (min-width: 576px) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  
  nav {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 576px) {
    nav {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
    }
  }

`

const HeaderLogo = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  margin-left: 40px;
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

const HeaderNavigation = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  a {
    display: block;
    line-height: 30px;
    padding: 4px 16px;
    color: inherit;
  }
  
  @media (min-width: 576px) {
    ul {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
    }
  }

`

const HeaderLanguageSwitch = styled.div`
  a {
    color: ${props => props.theme.baseFontColor};
  }
  @media (min-width: 768px) {
    display: block;
  }
  &.menuActive {
    text-align: center;
    position: absolute;
    bottom: 0;
    margin-left: 25%;
    width: 75%;
    display: block;
    
  }
  
  .dropdown-menu {
    @media (max-width: 768px) {
      top: auto;
      bottom: 4rem;
      left: 0;
      right: 2rem;
    }
  }
`

class Header extends Component {
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
    const { t, i18n, languages } = this.props
    const { currentPage, urls } = translateCurrentUrl(i18n)
    let entries = {}
    let menuActive = ''
    if (this.state.isActive) {
      menuActive += ' menuActive'
    }

    if (currentPage.length) {
      entries = urls
    } else {
      Object.keys(languages).map(key => { entries[key] = `/${key}/` })
    }

    return (
      <div className="container">
        <StyledHeader>
          <nav>
            <HeaderLogo>
              <Link to={`/${i18n.language}`}><img src={t('header.logo.image')} alt="" /></Link>
            </HeaderLogo>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <HeaderNavigation>
              <ul>
                <li>
                  <Link to="#">Destinations</Link>
                </li>
                <li>
                  <Link to="#">Hotels</Link>
                </li>
                <li>
                  <Link to="#">Newsletter</Link>
                </li>
              </ul>
            </HeaderNavigation>
            <HeaderLanguageSwitch className={menuActive}>
              <HeaderLanguageDropDown settings={{
                selected: i18n.language,
                entries,
              }}
              />
            </HeaderLanguageSwitch>
          </nav>
        </StyledHeader>
      </div>
    )
  }
}

export default translate()(Header)
