import React from 'react'
import PropTypes from 'prop-types'
import { formatDistanceStrict } from 'date-fns'

const CauseCard = props => {
  let { name, organization, donatedAmount, numberOfDonors, endDate, targetAmount } = props.cause
  const progress = Math.floor((donatedAmount / targetAmount) * 100)
  return (
    <div className="cause-card">
      <img
        className="cause-thumbnail"
        src="/images/cause_sample.jpg"
        alt="A cause that deserves attention"
      />
      <h5 className="cause-card-name">{name}</h5>
      <span className="cause-card-owner italic">by {organization}</span>

      <div className="cause-card-detail">
        <hr />
        <h4 className="cause-card-funds ">${donatedAmount}</h4>
        <span className="cause-card-number-of-donors">
          raised from {numberOfDonors} donors
        </span>
        <div className="cause-card-progress">
          <div className="cause-card-progress-bar">
            <div className="cause-card-progress-bar-active" style={{ width: `${progress}%` }} />
          </div>
          <p>{progress}% of ${targetAmount}</p>
        </div>
        <p className="cause-card-days-to-go">
          {formatDistanceStrict(new Date(endDate), new Date(), { unit: 'day' })} to go
        </p>
        <button>Donate today</button>
        <button className="text-link">Learn More</button>
      </div>
    </div>
  )
}

CauseCard.propTypes = {
  cause: PropTypes.shape({
    name: PropTypes.string,
    donatedAmount: PropTypes.number,
    targetAmount: PropTypes.number,
    numberOfDonors: PropTypes.number,
    daysToGo: PropTypes.string,
    organization: PropTypes.string,
    endDate: PropTypes.Date
  })
}

export default CauseCard
