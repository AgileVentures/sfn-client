import React, { Component } from 'react'
import CauseBio from '../../components/Cause/CauseBio/CauseBio'
import Donate from '../../components/Cause/Donate/Donate'
import Campaign from '../../components/Cause/Campaign/Campaign'

class Cause extends Component {
  render() {
    return (
      <div>
        <CauseBio />
        <Donate />
        <Campaign />
      </div>
    )
  }
}

export default Cause
