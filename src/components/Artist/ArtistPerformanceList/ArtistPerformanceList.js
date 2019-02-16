import React, {Component} from "react";
import ArtistPerformance from "../ArtistPerformance/ArtistPerformance";

class ArtistPerformanceList extends Component {
  render() {
    return (
      <div className="artist-performance-container">
        <h3 className="white">Performances</h3>
        <ArtistPerformance />
        <ArtistPerformance />
        <ArtistPerformance />
      </div>
    );
  }
}

export default ArtistPerformanceList;
