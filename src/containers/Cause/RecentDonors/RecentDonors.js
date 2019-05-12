import React, { Component } from 'react'
import Avatar from '../../../components/Shared/Avatar/Avatar'
class RecentDonors extends Component {
  render() {
    return (
      <React.Fragment>
        <h5 className="white">RecentDonors</h5>
        <div className="recent-donors__avatars">
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </div>
      </React.Fragment>
    )
  }
}

export default RecentDonors
