import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import CauseCard from '../../../components/Causes/CauseCard/CauseCard'
import EmptyCard from '../../../components/Shared/EmptyCard/EmptyCard'

class CampaignsEndingSoon extends Component {
  render() {
    return (
      <div className="campaigns_ending_soon-container">
        <h3 className="campaigns_ending_soon-title white">
          Campaigns ending soon
        </h3>
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
          <EmptyCard itemName="Cause" />
        </div>
        <NavLink activeClassName="nav__item--selected" to="/causes?q=ending">
          See all ending causes
        </NavLink>
      </div>
    )
  }
}

export default CampaignsEndingSoon
