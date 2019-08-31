import React from 'react'
import PropTypes from 'prop-types'

const TicketBlock = props => {
  return (
    <div className="ticket-block">
      <div className="ticket-block-amount">
        <h5>${props.ticketPrice}</h5>
      </div>
      <p className="ticket-block-option">{props.ticketDetails}</p>
      <div className="ticket-block-buttons">
        <button className="ticket-button">Buy ticket</button>
      </div>
    </div>
  )
}

TicketBlock.propTypes = {
  ticketPrice: PropTypes.number.isRequired,
  ticketDetails: PropTypes.string.isRequired
}

export default TicketBlock
