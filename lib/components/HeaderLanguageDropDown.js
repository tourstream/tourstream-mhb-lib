import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { translate } from 'react-i18next'
import onClickOutside from 'react-onclickoutside'

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
    margin-right: -1rem;
    width: 1rem;
    margin-left: 0.2rem;
    fonti-size: 1rem;
    color: ${props => props.theme.get('headerIconColor') || 'white'};
    font-weight: bold;
    vertical-align: bottom;

    @media (min-width: 576px) {
      font-size: 2rem;
      width: 2rem;
      margin-left: 0.5rem;
    }
  }
  
  .dropdown-menu {
    font-size: ${props => props.theme.get('headerDropDownFontSize') || '16px'};;
    border: 1px solid;
    border-color: ${props => props.theme.get('headerDropDownBorderColor') || '#efefef'};
    background-color: ${props => props.theme.get('headerDropDownBackgroundColor') || 'white'};

    display: none;
    position: absolute;
    transform: translate3d(0, 38px, 0);
    top: 0;
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
`

class HeaderLanguageDropDown extends Component {
  constructor () {
    super()
    this.toggleClass = this.toggleClass.bind(this)
    this.selectLanguage = this.selectLanguage.bind(this)
    this.state = {
      isActive: false,
    }
  }

  toggleClass () {
    const currentState = this.state.isActive
    this.setState({ isActive: !currentState })
  }

  selectLanguage () {
    this.setState({ isActive: false })
    this.props.NavigationDispatcher.dispatch({
      actionType: 'NAVIGATION_CLICKED',
      selectedEntry: 'LANGUAGE_CHANGED',
    })
  }

  handleClickOutside () {
    this.setState({ isActive: false })
  }

  render () {
    let dropDownMenuClass = 'dropdown-menu'
    if (this.state.isActive) {
      dropDownMenuClass += ' show'
    }
    const { settings } = this.props

    return (
      <StyledDropDown className="dropdown">
        <a
          className="dropdown-toggle"
          type="button"
          onClick={this.toggleClass}
        >{settings.selected ? <span>{settings.selected.toUpperCase()}</span> : ''}
        </a>
        <div className={dropDownMenuClass} aria-labelledby="dropdownMenuButton">
          { Object.keys(settings.entries).map(key =>
            <Link key={key} className={`dropdown-item ${(key.toUpperCase() === settings.selected.toUpperCase()) ? 'active' : ''}`} to={settings.entries[key]} onClick={this.selectLanguage}>{key.toUpperCase()}<i /></Link>) }
        </div>
      </StyledDropDown>
    )
  }
}


export default translate()(onClickOutside(HeaderLanguageDropDown))
