import React, { Component } from 'react'
import Paginate from '../../../components/Paginate/Paginate'

class ExplorePerformances extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="explore-performances-title" >Explore Performances</h1>
        <Paginate />
      </React.Fragment>
    )
  }
}

export default ExplorePerformances
