import React, { Component } from 'react'
import TrendingCauses from './TrendingCauses/TrendingCauses'
import CampaignsEndingSoon from './CampaignsEndingSoon/CampaignsEndingSoon'
import ExploreCauses from './ExploreCauses/ExploreCauses'
import Banner from '../../components/Shared/Banner/Banner'

class Causes extends Component {
  render() {
    return (
      <React.Fragment>
        <TrendingCauses />
        <CampaignsEndingSoon />
        <ExploreCauses />
        <Banner
          headline="You can make a difference today"
          buttonLabel="Sign up now"
        />
      </React.Fragment>
    )
  }
}

export default Causes
