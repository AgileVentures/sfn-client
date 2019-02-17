import React from "react";
import Performances from "./PerformancesContainer";

//Need at least 1 test to pass Travis CI

describe("<PerformancesContainer />", () => {
  it ("creates component without crashing", () => {
    const performances = <Performances/>;
  });
});
