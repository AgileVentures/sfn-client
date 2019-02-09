import React, {Component} from "react";
import ArtistBio from "./ArtistBio";

class ArtistContainer extends Component {
  render() {
    return (
      <div className="artist-container">
        <ArtistBio />
      </div>
    );
  }
}

export default ArtistContainer;
