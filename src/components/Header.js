import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/causes">Causes</Link>
      <Link to="/artists">Artists</Link>
      <Link to="/performances">Performances</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Header;
