import React from 'react'
import Avatar from '../../../components/Shared/Avatar/Avatar'

const SupportedCauses = () => {
  return (
    <div className="supportedcauses-container">
      <h3 className="white">Supported Causes</h3>
      <div>
        <ul className="supported-causes-item-list white">
          <li>
            <Avatar />
            <span>Deserving Cause A</span>
          </li>
          <li>
            <Avatar />
            <span>Deserving Cause B</span>
          </li>
          <li>
            <Avatar />
            <span>Deserving Cause C</span>
          </li>
          <li>
            <Avatar />
            <span>Deserving Cause D</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SupportedCauses
