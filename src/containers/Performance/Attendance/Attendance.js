import React, { Component } from 'react'
import Avatar from '../../../components/Shared/Avatar/Avatar'
class Attendance extends Component {
  render() {
    return (
      <div className="attendance-wrapper">
        <h5 className="white">Who's attending?</h5>
        <div className="attendance__avatars">
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </div>
      </div>
    )
  }
}

export default Attendance
