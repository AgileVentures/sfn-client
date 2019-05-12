import React from 'react'
import ExploreCausesCategory from './ExploreCausesCategory'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { shallow } from 'enzyme'

describe('<Causes />', () => {
  let exploreCausesCategoryWrapper

  let props = {
    icon: { faPaw },
    label: 'Animal welfare'
  }

  beforeEach(() => {
    exploreCausesCategoryWrapper = shallow(
      <ExploreCausesCategory {...props} />
    )
  })

  it('has an Animal welfare label', () => {
    expect(exploreCausesCategoryWrapper.find('p.label-normal').text()).toEqual(
      'Animal welfare'
    )
  })

  it('has an icon representing the category', () => {
    expect(exploreCausesCategoryWrapper.find('FontAwesomeIcon').length).toEqual(
      1
    )
  })
})
