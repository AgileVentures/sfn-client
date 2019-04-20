import React, { Component } from 'react'
import ArtistImage from '../../../components/Artists/ArtistImage/ArtistImage'

class ExploreArtists extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="explore-artists-title">Explore Artists</h1>
        <ArtistImage />
      </React.Fragment>
    )
  }
}

export default ExploreArtists
