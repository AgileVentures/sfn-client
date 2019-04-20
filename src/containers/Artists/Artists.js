import React, { Component } from 'react'
import TrendingArtists from './TrendingArtists/TrendingArtists'
import ExploreArtists from './ExploreArtists/ExploreArtists'

class Artists extends Component {
  render() {
    return (
      <React.Fragment>
        <TrendingArtists />
        <ExploreArtists />
      </React.Fragment>
    )
  }
}

export default Artists
