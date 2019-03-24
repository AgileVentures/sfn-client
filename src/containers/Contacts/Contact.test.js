import React from "react";
import Contact from "./Contacts";
import {
  shallow
} from 'enzyme'


describe("<ContactContainer/>", () => {


  it('creates component without crashing', () => {
    const contact = < Contact / >
  })

  it('has text ContactContainer', () => {
    const contactContainerWrapper = shallow( < Contact / > )
    expect(contactContainerWrapper.text()).toEqual('ContactContainer')
  })

});