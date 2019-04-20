import React, { Component } from 'react'
import ArtistPerformance from '../../../components/Artist/ArtistPerformance/ArtistPerformance'

class ArtistPerformances extends Component {
  render() {
    return (
      <div className="artist-performance-container">
        <h3 className="white">Performances</h3>
        <ArtistPerformance />
        <ArtistPerformance />
        <ArtistPerformance />
      </div>
    )
  }
}

export default ArtistPerformances
