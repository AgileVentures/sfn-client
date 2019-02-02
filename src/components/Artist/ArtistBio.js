import React from "react";

const ArtistBio = () => {
  return (
    <div className="artist-details-container">
      <img
        className="artist-details__avatar"
        src="/images/dua_lipa_profile.jpg"
        alt="Dua Lipa profile"
      />
      <div className="artist-details__text">
        <h1 className="artist-details__name white">Dua Lipa</h1>
        <p className="artist-details__description white">
          Dua Lipa (/ˈduːə ˈliːpə/; Albanian: [ˈdua ˈlipa]; born 22 August 1995)
          is an English singer and songwriter. Her musical career began at age
          14, when she began covering songs by other artists on YouTube. In
          2015, she signed with Warner Music Group and released her first single
          soon after. In January 2017, Lipa won the EBBA Public Choice Award.
          Her self-titled debut studio album was released on 2 June 2017.
        </p>

        <p className="artist-details__description white">
          The album spawned seven singles, including two UK top-10 singles "Be
          the One" and "IDGAF" and the UK number-one single "New Rules", which
          also reached number six in the United States. In February 2018, Lipa
          won two Brit Awards for British Female Solo Artist and British
          Breakthrough Act. In April, the single "One Kiss" by Lipa and Calvin
          Harris reached number one on the UK Singles Chart.
        </p>
      </div>
    </div>
  );
};

export default ArtistBio;
