import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift } from '@fortawesome/free-solid-svg-icons'

const SupportedCauses = () => {
  return (
    <div className="supportedcauses-container">
      <h3 className="white">Supported Causes</h3>
      <div>
        <ul className="supported-causes-item-list white">
          <li>
            <FontAwesomeIcon
              className="supported-causes-item-list__icon"
              icon={faGift}
            />
            <span>Deserving Cause A</span>
          </li>
          <li>
            <FontAwesomeIcon
              className="supported-causes-item-list__icon"
              icon={faGift}
            />
            <span>Deserving Cause B</span>
          </li>
          <li>
            <FontAwesomeIcon
              className="supported-causes-item-list__icon"
              icon={faGift}
            />
            <span>Deserving Cause C</span>
          </li>
          <li>
            <FontAwesomeIcon
              className="supported-causes-item-list__icon"
              icon={faGift}
            />
            <span>Deserving Cause D</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SupportedCauses
