import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const RelatedCause = () => {
  return (
    <React.Fragment>
      <FontAwesomeIcon
        className="related-cause__icon white"
        icon={faUserCircle}
      />
      <div className="white">
          Deserving cause A
      </div>
    </React.Fragment>
  )
}

export default RelatedCause
