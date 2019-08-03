import React from 'react'
import PropTypes from 'prop-types'

const PerformanceCard = props => {
  const renderFundRaised = props => {
    return (
      <div>
        <p>Funds Raised:</p>
        <h5 className="performance-card-funds">${props.donatedAmount}</h5>
      </div>
    )
  }

  return (
    <div
      className={
        props.isFeatured ? 'performance-card featured' : 'performance-card'
      }
    >
      <img
        className="performance-thumbnail"
        src="/images/banner_sample.jpg"
        alt="A cause that deserves attention"
      />
      <div className="performance-details">
        <div className="performance-text">
          <h4>{props.performanceTitle}</h4>
          <p className="performance-description">
            {props.performanceDescription}
          </p>
        </div>
        <div className="performance-stats">
          <h5> {props.causeTitle} </h5>
          <div className="artist-details">
            <p className="italic"> {props.artistName} </p>
            {props.artistName ? 'Music video' : ''}
          </div>
          <div className="cause-funds">
            {props.donatedAmount ? renderFundRaised(props) : ''}
          </div>
          <button className={props.donatedAmount ? '' : 'flex-start'}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

PerformanceCard.propTypes = {
  performanceTitle: PropTypes.string.isRequired,
  performanceDescription: PropTypes.string,
  causeTitle: PropTypes.string,
  artistName: PropTypes.string,
  donatedAmount: PropTypes.number,
  isFeatured: PropTypes.bool
}

export default PerformanceCard
