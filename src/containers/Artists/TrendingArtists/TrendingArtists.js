import React, { Component } from 'react';
import TrendingArtist from '../../../components/Artists/TrendingArtist/TrendingArtist';

class TrendingArtists extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="trending-artists-title">Trending Artists</h1>
        <TrendingArtist />
        <TrendingArtist />
        <TrendingArtist />
        <TrendingArtist />
      </React.Fragment>
    );
  }
}

export default TrendingArtists;
