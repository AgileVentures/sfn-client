import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import TrendingArtists from './TrendingArtists/TrendingArtists'
import ExploreArtists from './ExploreArtists/ExploreArtists'
import Banner from '../../components/Shared/Banner/Banner'
import { fetchArtists } from '../../actions/artists/fetchArtists'

export class Artists extends Component {
  componentDidMount() {
    this.props.fetchArtists()
  }
  render() {
    return (
      <React.Fragment>
        <TrendingArtists />
        <ExploreArtists />
        <Banner
          headline="This is a headline"
          benefits="This is a paragraph to explain some benefits of signing up"
          buttonLabel="Sign up"
        />
      </React.Fragment>
    )
  }
}

Artists.propTypes = {
  fetchArtists: propTypes.func
}
const mapStateToProps = state => ({ artists: state.artists })

export default connect(
  mapStateToProps,
  { fetchArtists }
)(Artists)
