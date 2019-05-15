import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const SupportingArtist = () => {
  return (
    <div className="supporting-artist">
      <FontAwesomeIcon
        className="supporting-artist__icon white"
        icon={faUserCircle}
      />
      <div className="white">Awesome artist A</div>
    </div>
  )
}

export default SupportingArtist
