import React from 'react'
import { shallow } from 'enzyme'
import moxios from 'moxios'
import Avatar from './Avatar'

describe('Avatar', () => {
  let avatarWrapper

  beforeEach(() => {
    avatarWrapper = shallow(<Avatar />)
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('has Image tag', () => {
    expect(avatarWrapper.find('img').length).toEqual(1)
  })

  it('calls getImage once', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.resolve({ data: {
        'results': [
          {
            'picture': {
              'medium': 'https://randomuser.me/api/portraits/med/men/65.jpg'
            }
          }
        ]
      } })
    })
    expect(avatarWrapper.find('img').prop('src')).toEqual('https://randomuser.me/api/portraits/med/men/65.jpg')
  })
})
