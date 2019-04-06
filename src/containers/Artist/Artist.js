import React, {Component} from "react";
import ArtistBio from "../../components/Artist/ArtistBio/ArtistBio";
import ArtistPerformances from "../Artist/ArtistPerformances/ArtistPerformances";
import MoneyRaised from "../../components/Artist/MoneyRaised/MoneyRaised";
import SupportedCauses from "../Artist/SupportedCauses/SupportedCauses";
import RelatedArtists from "../Artist/RelatedArtists/RelatedArtists";

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
