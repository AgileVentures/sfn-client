import React from 'react'
import Artist from './ArtistContainer'
import ArtistBio from './ArtistBio'
import MoneyRaised from './MoneyRaised/MoneyRaised'
import { shallow } from 'enzyme'

describe('<ArtistContainer />', () => {
  let artistWrapper
  beforeEach(() => {
    artistWrapper = shallow(<Artist />)
  })

  it('displays an artist bio', () => {
    expect(artistWrapper.find(ArtistBio).length).toEqual(1)
  })

  it('displays an money raised', () => {
    expect(artistWrapper.find(MoneyRaised).length).toEqual(1)
  })
})
