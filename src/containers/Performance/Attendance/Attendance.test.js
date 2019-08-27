import React from 'react'
import Attendance from './Attendance'

import { shallow } from 'enzyme'

describe('<Attendance />', () => {
  let attendanceWrapper

  beforeEach(() => {
    attendanceWrapper = shallow(<Attendance />)
  })

  it("has the title Who's attending?", () => {
    expect(attendanceWrapper.find('h5').text()).toEqual("Who's attending?")
  })

  it('has 5 people attending the event', () => {
    expect(attendanceWrapper.find('Avatar').length).toEqual(5)
  })
})
