import React, { Component } from 'react'
import ArtistCard from '../../../components/Artists/ArtistCard/ArtistCard'

class ExploreArtists extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="explore-artists-title">Explore Artists</h1>
        <ArtistCard artistName={'Dua Lipa'} />
        <ArtistCard artistName={'Dua Lipa'} />
        <ArtistCard artistName={'Dua Lipa'} />
      </React.Fragment>
    )
  }
}

export default ExploreArtists
