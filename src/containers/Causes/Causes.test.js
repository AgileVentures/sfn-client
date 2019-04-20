import React from 'react'
import Causes from './Causes'
import { shallow } from 'enzyme'

describe("<Causes />", () => {
  it("contains text Causes", () => {
    const causesWrapper = shallow(<Causes />);
    expect(causesWrapper.text()).toEqual("Causes");
  });
});
