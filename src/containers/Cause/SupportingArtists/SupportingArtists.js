import React, { Component } from 'react'
import SupportingArtist from '../../../components/Cause/SupportingArtist/SupportingArtist'

class SupportingArtists extends Component {
  render() {
    return (
      <div className="supporting-artists-wrapper">
        <h5 className="white">Supporting artists</h5>
        <SupportingArtist />
        <SupportingArtist />
        <SupportingArtist />
        <SupportingArtist />
      </div>
    )
  }
}

export default SupportingArtists
