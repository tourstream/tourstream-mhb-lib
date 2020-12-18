import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import { translate } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Dispatcher } from 'flux'
import onClickOutside from 'react-onclickoutside'
import HeaderLanguageDropDown from './HeaderLanguageDropDown'
import HeaderHotelMenuLink from './HeaderHotelMenuLink'
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
    background-color: ${props => props.theme.get('headerBackgroundColor')};
    min-height: ${props => props.theme.get('headerHeight')};
    max-height: ${props => props.theme.get('headerHeight')};
    height: ${props => props.theme.get('headerHeight')};
    font-size: ${props => props.theme.get('headerFontSize')};
    color: ${props => props.theme.get('headerFontColor')};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    padding-left: ${props => 13 / props.theme.get('baseFontSize')}rem;
    padding-right: ${props => 13 / props.theme.get('baseFontSize')}rem;
    align-items: center;
    position: relative;
  }

  @media (min-width: 992px) {
    nav {
      flex-direction: row;
    }
  }
`

const HeaderLogo = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  white-space: nowrap;
  padding: 0;
  margin: 0;

  a {
    text-decoration: none;
    display: inline-block;
    padding: 0;
    height: ${props => 48 / props.theme.get('baseFontSize')}rem;
    max-height: ${props => props.theme.get('headerLogoImageHeight') || '100%'};
  }

  img {
    height: 100%;
    border: 0;
    padding: 0;
    margin: 0;
  }
`

const SecondaryLogo = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  right: 50%;
  top: 0;
  transform: translateX(50%);
`

const HeaderList = styled.ul`
  display: flex;
  position: absolute;
  right: 15px;
  top: 0;
  margin: 0;
  height : 100%;
  list-style: none;
`

const HeaderListItem = styled.li`
  align-items: center;
  display: flex;
`

const HeaderLanguageSwitch = styled.div`
  align-items: center;
  display: flex;

  .dropdown-toggle {
    display: block;
    line-height: 30px;
    padding: 4px 16px;
    color: inherit;
    font-size: ${props => props.theme.get('baseFontSize')}px;

    @media(min-width: 576px) {
      font-size: 22px;
    }
  }
`

const HeaderLink = styled.a`
  color: white;
  font-size: 14px;
  background: ${props => props.theme.get('headerIconColor') || 'white'};
  margin-left: 6px;
  padding: 2px;

  @media(min-width: 576px) {
    padding: 15px 25px;
    font-size: ${props => props.theme.get('baseFontSize')}px;
  }
`

const HeaderToggler = styled.button`
  line-height: 1;
  background-color: transparent;
  border: none;
  border-radius: .25rem;
  text-transform: none;
  cursor: pointer;
  align-items: flex-start;
  padding: 1px 6px;

  .toggler-icon {
    &:after {
      font-family: "MP-Hotels";
      content: "\\f12d";
      display: inline-block;
      font-size: ${props => 25 / props.theme.get('baseFontSize')}rem;
      color: ${props => props.theme.get('headerIconColor') || 'white'};
      width: ${props => 25 / props.theme.get('baseFontSize')}rem;
      height: ${props => 25 / props.theme.get('baseFontSize')}rem;
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
`

const HeaderTogglerNavigation = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
  display: none;

  &.show {
    background-color: ${props => props.theme.get('headerBackgroundColor')};
    display: block;
    margin: 0px -15px;
    padding: 0 15px;
    width: 100%;
    z-index: 1;
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
  }

  a {
    display: block;
    line-height: 30px;
    padding: 4px 16px;
    color: inherit;
  }

  @media (min-width: 992px) {
    display: flex;
    flex-basis: auto;

    &.show {
      width: auto;
      z-index: auto;
    }

    ul {
      flex-direction: row;
      margin-right: auto !important;
    }
  }
`
class Header extends Component {
  constructor () {
    super()
    this.toggleClass = this.toggleClass.bind(this)
    this.hideNavigation = this.hideNavigation.bind(this)
    this.state = {
      isActive: false,
      // openedHotels: false
    }
  }

  componentDidMount () {
    NavigationDispatcher.register(payload => {
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
    const {
      i18n, languages, theme, hotelsNav, hotelNavLabel, bookNowLink, bookNowText
    } = this.props
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
            <HeaderLogo className="header-logo">
              <Link to={`/${i18n.language}`}><img src={theme.get('headerLogoImage')} alt="" /></Link>
            </HeaderLogo>
            {theme.get('headerLogoSecondaryImage') &&
              <SecondaryLogo className="secondary-logo">
                <img src={theme.get('headerLogoSecondaryImage')} alt="" />
              </SecondaryLogo>
            }
            <HeaderList>
              <HeaderListItem>
                <HeaderLanguageSwitch className="header-language-switch">
                  <HeaderLanguageDropDown NavigationDispatcher={NavigationDispatcher} settings={{
                    selected: i18n.language,
                    entries,
                  }}
                  />
                </HeaderLanguageSwitch>
              </HeaderListItem>
              <HeaderListItem>
                <HeaderLink href={bookNowLink} type="button" className="book-now">{bookNowText}</HeaderLink>
              </HeaderListItem>
              {!!Object.keys(hotelsNav).length &&
              <HeaderListItem>
                <HeaderToggler type="button" onClick={this.toggleClass}>
                  <span className="toggler-icon" />
                </HeaderToggler>
              </HeaderListItem>
              }
            </HeaderList>
            <HeaderTogglerNavigation className={`header-navigation ${(this.state.isActive) ? 'show' : ''}`}>
              <ul className="hotel-menu">
                <HeaderHotelMenuLink hotels={hotelsNav} linkText={hotelNavLabel} />
              </ul>
            </HeaderTogglerNavigation>
          </nav>
        </div>
      </StyledHeader>
    )
  }
}

export default translate()(withTheme(onClickOutside(Header)))
