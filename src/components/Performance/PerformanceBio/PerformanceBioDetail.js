import React from 'react'
import PropTypes from 'prop-types'

const PerformanceBioDetail = props => {
  return (
    <div className="performance-bio-detail-container">
      <h5 className="white performance-bio-detail__heading">{props.heading}</h5>
      <p className="white performance-bio-detail__content">{props.content}</p>
    </div>
  )
}

PerformanceBioDetail.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string
}
export default PerformanceBioDetail
