import React from "react";
import SupportedCauses from './SupportedCauses'
import {
  shallow
} from 'enzyme'

describe("<SupportedCauses />", () => {

  it('creates component without crashing', () => {
    const supportedCauses = < SupportedCauses / >
  })

  it('contains text CauseContainer', () => {
    const supportedCausesWrapper = shallow( < SupportedCauses / > )
    expect(supportedCausesWrapper.find('h3').text()).toEqual('Supported Causes')
  })
});