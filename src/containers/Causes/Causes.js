import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import TrendingCauses from './TrendingCauses/TrendingCauses'
import CampaignsEndingSoon from './CampaignsEndingSoon/CampaignsEndingSoon'
import ExploreCauses from './ExploreCauses/ExploreCauses'
import Banner from '../../components/Shared/Banner/Banner'

export const GET_CAUSES_QUERY = gql`
  query getCauses{
    causes {
      name
      amountRaised
      sponsor
  }
}
`
class Causes extends Component {
  render() {
    return (
      <Query query={GET_CAUSES_QUERY}>
        {({ data, error, loading }) => {
          if (loading) {
            return <div className="white">loading</div>
          }
          if (error) {
            return (<div>Error</div>)
          }
          return (
            <React.Fragment>
              <TrendingCauses causes={data.causes} />
              <CampaignsEndingSoon />
              <ExploreCauses />
              <Banner
                headline="You can make a difference today"
                buttonLabel="Sign up now"
              />
            </React.Fragment>
          )
        }}
      </Query>

    )
  }
}

export default Causes
