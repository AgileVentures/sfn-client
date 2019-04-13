import React from "react";

const ArtistImage =() => {
    return (<div className="artist-details-container">
        <img
        className="artist-details__avatar"
        src="/images/dua_lipa_profile.jpg"
        alt="Dua Lipa profile"
        />
        <h5 className="artist-details__name white">Dua Lipa</h5>
    </div>);
}
export default ArtistImage;