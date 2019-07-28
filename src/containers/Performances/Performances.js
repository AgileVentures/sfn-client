import React, { Component } from 'react'
import ExplorePerformances from './ExplorePerformances/ExplorePerformances'
import Banner from '../../components/Shared/Banner/Banner'

class Performances extends Component {
  render() {
    return (
      <React.Fragment>
        <ExplorePerformances />
        <Banner
          headline="You can make a difference today"
          buttonLabel="Sign up now"
        />
      </React.Fragment>
    )
  }
}

export default Performances
