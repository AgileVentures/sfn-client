import React, { Component } from 'react'
import CauseBio from '../../components/Cause/CauseBio/CauseBio'
import Donate from '../../components/Cause/Donate/Donate'
import Campaign from '../../components/Shared/Campaign/Campaign'
import ContactUs from '../../components/Shared/ContactUs/ContactUs'
import SupportingArtists from './SupportingArtists/SupportingArtists'
import RelatedCauses from './RelatedCauses/RelatedCauses'
import RecentDonors from './RecentDonors/RecentDonors'

class Cause extends Component {
  render() {
    return (
      <React.Fragment>
        <CauseBio daysToGo={12} />
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
        <ContactUs
          contactPersonName="The awesome cause manager"
          contactPhoneNumber="122-3456"
          contactEmail="awesomemail@email.com"
          websiteURL="https://awesomeurl.com"
        />
      </React.Fragment>
    )
  }
}

export default Cause
