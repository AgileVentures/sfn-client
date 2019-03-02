import React from "react";
import ArtistPerformance from "./ArtistPerformance";

//Need at least 1 test to pass Travis CI

describe("<ArtistPerformance />", () => {
  it ("creates component without crashing", () => {
    const artistPerformance = <ArtistPerformance />;
  });
});
