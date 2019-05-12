import React, { Component } from 'react'
import CauseCard from '../../../components/Causes/CauseCard/CauseCard'

class TrendingCauses extends Component {
  render() {
    return (
      <div className="trending-causes-container">
        <h2 className="trending-causes-title white">Trending Causes</h2>
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
      </div>
    )
  }
}

export default TrendingCauses
