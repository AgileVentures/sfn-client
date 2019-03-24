import React from 'react'
import RelatedArtists from './RelatedArtists'
import { shallow } from 'enzyme'

describe('<RelatedArtists />', () => {
  it('creates a component with the text RelatedArtists', () => {
    const relatedArtistsWrapper = shallow(<RelatedArtists />)
    expect(relatedArtistsWrapper.text()).toEqual('RelatedArtists')
  })
})
