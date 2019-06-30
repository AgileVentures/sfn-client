import React from 'react'
import ReactPaginate from 'react-paginate'

class Paginate extends React.Component {
  render() {
    return (
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
    )
  }
}

export default Paginate
