import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import take from 'lodash/take'
import { formatDistance } from 'date-fns'
import CauseCard from '../../../components/Causes/CauseCard/CauseCard'

class TrendingCauses extends Component {
  renderTrendingCauses = () => {
    const firstTwoCauses = take(this.props.causes, 2)
    return firstTwoCauses.map(cause => (<CauseCard
      key={cause.name}
      causeName={cause.name}
      donatedAmount={Number(cause.amountRaised)}
      targetAmount={Number(cause.targetAmount)}
      numberOfDonors={23}
      daysToGo={formatDistance(new Date(cause.endDate), new Date())}
      organization={cause.sponsor}
    />))
  }
  render() {
    return (
      <div className="trending-causes-container">
        <h3 className="trending-causes-title white">Trending causes</h3>
        <div className="cause-cards">
          { this.renderTrendingCauses() }
        </div>
        <NavLink activeClassName="nav__item--selected" to="/causes?q=trending">
          See all trending causes
        </NavLink>
      </div>
    )
  }
}

TrendingCauses.propTypes = {
  causes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amountRaised: PropTypes.number.isRequired,
    sponsor: PropTypes.string.isRequired
  })).isRequired
}
export default TrendingCauses
