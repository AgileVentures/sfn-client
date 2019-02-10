import React, { Component } from "react";
import ArtistBio from "./ArtistBio";
import ArtistPerformanceList from "./ArtistPerformanceList/ArtistPerformanceList";

class ArtistContainer extends Component {
  render() {
    return (
      <div className="artist-container">
        <ArtistBio />
        <ArtistPerformanceList />
      </div>
    );
  }
}

export default ArtistContainer;
