import React from 'react'
import PropTypes from 'prop-types'

const EmptyCard = props => {
  return (
    <div className="empty-card">
      <h4 className="card-message">
        Uh, oh it seems there is not much to show here.
      </h4>
      <button>Add {props.itemName}</button>
    </div>
  )
}

EmptyCard.propTypes = {
  itemName: PropTypes.string.isRequired
}

export default EmptyCard
