import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import DropDownMenu from './DropDownMenu'
import { translateCurrentUrl } from '../helper/translateCurrentUrl'
import { translate } from 'react-i18next'

const Container = styled.div`
  height: 2.5rem;
  @media (min-width: 768px) {
    height: auto;
  }
`


const LanguageSwitch = styled.nav`
  padding-left: 1rem;
  padding-top: 0.4rem;
  display: none;
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

const TopNavWrapper = styled.div`
  width: 100%;
  background: white;

  &.menuActive {
    background: rgba(255,255,255,0.75);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
  }
`

const TopNav = styled.nav`
  a {
    color: dimgray;
    padding: 1rem;
    display: none;
    @media (min-width: 768px) {
      display: inline-block;
    }
    
    &.close {
      @media (min-width: 768px) {
        display:none;
      }
    }
  }
  
  &.menuActive {
    a {
      display: block;
      text-align: center;
      border-bottom: 1px solid dimgray;
      &.close {
        background: rgb(0,103,158);
        text-align: right;
        color: white;
      }
    }
    display: block;
    height: 100%;
    width: 75%;
    margin-left: 25%;
    background: white;
    box-shadow: 0px 2px 4px 0 rgba(0,0,0,.25);
    grid-row: 1 / span 3;
  }
`

const TopNavToggle = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  display: block;
  &.menuActive {
      display: none;
  }
  a {
    font-size: 1.3rem;
    color: dimgray;
  }
  a:after {
    font-size: 1.3rem;
    font-family: 'labranda-iconset';
    content: "\\f0c9";
  }
  @media (min-width: 768px) {
    display: none;
  }
`

class HeaderMenu extends React.Component {
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
    const {currentPage, urls} = translateCurrentUrl(i18n)
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
      <Container className="container">
        <TopNavWrapper className={menuActive}>
          <LanguageSwitch className={menuActive}>
            <DropDownMenu settings={{
              label: t('topNav.languageSwitch.text'),
              selected: i18n.language.toUpperCase(),
              entries,
            }}
            />
          </LanguageSwitch>
          <TopNav className={menuActive}>
            <a className="close" onClick={this.toggleClass}>x close</a>
            <Link to="/de" onClick={this.state.isActive ? this.toggleClass : null}>{t('topNav.destinations.text')}</Link>
            <Link to="/de" onClick={this.state.isActive ? this.toggleClass : null}>{t('topNav.categories.text')}</Link>
            <Link to="/de" onClick={this.state.isActive ? this.toggleClass : null}>{t('topNav.hotels.text')}</Link>
            <Link to="/en" onClick={this.state.isActive ? this.toggleClass : null}>{t('topNav.newsletter.text')}</Link>
          </TopNav>
          <TopNavToggle className={menuActive}>
            <a onClick={this.toggleClass}>Menu </a>
          </TopNavToggle>
        </TopNavWrapper>
      </Container>
    )
  }
}

export default translate()(HeaderMenu)
