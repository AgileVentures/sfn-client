import React from 'react'
import { shallow } from 'enzyme'
import ReactPaginate from 'react-paginate'
import Paginate from './Paginate'

describe('<Paginate />', () => {
  let paginateWrapper

  beforeEach(() => {
    paginateWrapper = shallow(<Paginate />)
  })

  it('has ReactPaginate', () => {
    expect(paginateWrapper.find(ReactPaginate).length).toEqual(1)
  })
})
