import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const NavBar = props => {
  let navBarClass = 'nav-container main-container'
  if (props.mobileMenu === true) {
    navBarClass += ' toggled'
  }
  return (
    <nav className={navBarClass}>
      <div className="nav-container__logo">
        <p>SFN</p>
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
      </div>
      <div className="nav-container__right" />

      <FontAwesomeIcon icon={faBars} className="nav-container__icon" onClick={props.handleClick} />
      <div className="clear-fix" />
    </nav>
  )
}

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  mobileMenu: PropTypes.bool.isRequired
}

export default NavBar
