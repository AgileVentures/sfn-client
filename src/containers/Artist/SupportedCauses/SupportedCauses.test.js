import React from "react";
import SupportedCauses from "./SupportedCauses";
import {shallow} from "enzyme";

describe("<SupportedCauses />", () => {
  let supportedCausesWrapper

  beforeEach(()=>{
    supportedCausesWrapper = shallow(<SupportedCauses />);
  })
  it("contains text Cause", () => {
    expect(supportedCausesWrapper.find("h3").text()).toEqual(
      "Supported Causes"
    );

  });

  it('has a list of 4 Related Artists', ()=>{
    expect(supportedCausesWrapper.find('li').length).toEqual(4)
  });

});
