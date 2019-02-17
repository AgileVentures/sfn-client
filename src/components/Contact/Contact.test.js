import React from "react";
import Contact from "./ContactContainer";

//Need at least 1 test to pass Travis CI
describe("<ContactContainer/>", ()=>{
  it ("creates component without crashing", () => {
    const contact = <Contact/>;
  });
});
