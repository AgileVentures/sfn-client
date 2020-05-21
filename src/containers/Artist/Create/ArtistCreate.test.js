import React from 'react'
import { shallow } from 'enzyme'
import ArtistCreate from './ArtistCreate'

describe('<ArtistCreate />', () => {
  let artistCreateWrapper
  beforeEach(() => {
    artistCreateWrapper = shallow(<ArtistCreate />)
  })
  it('has a form component', () => {
    expect(artistCreateWrapper.find('form')).toHaveLength(1)
  })

  it('has a textbox for name', () => {
    expect(artistCreateWrapper.find("input[type='text']")).toHaveLength(1)
  })

  it('has a text-area for capturing the bio', () => {
    expect(artistCreateWrapper.find('textarea')).toHaveLength(1)
  })

  it('has a submit button', () => {
    expect(artistCreateWrapper.find("input[type='submit']")).toHaveLength(1)
  })
})
