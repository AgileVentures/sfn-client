import React from 'react'
import PropTypes from 'prop-types'

const CauseBioDetail = props => {
  return (
    <div className="cause-bio-detail-container">
      <h5 className="white cause-bio-detail__heading">{props.heading}</h5>
      <p className="white cause-bio-detail__content">{props.content}</p>
    </div>
  )
}

CauseBioDetail.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string
}
export default CauseBioDetail
