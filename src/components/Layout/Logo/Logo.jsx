import React from "react";
import sfnLogo from "./SFN-Main_invert_logo_without_bg.svg";

const Logo = () => {
  return (
    <React.Fragment>
      <img className="logo" src={sfnLogo} alt="Sing for Needs logo" />
    </React.Fragment>
  );
};

export default Logo;
