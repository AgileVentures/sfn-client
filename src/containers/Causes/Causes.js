import React, { Component } from 'react'
import TrendingCauses from './TrendingCauses/TrendingCauses'
import CampaignsEndingSoon from './CampaignsEndingSoon/CampaignsEndingSoon'
import ExploreCauses from './ExploreCauses/ExploreCauses'

class Causes extends Component {
  render() {
    return (
      <React.Fragment>
        <TrendingCauses />
        <CampaignsEndingSoon />
        <ExploreCauses />
      </React.Fragment>
    )
  }
}

export default Causes
