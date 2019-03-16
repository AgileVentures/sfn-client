import React from "react";
import SupportedCauses from './SupportedCauses'
import {
  shallow
} from 'enzyme'

let wrapper
describe("<SupportedCauses />", () => {
  beforeEach(() => {
    wrapper = shallow( < SupportedCauses / > )
  })
  it('contains text CauseContainer', () => {
    expect(wrapper.find('h3').text()).toEqual('Supported Causes')
  })
});