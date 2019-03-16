import React from "react";
import ArtistPerformance from "./ArtistPerformance";
import {shallow} from 'enzyme'

let wrapped
describe("<ArtistPerformance />", () => {
  beforeEach(()=>{
    wrapped = shallow( <ArtistPerformance/> )
  })
  it ("has donate button", () => {
      expect(wrapped.find('button').text()).toEqual('Donate')
  });
  it("has one button",()=>{
    expect(wrapped.find('button').length).toEqual(1)
  })

  it("has an image element",()=>{
    expect(wrapped.find('img').length).toEqual(1)
  })
  it("has text LIVE SHOW",()=>{
    expect(wrapped.text()).toContain('LIVE SHOW')
  })
  it("has a More Info link", () => {
    expect(wrapped.find('Link').children().text()).toContain('More info')
  });
});