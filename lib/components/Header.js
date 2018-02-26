import React, { Component } from 'react'
import styled from 'styled-components'
import { translate } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Dispatcher } from 'flux'
import onClickOutside from 'react-onclickoutside'
import HeaderLanguageDropDown from './HeaderLanguageDropDown'
import { translateCurrentUrl } from '../helper/translateCurrentUrl'

const NavigationDispatcher = new Dispatcher()

const StyledHeader = styled.header`
  width: 100%;
  z-index: 1000;
  display: block;
  
  /*
  @media (min-width: 576px) { height: ${props => 200 / props.theme.baseFontSize}rem; }
  @media (min-width: 768px) { height: ${props => 300 / props.theme.baseFontSize}rem; }
  @media (min-width: 992px) { height: ${props => 400 / props.theme.baseFontSize}rem; }
  @media (min-width: 1200px) { height: ${props => 500 / props.theme.baseFontSize}rem; }
  */
  
  nav {
    background-color: ${props => props.theme.headerBackgroundColor};
    min-height: ${props => props.theme.headerHeight};
    font-size: ${props => props.theme.headerFontSize};
    color: ${props => props.theme.headerFontColor};
    
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    display: flex;
    flex-direction: row;
    
    padding-left: ${props => 20 / props.theme.baseFontSize}rem;
    padding-right: ${props => 20 / props.theme.baseFontSize}rem;
  }

  @media (min-width: 576px) {
    nav {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
    }
  }
  
  .navbar-toggler {
    display: block;
    line-height: 1;
    background-color: transparent;
    border: none;
    border-radius: .25rem;
    text-transform: none;
    cursor: pointer;
    align-items: flex-start;

  }
  .navbar-toggler-icon {
    &:after {
      font-family: "icomoon";
      content: "\\e906"; 
      display: inline-block; 
      font-size: ${props => 25 / props.theme.baseFontSize}rem;
      line-height: ${props => 25 / props.theme.baseFontSize}rem;
      color: ${props => props.theme.headerIconColor || 'white'};
      width: ${props => 25 / props.theme.baseFontSize}rem;
      height: ${props => 25 / props.theme.baseFontSize}rem;
    }
  }
  @media (min-width: 576px) {
    .navbar-toggler {
      display: none;
    }
  }

`

const HeaderLogo = styled.div`
  display: inline-block;
  white-space: nowrap;


  position: relative;
  padding: 0;
  margin: 0;
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
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  
  display: none;
  &.show {
    display: block;
  }


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
    display: flex;
    display: -webkit-box!important;
    display: -ms-flexbox!important;
    display: flex!important;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    padding-top: 1rem;

    ul {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      
      margin-right: auto !important;
    }
  }

`

const HeaderLanguageSwitch = styled.div`
  display: flex;
  @media (min-width: 768px) {
    display: flex;
  }
`

class Header extends Component {
  constructor () {
    super()
    this.toggleClass = this.toggleClass.bind(this)
    this.hideNavigation = this.hideNavigation.bind(this)
    this.state = {
      isActive: false,
    }
  }

  componentDidMount () {
    NavigationDispatcher.register(payload => {
      console.log('here')
      if (payload.actionType === 'NAVIGATION_CLICKED') {
        this.setState({ isActive: false })
      }
    })
  }

  toggleClass () {
    const currentState = this.state.isActive
    this.setState({ isActive: !currentState })
  }

  hideNavigation () {
    this.setState({ isActive: false })
  }

  handleClickOutside () {
    this.setState({ isActive: false })
  }

  render () {
    const { t, i18n, languages } = this.props
    const { urls } = translateCurrentUrl(i18n)
    let entries = {}

    if (Object.keys(urls).length) {
      entries = urls
    } else {
      Object.keys(languages).map(key => {
        entries[key] = `/${key}/`
        return null
      })
    }

    return (
      <StyledHeader>
        <div className="container">
          <nav>
            <HeaderLogo>
              <Link to={`/${i18n.language}`}><img src={t('header.logo.image')} alt="" /></Link>
            </HeaderLogo>
            <button className="navbar-toggler" type="button" onClick={this.toggleClass}>
              <span className="navbar-toggler-icon" />
            </button>
            <HeaderNavigation className={`${(this.state.isActive) ? 'show' : ''}`}>
              <ul>
                {/*
                <li>
                  <Link to="#" onClick={this.hideNavigation}>Destinations</Link>
                </li>
                <li>
                  <Link to="#" onClick={this.hideNavigation}>Hotels</Link>
                </li>
                <li>
                  <Link to="#" onClick={this.hideNavigation}>Newsletter</Link>
                </li>
              */}
              </ul>
              <HeaderLanguageSwitch>
                <HeaderLanguageDropDown NavigationDispatcher={NavigationDispatcher} settings={{
                  selected: i18n.language,
                  entries,
                }}
                />
              </HeaderLanguageSwitch>
            </HeaderNavigation>
          </nav>
        </div>
      </StyledHeader>
    )
  }
}

export default translate()(onClickOutside(Header))
