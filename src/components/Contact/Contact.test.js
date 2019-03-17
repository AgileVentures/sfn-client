import React from "react";
import Contact from "./ContactContainer";
import {
  shallow
} from 'enzyme'


describe("<ContactContainer/>", () => {

  const contactContainerWrapper = shallow( < Contact / > )

  it('creates component without crashing', () => {
    const contact = < Contact / >
  })

  it('has text ContactContainer', () => {
    expect(contactContainerWrapper.text()).toEqual('ContactContainer')
  })

});