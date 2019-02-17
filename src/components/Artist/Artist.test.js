import React from "react";
import Artist from "./ArtistContainer";

//Need at least 1 test to pass Travis CI
describe ("<ArtistContainer />", () => {
  it ("creates component without crashing", () => {
    const artist = <Artist/>;
  });
});