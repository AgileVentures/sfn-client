import React, { Component } from 'react'
import PerformanceBio from '../../components/Performance/PerformanceBio/PerformanceBio'
import Ticket from '../../components/Performance/Ticket/Ticket'
import Campaign from '../../components/Shared/Campaign/Campaign'
import Attendance from './Attendance/Attendance'

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
        <Ticket />
        <Attendance />
      </React.Fragment>
    )
  }
}

export default Performance
