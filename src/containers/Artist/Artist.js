import React, {Component} from "react";
import ArtistBio from "../../components/Artist/ArtistBio/ArtistBio";
import ArtistPerformances from "../Artists/ArtistPerformances/ArtistPerformances";
import MoneyRaised from "../../components/Artist/MoneyRaised/MoneyRaised";
import SupportedCauses from "../Artists/SupportedCauses/SupportedCauses";
import RelatedArtists from "../Artists/RelatedArtists/RelatedArtists";

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
