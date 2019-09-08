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
            <p className="supportoed-causes-item--name">Deserving Cause A</p>
          </li>
          <li>
            <Avatar />
            <p className="supportoed-causes-item--name">Deserving Cause B</p>
          </li>
          <li>
            <Avatar />
            <p className="supportoed-causes-item--name">Deserving Cause C</p>
          </li>
          <li>
            <Avatar />
            <p className="supportoed-causes-item--name">Deserving Cause D</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SupportedCauses
