import React from "react";
import ArtistPerformance from "./ArtistPerformance";
import {
  shallow
} from 'enzyme'

let wrapper
describe("<ArtistPerformance />", () => {
  beforeEach(() => {
    wrapper = shallow( < ArtistPerformance / > )
  })
  it("has donate button", () => {
    expect(wrapper.find('button').text()).toEqual('Donate')
  });
  it("has one button", () => {
    expect(wrapper.find('button').length).toEqual(1)
  })

  it("has an image element", () => {
    expect(wrapper.find('img').length).toEqual(1)
  })
  it("has text LIVE SHOW", () => {
    expect(wrapper.text()).toContain('LIVE SHOW')
  })
  it("has a More Info link", () => {
    expect(wrapper.find('Link').children().text()).toContain('More info')
  });
});