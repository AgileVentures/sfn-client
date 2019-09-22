import React, { Component } from 'react'
import ArtistCard from '../../../components/Artists/ArtistCard/ArtistCard'

class TrendingArtists extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="trending-artists-title">Trending Artists</h1>
        <div className="trending-artist-cards">
          <ArtistCard artistName={'Dua Lipa'} artistDetails />
          <ArtistCard artistName={'Dua Lipa'} artistDetails />
          <ArtistCard artistName={'Dua Lipa'} artistDetails />
          <ArtistCard artistName={'Dua Lipa'} artistDetails />
        </div>
      </React.Fragment>
    )
  }
}

export default TrendingArtists
