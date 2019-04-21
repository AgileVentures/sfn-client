import React from 'react'
import PropTypes from 'prop-types'
import ArtistImage from '../ArtistImage/ArtistImage'

const ArtistCard = props => {
  return (
    <div className="artist-card">
      <ArtistImage />
      <h3 className="artist-card-name">{props.artistName}</h3>
      {props.artistDetails ? (
        <div className="artist-card-detail">
          <hr />
          <p>Supported Causes: 9</p>
          <p>Performances: 6</p>
          <p>Funds Raised:</p>
          <h5 className="artist-card-funds ">$3000</h5>
          <button>Learn More</button>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

ArtistCard.propTypes = {
  artistName: PropTypes.string,
  artistDetails: PropTypes.bool
}

export default ArtistCard
