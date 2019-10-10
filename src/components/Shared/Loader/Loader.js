import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function Loader({ mainText = '', subText = '' }) {
  return (
    <div className="loader">
      <FontAwesomeIcon
        className="loader--icon"
        icon={faSpinner}
      />
      <div className="loader--main-text">{mainText}</div>
      <div className="loader--sub-text">{subText}</div>
    </div>
  )
}

Loader.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string
}
