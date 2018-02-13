import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { translate } from 'react-i18next'

const DrowpDownMenu = styled.div`
  z-index: 1000;
  &.dropdown {
    position: relative;
  }
  button {
    -webkit-appearance: button;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid #efefef;
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
      padding: 1rem;
    }
    &.show {
      display: block;
    }
  }
  .dropdown-toggle:after {
    padding-left: 0.4rem;
    color: ${props => props.theme.basicColorLightGreen};
    font-wight: 300;
    font-family: 'labranda-iconset';
    content: "";
  }
`


class DropDownMenu extends Component {
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

    return (
      <DrowpDownMenu className="dropdown">
        <a
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={this.toggleClass}
        >{settings.label}{settings.selected ? <span>: <b>{settings.selected}</b></span> : ''}</a>
        <div className={dropDownMenuClass} aria-labelledby="dropdownMenuButton">
          { Object.keys(settings.entries).map(key =>
            <Link key={key} className="dropdown-item" to={settings.entries[key]} onClick={this.toggleClass}>{key}</Link>) }
        </div>
      </DrowpDownMenu>
    )
  }
}


export default translate()(DropDownMenu)
