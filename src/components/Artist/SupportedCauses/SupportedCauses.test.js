import React from "react";
import SupportedCauses from './SupportedCauses'
import {
  shallow
} from 'enzyme'

let supportedCausesWrapper
describe("<SupportedCauses />", () => {


  const supportedCausesWrapper = shallow( < SupportedCauses / > )

  it('creates component without crashing', () => {
    const supportedCauses = < SupportedCauses / >
  })
  it('contains text CauseContainer', () => {
    expect(supportedCausesWrapper.find('h3').text()).toEqual('Supported Causes')
  })
});