import React from 'react'
import ReactPaginate from 'react-paginate'
import ArtistPerformances from './ArtistPerformances'
import { shallow } from 'enzyme'

describe('ArtistPerformances', () => {
  let artistPerformancesWrapper
  beforeEach(() => {
    artistPerformancesWrapper = shallow(<ArtistPerformances />)
  })

  it('has 3 ArtistPerformances', () => {
    expect(artistPerformancesWrapper.find('ArtistPerformance').length).toEqual(
      3
    )
  })

  it('displays a pagination component under perfomances', () => {
    expect(artistPerformancesWrapper.find(ReactPaginate).length).toEqual(1)
  })
})
