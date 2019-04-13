import React from "react";
import SupportedCauses from "./SupportedCauses";
import {shallow} from "enzyme";

describe("<SupportedCauses />", () => {
  it("contains text Cause", () => {
    const supportedCausesWrapper = shallow(<SupportedCauses />);
    expect(supportedCausesWrapper.find("h3").text()).toEqual(
      "Supported Causes"
    );
  });
});
