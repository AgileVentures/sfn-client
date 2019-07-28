import React from 'react'
import { shallow } from 'enzyme'
import ExplorePerformances from './ExplorePerformances'
import Paginate from '../../../components/Paginate/Paginate'

describe('<ExplorePerformances />', () => {
  let explorePerformancesWrapper
  beforeEach(() => {
    explorePerformancesWrapper = shallow(<ExplorePerformances />)
  })
  it("has 'Explore Performances' title", () => {
    expect(explorePerformancesWrapper.find('h1').text()).toEqual('Explore Performances')
  })
  it('has a Paginate component', () => {
    expect(explorePerformancesWrapper.find(Paginate).length).toEqual(1)
  })
})
