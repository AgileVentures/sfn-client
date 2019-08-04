import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import GoogleAuth from '../../../containers/GoogleAuth/GoogleAuth'

const NavBar = props => {
  let navBarClass = 'nav-container main-container'
  if (props.mobileMenu === true) {
    navBarClass += ' toggled'
  }
  return (
    <nav className={navBarClass}>
      <div className="nav-container__logo">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <div className="nav-container__left">
        <NavLink exact activeClassName="nav__item--selected" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="nav__item--selected" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="nav__item--selected" to="/causes">
          Causes
        </NavLink>
        <NavLink activeClassName="nav__item--selected" to="/artists">
          Artists
        </NavLink>
        <NavLink activeClassName="nav__item--selected" to="/performances">
          Performances
        </NavLink>
        <NavLink activeClassName="nav__item--selected" to="/contact">
          Contact
        </NavLink>
        <GoogleAuth />
      </div>
      <div className="nav-container__right" />

      <FontAwesomeIcon
        icon={props.mobileMenu ? faTimes : faBars}
        className={`nav-container__icon ${
          props.mobileMenu ? 'no-pointer' : ''
        }`}
        onClick={props.handleClick}
      />
      <div className="clear-fix" />
    </nav>
  )
}

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  mobileMenu: PropTypes.bool.isRequired
}

export default NavBar
