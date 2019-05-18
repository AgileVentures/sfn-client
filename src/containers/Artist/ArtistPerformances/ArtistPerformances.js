import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import ArtistPerformance from '../../../components/Artist/ArtistPerformance/ArtistPerformance'

class ArtistPerformances extends Component {
  render() {
    return (
      <div className="artist-performance-container">
        <h3 className="white">Performances</h3>
        <ArtistPerformance />
        <ArtistPerformance />
        <ArtistPerformance />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={2}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    )
  }
}

export default ArtistPerformances
