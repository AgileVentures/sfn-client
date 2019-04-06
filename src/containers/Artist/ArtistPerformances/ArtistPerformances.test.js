import React from 'react'
import ArtistPerformances from './ArtistPerformances'
import ArtistPerformance from '../../../components/Artist/ArtistPerformance/ArtistPerformance'
import {
  shallow
} from 'enzyme'

describe('ArtistPerformances', () => {

  it('creates component without crashing', () => {
    const artistPerformances = < ArtistPerformances / >
  })

  it('has 3 ArtistPerformances', () => {
    const artistPerformancesWrapper = shallow( < ArtistPerformances / > )
    expect(artistPerformancesWrapper.find('ArtistPerformance').length).toEqual(3)
  })
})