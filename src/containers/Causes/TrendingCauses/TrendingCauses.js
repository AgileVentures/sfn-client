import React, { Component } from 'react'
import gql from 'graphql-tag'
import { NavLink } from 'react-router-dom'
import take from 'lodash/take'
import { Query } from 'react-apollo'
import CauseCard from '../../../components/Causes/CauseCard/CauseCard'
import EmptyCard from '../../../components/Shared/EmptyCard/EmptyCard'

export const GET_TRENDING_CAUSES_QUERY = gql`
  query getTrendingCauses($scope: String) {
  causes(scope: $scope) {
    id
    name
    amountRaised
    targetAmount
    startDate
    endDate
    description
    sponsor
  }
}
`
class TrendingCauses extends Component {
  renderTrendingCauses = (trendingCauses) => {
    if (trendingCauses.length === 0) {
      return (
        <React.Fragment>
          <EmptyCard itemName="Causes" />
          <EmptyCard itemName="Causes" />
        </React.Fragment>

      )
    }
    const firstTwoCauses = take(trendingCauses, 2)
    return firstTwoCauses.map(cause => (<CauseCard
      key={cause.id}
      cause={cause}
    />))
  }
  render() {
    return (
      <Query query={GET_TRENDING_CAUSES_QUERY} variables={{ scope: 'trending' }}>
        {({ data, error, loading }) => {
          if (loading) {
            return <div className="white">loading</div>
          }
          if (error) {
            return <div className="white">Error</div>
          }
          return (
            <React.Fragment>
              <div className="trending-causes-container">
                <h3 className="trending-causes-title white">Trending causes</h3>
                <div className="cause-cards">
                  { this.renderTrendingCauses(data.causes) }
                </div>
                <NavLink activeClassName="nav__item--selected" to="/causes?q=trending">
            See all trending causes
                </NavLink>
              </div>
            </React.Fragment>
          )
        }}
      </Query>
    )
  }
}

export default TrendingCauses
