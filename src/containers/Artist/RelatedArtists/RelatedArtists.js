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
            <p className="related-artists-item-list--name">Awesome Artist A</p>
          </li>
          <li>
            <Avatar />
            <p className="related-artists-item-list--name">Awesome Artist B</p>
          </li>
          <li>
            <Avatar />
            <p className="related-artists-item-list--name">Awesome Artist C</p>
          </li>
          <li>
            <Avatar />
            <p className="related-artists-item-list--name">Awesome Artist D</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RelatedArtists
