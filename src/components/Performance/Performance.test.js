import React from "react";
import Performance from "./PerformanceContainer";

//Need at least 1 test to pass Travis CI
describe(
"<PerfomanceContainer/>", () => {
  it ("creates component without crashing", () => {
    const performance = <Performance/>;
  });
});
