import React, { Component } from 'react'
import CauseBio from '../../components/Cause/CauseBio/CauseBio'
import Donate from '../../components/Cause/Donate/Donate'
import Campaign from '../../components/Shared/Campaign/Campaign'
import ContactUs from '../../components/Cause/ContactUs/ContactUs'
import SupportingArtists from './SupportingArtists/SupportingArtists'
import RelatedCauses from './RelatedCauses/RelatedCauses'
import RecentDonors from './RecentDonors/RecentDonors'

class Cause extends Component {
  render() {
    return (
      <React.Fragment>
        <CauseBio />
        <Donate />
        <Campaign
          causeName="Go Blue on World Children's Day"
          donatedAmount={3000}
          numberOfDonors={23}
          daysToGo={12}
          organization="UNICEF"
          renderButtons
        />
        <SupportingArtists />
        <RelatedCauses />
        <RecentDonors />
        <ContactUs />
      </React.Fragment>
    )
  }
}

export default Cause
