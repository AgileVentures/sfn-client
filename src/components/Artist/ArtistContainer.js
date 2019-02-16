import React, {Component} from "react";
import ArtistBio from "./ArtistBio";
import ArtistPerformanceList from "./ArtistPerformanceList/ArtistPerformanceList";
import MoneyRaised from "./MoneyRaised/MoneyRaised";

class ArtistContainer extends Component {
  render() {
    return (
      <div className="artist-container">
        <ArtistBio />
        <div className="left-sidebar">
          <MoneyRaised />
          <ArtistPerformanceList />
        </div>
      </div>
    );
  }
}

export default ArtistContainer;
