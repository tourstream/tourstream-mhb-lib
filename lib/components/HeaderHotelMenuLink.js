import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components'
import { translate } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Dispatcher } from 'flux'
import onClickOutside from 'react-onclickoutside'

const NavigationDispatcher = new Dispatcher()

const StyledDropDown = styled.div`
  display: block;

  z-index: 1000;
  &.dropdown {
    position: relative;
  }
  .dropdown-menu {
    display: flex;
    flex-direction: row;
  }
  .dropdown-toggle {
    display: none;
    line-height: 30px;
    padding: 4px 16px;
    color: ${props => props.theme.get('headerFontColor') || 'white'} !important;
    cursor: pointer;
  }

  .dropdown-item {
    color: ${props => props.theme.get('headerDropDownFontColorMobile') || 'white'};
    &.active {
      font-weight: bold;
      color: ${props => props.theme.get('headerDropDownActiveColor') || 'white'};
    }
  }
  
  .dropdown-toggle::after {
    font-family: "icomoon";
    content: "\\e901"; 
    display: inline-block; 
    width: 1rem;
    margin-right: -1rem;
    width: 2rem;
    margin-left: 0.5rem;
    color: ${props => props.theme.get('headerIconColor') || 'white'};
    font-weight: bold;
    font-size: 2rem;
    vertical-align: bottom;
  }
  
  @media (min-width: 992px) {
    .dropdown-menu {
      font-size: ${props => props.theme.get('headerDropDownFontSize') || '16px'};;
      border: 1px solid;
      border-color: ${props => props.theme.get('headerDropDownBorderColor') || '#efefef'};
      background-color: ${props => props.theme.get('headerDropDownBackgroundColor') || 'white'};

      width: 15rem;
      display: none;
      position: absolute;
      transform: translate3d(0, 0, 0);
      left: 0;
      will-change: transform;
      box-shadow: 2px 2px 4px 0 rgba(0,0,0,.25);
      z-index: 1000;
      a {
        display: block;
        padding: 0.25rem 1.5rem;
      }
      &.show {
        display: block;
      }
      
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
    
    .dropdown-item {
      color: ${props => props.theme.get('headerDropDownFontColor') || 'white'};
      &:hover {
        background: ${props => props.theme.get('headerDropDownHoverBackgroundColor') || '#efefef'};
      }
      &.active {
        color: ${props => props.theme.get('headerDropDownActiveColor') || '#efefef'};
      }
    }
    
    .dropdown-toggle {
      display: block;
    }
  }
`

class HeaderHotelMenuLink extends Component {
  constructor () {
    super()
    this.toggleClass = this.toggleClass.bind(this)
    this.state = {
      isActive: false,
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
    this.setState({ isActive: !this.state.isActive })
  }

  handleClickOutside () {
    this.setState({ isActive: false })
  }

  renderLink(key, url) {
    if (url.indexOf('http') !== 0) {
      return (<Link key={key} className={'dropdown-item'} to={url} onClick={this.toggleClass}>{key.toUpperCase()}<i /></Link>);
    }

    return <a key={key} className={'dropdown-item'} href={url}>{key.toUpperCase()}<i /></a>
  }

  render () {
    const { hotels } = this.props
    if (Object.keys(hotels).length > 0) {
      let dropDownMenuClass = 'dropdown-menu'
      if (this.state.isActive) {
        dropDownMenuClass += ' show'
      }

      return (
        <li>
          <Link to="#" onClick={this.toggleClass}>Hotels</Link>
          <StyledDropDown className="dropdown">
            <div className={dropDownMenuClass} aria-labelledby="dropdownMenuButton">
              { Object.keys(hotels).map(key => this.renderLink(key, hotels[key]))}
            </div>
          </StyledDropDown>
        </li>
      )
    }
    return ''
  }
}

export default translate()(withTheme(onClickOutside(HeaderHotelMenuLink)))
