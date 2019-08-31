import React from 'react'
import Ticket from './Ticket'

import { shallow } from 'enzyme'

describe('<Ticket />', () => {
  let ticketWrapper

  beforeEach(() => {
    ticketWrapper = shallow(<Ticket />)
  })

  it('has a title Available tickets', () => {
    expect(ticketWrapper.find('h5').text()).toEqual('Available tickets')
  })

  it('has some tickets available to buy', () => {
    expect(ticketWrapper.find('TicketBlock').exists()).toBe(true)
  })
})
