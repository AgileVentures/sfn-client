import React from 'react'
import ArtistPerformanceList from './ArtistPerformanceList'
import ArtistPerformance from '../ArtistPerformance/ArtistPerformance'
import {
  shallow
} from 'enzyme'

let wrapper

describe('ArtistPerfomanceList', () => {
  beforeEach(() => {
    wrapper = shallow( < ArtistPerformanceList / > )
  })

  it('has 3 ArtistPerfomence', () => {
    expect(wrapper.find('ArtistPerformance').length).toEqual(3)
  })
})