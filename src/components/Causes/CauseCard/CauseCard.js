import React from 'react'
import PropTypes from 'prop-types'

const CauseCard = props => {
  return (
    <div className="cause-card">
      <img
        className="cause-thumbnail"
        src="/images/cause_sample.jpg"
        alt="A cause that deserves attention"
      />
      <h5 className="cause-card-name">{props.causeName}</h5>
      <span className="cause-card-owner italic">by {props.organization}</span>

      <div className="cause-card-detail">
        <hr />
        <h4 className="cause-card-funds ">${props.donatedAmount}</h4>
        <span className="cause-card-number-of-donors">
          raised from {props.numberOfDonors} donors
        </span>
        <div className="cause-card-progress">
          <div className="cause-card-progress-bar">
            <div className="cause-card-progress-bar-active" />
          </div>
          <p>17% of $30,000</p>
        </div>
        <p className="cause-card-days-to-go">
          {props.daysToGo} more days to go
        </p>
        <button>Donate today</button>
        <button className="text-link">Learn More</button>
      </div>
    </div>
  )
}

CauseCard.propTypes = {
  causeName: PropTypes.string,
  donatedAmount: PropTypes.number,
  numberOfDonors: PropTypes.number,
  daysToGo: PropTypes.number,
  organization: PropTypes.string
}

export default CauseCard
