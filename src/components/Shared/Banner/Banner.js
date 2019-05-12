import React from 'react'
import PropTypes from 'prop-types'

const Banner = props => {
  return (
    <div className="banner white">
      <h3>{props.headline}</h3>
      <p>{props.benefits}</p>
      <button>{props.buttonLabel}</button>
    </div>
  )
}

Banner.propTypes = {
  headline: PropTypes.string,
  benefits: PropTypes.string,
  buttonLabel: PropTypes.string
}

export default Banner
