import React, {Component} from "react";
import ArtistBio from "./ArtistBio";
import ArtistPerformances from "../../containers/Artists/ArtistPerformances/ArtistPerformances";
import MoneyRaised from "./MoneyRaised/MoneyRaised";
import SupportedCauses from "../../containers/Artists/SupportedCauses/SupportedCauses";
import RelatedArtists from "../../containers/Artists/RelatedArtists/RelatedArtists";

class ArtistContainer extends Component {
  render() {
    return (
      <div className="artist-container">
        <ArtistBio />
        <div className="main-artistcontent-container">
          <div className="left-sidebar">
            <MoneyRaised />
            <SupportedCauses />
            <RelatedArtists />
          </div>
          <ArtistPerformances />
        </div>
      </div>
    );
  }
}

export default ArtistContainer;
