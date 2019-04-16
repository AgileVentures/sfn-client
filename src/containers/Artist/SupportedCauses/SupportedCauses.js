import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';

const SupportedCauses = () => {
  return (
    <div className="supportedcauses-container">
      <h3 className="white">Supported Causes</h3>
      <div>
        <ul className="supported-causes-item-list white">
          <li>
            <FontAwesomeIcon icon={faGift} /> Deserving Cause A
          </li>
          <li>
            <FontAwesomeIcon icon={faGift} /> Deserving Cause B
          </li>
          <li>
            <FontAwesomeIcon icon={faGift} /> Deserving Cause C
          </li>
          <li>
            <FontAwesomeIcon icon={faGift} /> Deserving Cause D
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SupportedCauses;
