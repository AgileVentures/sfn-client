import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const RelatedArtists = () => {
  return (
    <div className="relatedartists-container">
      <h3 className="white">Related Artists</h3>
      <div>
        <ul className="related-artist-item-list white">
          <li>
            <FontAwesomeIcon icon={faUserCircle} /> Awesome Artist A
          </li>
          <li>
            <FontAwesomeIcon icon={faUserCircle} /> Awesome Artist B
          </li>
          <li>
            <FontAwesomeIcon icon={faUserCircle} /> Awesome Artist C
          </li>
          <li>
            <FontAwesomeIcon icon={faUserCircle} /> Awesome Artist D
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RelatedArtists;
