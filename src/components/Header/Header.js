import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <nav className="main-container nav-container">
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
      </nav>
    </div>
  );
};

export default Header;
