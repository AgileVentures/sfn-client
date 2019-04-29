import React from 'react'
import PropTypes from 'prop-types'

import NavBar from '../NavBar/NavBar'

const Header = props => {
  return (
    <div className="header-container">
      <NavBar mobileMenu={props.mobileMenu} handleClick={props.handleClick} />
    </div>
  )
}

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
  mobileMenu: PropTypes.bool.isRequired
}

export default Header
