import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'

const Footer = () => {
  return (
    <footer className="footer__container">
      <nav className="main-container footer__nav-container">
        <Logo />
        <div className="nav-links">
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
        </div>
      </nav>
      <h6 className="footer-container__copyright main-container">
        Copyright; 2019 Championer, Inc.
      </h6>
    </footer>
  )
}

export default Footer
