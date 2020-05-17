import React from 'react'
import { shallow } from 'enzyme'
import ArtistCreate from './ArtistCreate'

describe('<ArtistCreate />', () => {
  let artistCreateWrapper
  beforeEach(() => {
    artistCreateWrapper = shallow(<ArtistCreate />)
  })
  it('has a form component', () => {
    expect(artistCreateWrapper.find('form').length).toEqual(1)
  })

  it('has a textbox for name', () => {
    expect(artistCreateWrapper.find("input[type='text']").length).toEqual(1)
  })
})
