import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ArtistCard from '../../../components/Artists/ArtistCard/ArtistCard'
import { fetchArtists } from '../../../actions/artists/fetchArtists'

class ExploreArtists extends Component {
  componentDidMount() {
    console.log(this.props)
  }
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

ExploreArtists.propType = {
  fetchArtists: PropTypes.func
}

const mapStateToProps = state => ({ artists: state.artist })

export default connect(mapStateToProps, { fetchArtists })(ExploreArtists)
