import React, { Component } from 'react'
import PerformanceCard from '../../../components/Performances/PerformanceCard/PerformanceCard'

class TrendingPerformances extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="trending-performances-title">Trending Performances</h1>

        <div className="performance-card-wrapper">
          <PerformanceCard
            isFeatured
            performanceTitle="Awesome Performance A"
            performanceDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            causeTitle="Cause A"
            artistName="Awesome Artist B"
            donatedAmount={478}
          />
          <PerformanceCard
            performanceTitle="Awesome Performance A"
            performanceDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            causeTitle="Cause A"
            artistName="Awesome Artist B"
            donatedAmount={478}
          />
          <PerformanceCard
            performanceTitle="Awesome Performance A"
            performanceDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            causeTitle="Cause A"
            artistName="Awesome Artist B"
            donatedAmount={478}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default TrendingPerformances
