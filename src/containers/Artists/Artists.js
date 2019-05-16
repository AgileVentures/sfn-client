import React, { Component } from 'react'
import TrendingArtists from './TrendingArtists/TrendingArtists'
import ExploreArtists from './ExploreArtists/ExploreArtists'
import Banner from '../../components/Shared/Banner/Banner'

class Artists extends Component {
  render() {
    return (
      <React.Fragment>
        <TrendingArtists />
        <ExploreArtists />
        <Banner
          headline="This is a headline"
          benefits="This is a paragraph to explain some benefits of signing up"
          buttonLabel="Sign up"
        />
      </React.Fragment>
    )
  }
}

export default Artists
