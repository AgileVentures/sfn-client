import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import ArtistCard from '../../../components/Artists/ArtistCard/ArtistCard'
class ExploreArtists extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="explore-artists-title">Explore Artists</h1>
        <ArtistCard artistName={'Dua Lipa'} />
        <ArtistCard artistName={'Dua Lipa'} />
        <ArtistCard artistName={'Dua Lipa'} />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={2}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </React.Fragment>
    )
  }
}

export default ExploreArtists
