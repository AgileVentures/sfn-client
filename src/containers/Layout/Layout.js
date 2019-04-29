import React, { Component } from 'react'
import Footer from '../../components/Layout/Footer/Footer'
import Header from '../../components/Layout/Header/Header'
import PropTypes from 'prop-types'

export default class Layout extends Component {
  state = {
    mobileMenu: false
  }

  handleClick = () => {
    this.setState({
      mobileMenu: !this.state.mobileMenu
    })
  }

  render() {
    return (
      <div>
        <Header mobileMenu={this.state.mobileMenu} handleClick={this.handleClick} />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
