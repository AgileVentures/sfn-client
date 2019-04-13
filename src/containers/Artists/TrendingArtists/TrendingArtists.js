import React, { Component } from "react";
import TrendingArtist from '../../../components/Artists/TrendingArtist/TrendingArtist'

class TrendingArtists extends Component {
  render() {
    return (
      <div className="trending-artists-container">
        <h1 className="trending-artists-title">Trending Artists</h1>
        <div className='trending-artists'>
          < TrendingArtist />
          < TrendingArtist />
          < TrendingArtist />
          < TrendingArtist />
        </div>
      </div>
      );
  }
}

export default TrendingArtists;
