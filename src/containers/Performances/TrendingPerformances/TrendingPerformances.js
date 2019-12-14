import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import PerformanceCard from '../../../components/Performances/PerformanceCard/PerformanceCard'
import EmptyCard from '../../../components/Shared/EmptyCard/EmptyCard'

export const GET_TRENDING_PERFORMANCES_QUERY = gql`
  query getTrendingPerformances {
    performances {
      id
      detail
      amountRaised
    }
  }
`

class TrendingPerformances extends Component {
  renderPerformaces = performances => {
    if (performances.length === 0) {
      return (
        <React.Fragment>
          <EmptyCard itemName="Performances" />
        </React.Fragment>

      )
    }
    return (
      performances.map((performance, index) => {
        return (
          <PerformanceCard
            key={performance.id}
            description={performance.detail}
            donatedAmount={performance.amountRaised}
            isFeatured={index === 0}
          />
        )
      })
    )
  }

  render() {
    return (
      <Query query={GET_TRENDING_PERFORMANCES_QUERY}>
        {({ data, error, loading }) => {
          if (loading) {
            return <div className="white">loading</div>
          }
          if (error) {
            return <div>Error</div>
          }
          return (
            <React.Fragment>
              <h1 className="trending-performances-title">
                Trending Performances
              </h1>

              <div className="performance-card-wrapper">
                { this.renderPerformaces(data.performances)}
              </div>
            </React.Fragment>
          )
        }}
      </Query>
    )
  }
}

export default TrendingPerformances
