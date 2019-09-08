import React from 'react'
import TicketBlock from './TicketBlock'

import { shallow } from 'enzyme'

describe('<Ticket />', () => {
  let ticketBlockWrapper

  beforeEach(() => {
    const props = { ticketDetails: 'Single Ticket', ticketPrice: 50 }
    ticketBlockWrapper = shallow(<TicketBlock {...props} />)
  })

  it('has <p/> with text Buy Ticket', () => {
    expect(ticketBlockWrapper.find('p.ticket-block-option').text()).toEqual('Single Ticket')
  })

  it('has <h5/> with value 50', () => {
    expect(ticketBlockWrapper.find('h5').text()).toEqual('$50')
  })

  it('has a button to buy the ticket', () => {
    expect(ticketBlockWrapper.find('button.ticket-button').length).toEqual(1)
  })
})
