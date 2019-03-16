import React from "react";
import Contact from "./ContactContainer";
import {
  shallow
} from 'enzyme'

let wrapper;

describe("<ContactContainer/>", () => {
  beforeEach(() => {
    wrapper = shallow( < Contact / > )
  })

  it('has text ContactContainer', () => {
    expect(wrapper.text()).toEqual('ContactContainer')
  })

});