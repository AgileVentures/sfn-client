import React, { Component } from 'react'
import ArtistBio from './ArtistBio'
import ArtistPerformanceList from './ArtistPerformanceList/ArtistPerformanceList'
import MoneyRaised from './MoneyRaised/MoneyRaised'
import SupportedCauses from './SupportedCauses/SupportedCauses'
import RelatedArtists from './RelatedArtists/RelatedArtists'

class ArtistContainer extends Component {
  render() {
    return (
      <div className="artist-container">
        <ArtistBio />
        <div className="main-artistcontent-container">
          <div className="left-sidebar">
            <MoneyRaised />
            <SupportedCauses />
            <RelatedArtists />
          </div>
          <ArtistPerformanceList />
        </div>
      </div>
    )
  }
}

export default ArtistContainer
