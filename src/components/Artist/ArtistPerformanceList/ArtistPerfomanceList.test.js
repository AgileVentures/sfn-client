import React from 'react'
import ArtistPerformanceList from './ArtistPerformanceList'
import ArtistPerformance from '../ArtistPerformance/ArtistPerformance'
import {
  shallow
} from 'enzyme'

describe('ArtistPerfomanceList', () => {

  it('creates component without crashing', () => {
    const artistPerformanceList = < ArtistPerformanceList / >
  })

  it('has 3 ArtistPerfomence', () => {
    const artistPerformanceListWrapper = shallow( < ArtistPerformanceList / > )
    expect(artistPerformanceListWrapper.find('ArtistPerformance').length).toEqual(3)
  })
})