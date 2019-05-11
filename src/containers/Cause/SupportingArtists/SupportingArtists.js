import React, { Component } from 'react'
import SupportingArtist from '../../../components/Cause/SupportingArtist/SupportingArtist'

class SupportingArtists extends Component {
  render() {
    return (
      <React.Fragment>
        <SupportingArtist />
        <SupportingArtist />
        <SupportingArtist />
        <SupportingArtist />
      </React.Fragment>
    )
  }
}

export default SupportingArtists
