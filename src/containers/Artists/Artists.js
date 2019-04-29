import React, { Component } from 'react'
import TrendingArtists from './TrendingArtists/TrendingArtists'
import ExploreArtists from './ExploreArtists/ExploreArtists'
import Banner from '../../components/Artists/Banner/Banner'

class Artists extends Component {
  render() {
    return (
      <React.Fragment>
        <TrendingArtists />
        <ExploreArtists />
        <Banner
          buttonLabel="Sign up"
          headline="This is a headline"
          benefits="This is a paragraph to explain some benefits of signing up"
        />
      </React.Fragment>
    )
  }
}

export default Artists
