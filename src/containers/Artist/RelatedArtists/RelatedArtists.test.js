import React from 'react'
import RelatedArtists from './RelatedArtists'
import { shallow } from 'enzyme'

describe('<RelatedArtists />', () => {
  let relatedArtistsWrapper
  beforeEach(() => {
    relatedArtistsWrapper = shallow(<RelatedArtists />)
  })

  it("has a header text of 'Related Artists'", () => {
    expect(relatedArtistsWrapper.find('h3').text()).toEqual('Related Artists')
  })

  it('has a list of 4 Related Artists', () => {
    expect(relatedArtistsWrapper.find('li').length).toEqual(4)
  })
})
