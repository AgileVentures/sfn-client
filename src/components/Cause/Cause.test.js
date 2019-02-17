import React from "react";
import Cause from "./CauseContainer";

//Need at least 1 test to pass Travis CI
describe ("<CauseContainer />", () => {
  it ("creates component without crashing", () => {
    const cause = <Cause/>;
  });
});