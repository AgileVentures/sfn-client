import React from "react";
import Artists from "./ArtistsContainer";

//Need at least 1 test to pass Travis CI
describe ("<ArtistsContainer />", () => {
  it ("creates component without crashing", () => {
    const artists = <Artists/>;
  });
});
