import React from 'react';
import ArtistImage from '../ArtistImage/ArtistImage';

const TrendingArtist = () => {
  return (
    <div className="trending-artist">
      <ArtistImage />
      <p className="trending-artist-name">Dua Lipa</p>
      <p>Awesome Artist A</p>
      <hr />
      <div className="trending-artist-detail">
        <p>Supported Causes: 6</p>
        <p>Performances: 3</p>
        <p>Funds Raised: </p>
      </div>
      <p className="trending-artist-funds">$3000</p>
      <button>Learn More</button>
    </div>
  );
};
export default TrendingArtist;
