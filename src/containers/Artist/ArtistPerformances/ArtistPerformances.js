import React, { Component } from 'react'
import ArtistPerformance from '../../../components/Artist/ArtistPerformance/ArtistPerformance'
import Paginate from '../../../components/Paginate/Paginate'

class ArtistPerformances extends Component {
  render() {
    return (
      <div className="artist-performance-container">
        <h3 className="white">Performances</h3>
        <ArtistPerformance />
        <ArtistPerformance />
        <ArtistPerformance />
        <Paginate />
      </div>
    )
  }
}

export default ArtistPerformances
