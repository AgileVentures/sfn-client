import React from 'react'
import ArtistPerformances from './ArtistPerformances'
import {
  shallow
} from 'enzyme'

describe('ArtistPerformances', () => {
  it('has 3 ArtistPerformances', () => {
    const artistPerformancesWrapper = shallow(<ArtistPerformances />)
    expect(artistPerformancesWrapper.find('ArtistPerformance').length).toEqual(3)
  })
})
