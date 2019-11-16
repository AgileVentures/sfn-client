import React from 'react'
import EmptyCard from './EmptyCard'

import { shallow } from 'enzyme'

describe('<EmptyCard />', () => {
  let emptyCardWrapper

  let props = {
    itemName: 'Artist'
  }

  beforeEach(() => {
    emptyCardWrapper = shallow(<EmptyCard {...props} />)
  })

  it('contains a headline that raise awareness of missing information', () => {
    expect(emptyCardWrapper.find('h4.card-message').text()).toEqual(
      'Uh, oh it seems there is not much to show here.'
    )
  })

  it('contains the button which enables to create one item', () => {
    expect(emptyCardWrapper.find('button').length).toEqual(1)
  })

  it('contains the button with the label of the missing item', () => {
    expect(emptyCardWrapper.find('button').text()).toEqual('Add Artist')
  })
})
