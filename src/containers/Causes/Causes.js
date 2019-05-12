import React, { Component } from 'react'
import TrendingCauses from './TrendingCauses/TrendingCauses'
import CampaignsEndingSoon from './CampaignsEndingSoon/CampaignsEndingSoon'

class Causes extends Component {
  render() {
    return (
      <React.Fragment>
        <TrendingCauses />
        <CampaignsEndingSoon />
      </React.Fragment>
    )
  }
}

export default Causes
