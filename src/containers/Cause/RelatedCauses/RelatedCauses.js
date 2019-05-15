import React, { Component } from 'react'
import RelatedCause from '../../../components/Cause/RelatedCause/RelatedCause'

class RelatedCauses extends Component {
  render() {
    return (
      <div className="related-causes-wrapper">
        <h5 className="white">Related causes</h5>
        <RelatedCause />
        <RelatedCause />
        <RelatedCause />
        <RelatedCause />
      </div>
    )
  }
}

export default RelatedCauses
