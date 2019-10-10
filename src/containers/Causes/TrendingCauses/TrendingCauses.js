import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import CauseCard from '../../../components/Causes/CauseCard/CauseCard'

class TrendingCauses extends Component {
  render() {
    return (
      <div className="trending-causes-container">
        <h3 className="trending-causes-title white">Trending causes</h3>
        <div className="cause-cards">
          {
            this.props.causes.map(cause => <CauseCard
              key={cause.name}
              causeName={cause.name}
              donatedAmount={cause.amountRaised}
              numberOfDonors={23}
              daysToGo={12}
              organization={cause.sponsor}
            />)}
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
