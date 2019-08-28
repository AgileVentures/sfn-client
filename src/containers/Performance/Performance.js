import React, { Component } from 'react'
import PerformanceBio from '../../components/Performance/PerformanceBio/PerformanceBio'
import Campaign from '../../components/Shared/Campaign/Campaign'
import ContactUs from '../../components/Shared/ContactUs/ContactUs'

class Performance extends Component {
  render() {
    return (
      <React.Fragment>
        <PerformanceBio />
        <Campaign
          causeName="Studio session with Beyonce"
          donatedAmount={3000}
          numberOfDonors={33}
          daysToGo={23}
          organization="Beyonce"
        />
        <ContactUs
          contactPersonName="Performance owners name"
          contactPhoneNumber="122-3456"
          contactEmail="awesomemail@email.com"
          websiteURL="google.com"
        />
      </React.Fragment>
    )
  }
}

export default Performance
