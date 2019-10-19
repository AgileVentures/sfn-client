import React from 'react'
import PropTypes from 'prop-types'

const Alert = props => {
  function renderHeadline(props) {
    return <h5 className="alert-headline">{props.headline}</h5>
  }

  return (
    <div className={`alert ${props.noBackground ? 'no-background' : ''}`}>
      {props.headline ? renderHeadline(props) : ''}
      <p className="alert-message">
        {props.message ? props.message : 'Sorry, something went wrong!'}
      </p>
    </div>
  )
}

Alert.propTypes = {
  message: PropTypes.string,
  headline: PropTypes.string,
  noBackground: PropTypes.bool
}

export default Alert
