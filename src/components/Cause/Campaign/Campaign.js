import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Campaign = props => {
  return (
    <div className="campaign-container">
      <div className="campaign-title white">
        <h5>{props.causeName}</h5>
        <span className="campaign-owner italic">by {props.organization}</span>
      </div>
      <div className="campaign-detail white">
        <hr />
        <h4 className="campaign-funds ">${props.donatedAmount}</h4>
        <span className="campaign-number-of-donors">
          raised from {props.numberOfDonors} donors
        </span>
        <div className="campaign-progress">
          <div className="campaign-progress-bar">
            <div className="campaign-progress-bar-active" />
          </div>
          <div className="campaign-numbers">
            <p>17% of $30,000</p>
            <p className="campaign-days-to-go">
              {props.daysToGo} more days to go
            </p>
          </div>
        </div>
      </div>
      <div className="donation-buttons">
        <button className="donation-button">
          <FontAwesomeIcon className="donation-button-icon" icon={faHeart} />
          Donate today
        </button>
        <button className="text-link">Learn More</button>
      </div>
    </div>
  )
}

Campaign.propTypes = {
  causeName: PropTypes.string,
  donatedAmount: PropTypes.number,
  numberOfDonors: PropTypes.number,
  daysToGo: PropTypes.number,
  organization: PropTypes.string
}

export default Campaign
