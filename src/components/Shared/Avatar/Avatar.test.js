import React from 'react'
import { shallow } from 'enzyme'
import moxios from 'moxios'
import Avatar from './Avatar'

describe('<Avatar />', () => {
  let avatarWrapper

  beforeEach(() => {
    moxios.install()
    avatarWrapper = shallow(<Avatar />)
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('has Image tag', () => {
    expect(avatarWrapper.find('img').length).toEqual(1)
  })

  it('setsState with avatarImage after successfully fetching an avatar', done => {
    expect.assertions(1)
    moxios.wait(() => {
      let request = moxios.requests.mostRecent()
      request
        .respondWith({
          status: 200,
          response: {
            'results': [
              {
                'picture': {
                  'medium': 'https://randomuser.me/api/portraits/med/men/65.jpg'
                }
              }
            ]
          }
        }).then(() => {
          expect(avatarWrapper.state().avatarImage).toEqual('https://randomuser.me/api/portraits/med/men/65.jpg')
          done()
        })
    })
  })
})
