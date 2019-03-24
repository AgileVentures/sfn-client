import React from 'react'
import Artists from './ArtistsContainer'
import {
  shallow
} from 'enzyme'

describe('<ArtistsContainer />', () => {
  it('contains the text ArtistsContainer', () => {
    const artistsContainerWrapper = shallow(<Artists />)
    expect(artistsContainerWrapper.find('div').text()).toEqual('ArtistsContainer')
  })
})
