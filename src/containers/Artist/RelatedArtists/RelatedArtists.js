import React from 'react'
import Avatar from '../../../components/Shared/Avatar/Avatar'

const RelatedArtists = () => {
  return (
    <div className="related-artists-container">
      <h3 className="white">Related Artists</h3>
      <div>
        <ul className="related-artists-item-list white">
          <li>
            <Avatar />
            <span>Awesome Artist A</span>
          </li>
          <li>
            <Avatar />
            <span>Awesome Artist B</span>
          </li>
          <li>
            <Avatar />
            <span>Awesome Artist C</span>
          </li>
          <li>
            <Avatar />
            <span>Awesome Artist D</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RelatedArtists
