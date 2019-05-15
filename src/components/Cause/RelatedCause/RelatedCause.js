import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const RelatedCause = () => {
  return (
    <div className="related-cause">
      <FontAwesomeIcon
        className="related-cause__icon white"
        icon={faUserCircle}
      />
      <div className="white">Deserving cause A</div>
    </div>
  )
}

export default RelatedCause
