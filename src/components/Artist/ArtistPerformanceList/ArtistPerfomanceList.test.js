import React from 'react'
import ArtistPerformanceList from './ArtistPerformanceList'
import { shallow } from 'enzyme'

describe('ArtistPerfomanceList', () => {
  it('has 3 ArtistPerfomance', () => {
    const artistPerformanceListWrapper = shallow(<ArtistPerformanceList />)
    expect(artistPerformanceListWrapper.find('ArtistPerformance').length).toEqual(3)
  })
})
