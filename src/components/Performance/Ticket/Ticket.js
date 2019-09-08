import React from 'react'
import TicketBlock from './TicketBlock'

const Ticket = () => {
  return (
    <div className="ticket-wrapper white">
      <h5>Available tickets</h5>
      <div className="ticket-blocks">
        <TicketBlock
          ticketPrice={10}
          ticketDetails="Single ticket for 1 person"
        />
        <TicketBlock
          ticketPrice={15}
          ticketDetails="Pair ticket for 2 people"
        />
        <TicketBlock
          ticketPrice={35}
          ticketDetails="Group of friends (5 people)"
        />
        <TicketBlock ticketPrice={70} ticketDetails="VIP and table service" />
      </div>
    </div>
  )
}

export default Ticket
