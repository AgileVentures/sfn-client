import React from 'react'
import PropTypes from 'prop-types'

const CauseBioDetail = props => {
  return (
    <div className="cause-bio-detail-container">
      <div className="cause-bio__top-text">
        <h5 className="white cause-bio-detail__heading">{props.heading}</h5>
        {props.daysToGo ? (
          <p className="cause-bio-detail__cause-days-left"> - {props.daysToGo} more days to go</p>
        ) : (
          ''
        )}
      </div>
      <p className="white cause-bio-detail__content">{props.content}</p>
    </div>
  )
}

CauseBioDetail.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
  daysToGo: PropTypes.number
}
export default CauseBioDetail
