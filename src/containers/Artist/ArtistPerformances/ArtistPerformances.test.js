import React from 'react'
import { shallow } from 'enzyme'
import ArtistPerformances from './ArtistPerformances'
import Paginate from '../../../components/Paginate/Paginate'

describe('<ArtistPerformances />', () => {
  let artistPerformancesWrapper
  beforeEach(() => {
    artistPerformancesWrapper = shallow(<ArtistPerformances />)
  })

  it('has 3 ArtistPerformances', () => {
    expect(artistPerformancesWrapper.find('ArtistPerformance').length).toEqual(
      3
    )
  })

  it('displays a pagination component under performances', () => {
    expect(artistPerformancesWrapper.find(Paginate).length).toEqual(1)
  })
})
