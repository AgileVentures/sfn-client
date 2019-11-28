import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import PerformanceCard from '../../../components/Performances/PerformanceCard/PerformanceCard'

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
                {data.performances.map(performance => {
                  return (
                    <PerformanceCard
                      key={performance.id}
                      description={performance.detail}
                      donatedAmount={performance.amountRaised}
                    />
                  )
                })}
              </div>
            </React.Fragment>
          )
        }}
      </Query>
    )
  }
}

export default TrendingPerformances
