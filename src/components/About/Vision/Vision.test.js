import React from 'react'
import Vision from './Vision'
import { shallow } from 'enzyme'

describe('<Vision />', () => {
  let visionWrapper
  beforeEach(() => {
    visionWrapper = shallow(<Vision />)
  })

  it('has an image on top to introduce the section', () => {
    expect(visionWrapper.find('div.vision-image').length).toEqual(1)
  })

  it('has the title Our vision', () => {
    expect(visionWrapper.find('h3').text()).toEqual('Our vision')
  })

  it('has the vision description', () => {
    expect(visionWrapper.find('p').length).toBeGreaterThan(0)
  })
})
