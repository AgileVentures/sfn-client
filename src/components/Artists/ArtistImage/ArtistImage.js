import React from "react";

const ArtistImage =() => {
    return (<div className="artist-image">
        <img
        className="artist-image__avatar"
        src="/images/dua_lipa_profile.jpg"
        alt="Dua Lipa profile"
        />
        <h5 className="artist-image__name white">Dua Lipa</h5>
    </div>);
}
export default ArtistImage;