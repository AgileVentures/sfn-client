import React, { Component } from 'react'
import Paginate from '../../../components/Paginate/Paginate'
import PerformanceCard from '../../../components/Performances/PerformanceCard/PerformanceCard'

class ExplorePerformances extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="explore-performances-title">Explore Performances</h1>
        <div className="performance-card-wrapper-small">
          <PerformanceCard performanceTitle="Awesome Performance" />
          <PerformanceCard performanceTitle="Awesome Performance" />
          <PerformanceCard performanceTitle="Awesome Performance" />
          <PerformanceCard performanceTitle="Awesome Performance" />
        </div>
        <Paginate />
      </React.Fragment>
    )
  }
}

export default ExplorePerformances
