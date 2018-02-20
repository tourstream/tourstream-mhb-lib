import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { translate } from 'react-i18next'
import onClickOutside from "react-onclickoutside"

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
    color: ${props => props.theme.headerFontColor || 'white'} !important;
  }

  .dropdown-item {
    color: ${props => props.theme.headerDropDownFontColorMobile || 'white'};
    &.active {
      font-weight: bold;
    }
  }
  
  .dropdown-toggle::after {
    margin-left: 5px;
    content: " ";
    mask-image: url('/shared/images/icons/chevron-down.svg');
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    display: inline-block;
    width: 30px;
    height: 22px;
    background-color: ${props => props.theme.headerIconColor || 'white'};
  }
  
  @media (min-width: 576px) {
    .dropdown-menu {
      font-size: ${props => props.theme.headerDropDownFontSize || '16px'};;
      border: 1px solid;
      border-color: ${props => props.theme.headerDropDownBorderColor || '#efefef'};
      background-color: ${props => props.theme.headerDropDownBackgroundColor || 'white'};

      display: none;
      position: absolute;
      transform: translate3d(0, 38px, 0);
      top: 1.1rem;
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
      color: ${props => props.theme.headerDropDownFontColor || 'white'};
      &:hover {
        background: ${props => props.theme.headerDropDownHoverBackgroundColor || '#efefef'};
      }
      &.active {
        color: ${props => props.theme.headerDropDownActiveColor || '#efefef'};
      }
    }
    
    
    .dropdown-toggle {
      display: block;
    }

  }

`


class HeaderLanguageDropDown extends Component {
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

  handleClickOutside (evt) {
    this.setState({ isActive: false })
  }

  render () {
    let dropDownMenuClass = 'dropdown-menu'
    if (this.state.isActive) {
      dropDownMenuClass += ' show'
    }
    const settings = this.props.settings


    return (
      <StyledDropDown className="dropdown">
        <a
          className="dropdown-toggle"
          type="button"
          onClick={this.toggleClass}
        >{settings.selected ? <span>{settings.selected.toUpperCase()}</span> : ''}</a>
        <div className={dropDownMenuClass} aria-labelledby="dropdownMenuButton">
          { Object.keys(settings.entries).map(key =>
            <Link key={key} className={`dropdown-item ${(key.toUpperCase() === settings.selected.toUpperCase()) ? 'active' : ''}`} to={settings.entries[key]} onClick={this.toggleClass}>{key.toUpperCase()}<i /></Link>) }
        </div>
      </StyledDropDown>
    )
  }
}


export default translate()(onClickOutside(HeaderLanguageDropDown))
