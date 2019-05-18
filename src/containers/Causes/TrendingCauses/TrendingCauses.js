import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import CauseCard from '../../../components/Causes/CauseCard/CauseCard'

class TrendingCauses extends Component {
  render() {
    return (
      <div className="trending-causes-container">
        <h3 className="trending-causes-title white">Trending causes</h3>
        <div className="cause-cards">
          <CauseCard
            causeName="Go Blue on World Children's Day"
            donatedAmount={3000}
            numberOfDonors={23}
            daysToGo={12}
            organization="UNICEF"
          />
          <CauseCard
            causeName="Go Blue on World Children's Day"
            donatedAmount={5000}
            numberOfDonors={12}
            daysToGo={45}
            organization="UNICEF"
          />
        </div>
        <NavLink activeClassName="nav__item--selected" to="/causes?q=trending">
          See all trending causes
        </NavLink>
      </div>
    )
  }
}

export default TrendingCauses
