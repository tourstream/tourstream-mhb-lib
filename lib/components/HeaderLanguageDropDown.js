import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { translate } from 'react-i18next'

const StyledDropDown = styled.div`
  z-index: 1000;
  &.dropdown {
    position: relative;
  }
  .dropdown-menu {
    display: none;
    position: absolute;
    transform: translate3d(0, 38px, 0);
    top: -1rem;
    left: 0;
    will-change: transform;
    border: 1px solid #efefef;
    background: white;
    box-shadow: 2px 2px 4px 0 rgba(0,0,0,.25);
    z-index: 1000;
    a {
      display: block;
      padding: 0.5rem 1rem;
    }
    &.show {
      display: block;
    }
  }
  .dropdown-toggle {
    display: block;
    line-height: 30px;
    padding: 4px 16px;
    color: ${props => props.theme.headerFontColor || 'white'} !important;
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

  render () {
    let dropDownMenuClass = 'dropdown-menu'
    if (this.state.isActive) {
      dropDownMenuClass += ' show'
    }
    const settings = this.props.settings

    console.log('DropDownMenu', settings)

    return (
      <StyledDropDown className="dropdown">
        <a
          className="dropdown-toggle"
          type="button"
          onClick={this.toggleClass}
        >{settings.selected ? <span>{settings.selected}</span> : ''}</a>
        <div className={dropDownMenuClass} aria-labelledby="dropdownMenuButton">
          { Object.keys(settings.entries).map(key =>
            <Link key={key} className="dropdown-item" to={settings.entries[key]} onClick={this.toggleClass}>{key}<i /></Link>) }
        </div>
      </StyledDropDown>
    )
  }
}


export default translate()(HeaderLanguageDropDown)
