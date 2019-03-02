import React from "react";
import Contact from "./ContactContainer";
import {shallow} from 'enzyme'

let wrapped; 

describe("<ContactContainer/>", ()=>{
  beforeEach(()=>{
    wrapped = shallow(<Contact/>)
  })

  it('has text ContactContainer', ()=>{
    expect(wrapped.text()).toEqual('ContactContainer')
  })

});
