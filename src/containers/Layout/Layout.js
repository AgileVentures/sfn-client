import React, { Component } from 'react'
import Footer from '../../components/Layout/Footer/Footer'
import Header from '../../components/Layout/Header/Header'
import PropTypes from 'prop-types'

export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileMenu: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      mobileMenu: !this.state.mobileMenu
    })
  }

  render() {
    return (
      <div className="main-container">
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
