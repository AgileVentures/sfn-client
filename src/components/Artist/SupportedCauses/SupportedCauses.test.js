import React from "react";
import SupportedCauses from './SupportedCauses'
import {shallow} from 'enzyme'

let wrapped
describe ("<SupportedCauses />", () => {
  beforeEach(()=>{
    wrapped = shallow( <SupportedCauses/> )
  })
  it('contains text CauseContainer', ()=>{
    expect(wrapped.find('h3').text()).toEqual('Supported Causes')
  })
});