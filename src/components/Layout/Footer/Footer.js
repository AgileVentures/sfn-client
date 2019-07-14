import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'

const Footer = () => {
  return (
    <div className="footer__container">
      <nav className="main-container footer__nav-container">
        <Logo />
        <NavLink
          className="nav_link"
          exact
          activeClassName="footer__nav__item--selected"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="nav_link"
          activeClassName="footer__nav__item--selected"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="nav_link"
          activeClassName="footer__nav__item--selected"
          to="/causes"
        >
          Causes
        </NavLink>
        <NavLink
          className="nav_link"
          activeClassName="footer__nav__item--selected"
          to="/artists"
        >
          Artists
        </NavLink>
        <NavLink
          className="nav_link"
          activeClassName="footer__nav__item--selected"
          to="/performances"
        >
          Performances
        </NavLink>
        <NavLink
          className="nav_link"
          activeClassName="footer__nav__item--selected"
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>
      <h6 className="footer-container__copyright">
        Copyright; 2019 Championer, Inc.
      </h6>
    </div>
  )
}

export default Footer
