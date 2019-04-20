import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const RelatedArtists = () => {
  return (
    <div className="related-artists-container">
      <h3 className="white">Related Artists</h3>
      <div>
        <ul className="related-artists-item-list white">
          <li>
            <FontAwesomeIcon
              className="related-artists-item-list__icon"
              icon={faUserCircle}
            />
            <span>Awesome Artist A</span>
          </li>
          <li>
            <FontAwesomeIcon
              className="related-artists-item-list__icon"
              icon={faUserCircle}
            />
            <span>Awesome Artist B</span>
          </li>
          <li>
            <FontAwesomeIcon
              className="related-artists-item-list__icon"
              icon={faUserCircle}
            />
            <span>Awesome Artist C</span>
          </li>
          <li>
            <FontAwesomeIcon
              className="related-artists-item-list__icon"
              icon={faUserCircle}
            />
            <span>Awesome Artist D</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RelatedArtists;
