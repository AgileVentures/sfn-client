import React from "react";
import {NavLink} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer__container">
      <nav className="main-container footer__nav-container">
        <NavLink exact activeClassName="footer__nav__item--selected" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="footer__nav__item--selected" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="footer__nav__item--selected" to="/causes">
          Causes
        </NavLink>
        <NavLink activeClassName="footer__nav__item--selected" to="/artists">
          Artists
        </NavLink>
        <NavLink
          activeClassName="footer__nav__item--selected"
          to="/performances"
        >
          Performances
        </NavLink>
        <NavLink activeClassName="footer__nav__item--selected" to="/contact">
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Footer;
