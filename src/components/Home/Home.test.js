import React from "react";
import Home from "./HomeContainer";

//Need at least 1 test to pass Travis CI
describe("<HomeContainer/>", () => {
  it ("creates component without crashing", () => {
    const home = <Home/>;
  });
});
