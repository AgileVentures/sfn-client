import React from "react";
import ArtistPerformance from "./ArtistPerformance";
import {shallow} from "enzyme";

describe("<ArtistPerformance />", () => {
  let artistPerformanceWrapper;
  beforeEach(() => {
    artistPerformanceWrapper = shallow(<ArtistPerformance />);
  });

  it("has donate button", () => {
    expect(artistPerformanceWrapper.find("button").text()).toEqual("Donate");
  });

  it("has one button", () => {
    expect(artistPerformanceWrapper.find("button").length).toEqual(1);
  });

  it("has an image element", () => {
    expect(artistPerformanceWrapper.find("img").length).toEqual(1);
  });

  it("has text LIVE SHOW", () => {
    expect(artistPerformanceWrapper.text()).toContain("LIVE SHOW");
  });

  it("has a More Info link", () => {
    expect(
      artistPerformanceWrapper
        .find("Link")
        .children()
        .text()
    ).toContain("More info");
  });
});
