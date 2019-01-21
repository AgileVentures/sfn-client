import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

// CSS
import "../main.scss";

// Components
import HomeContainer from "./Home/HomeContainer";
import AboutContainer from "./About/AboutContainer";
import CausesContainer from "./Causes/CausesContainer";
import ArtistContainer from "./Artist/ArtistContainer";
import PerformancesContainer from "./Performances/PerformancesContainer";
import ContactContainer from "./Contact/ContactContainer";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={HomeContainer} />
          <Route path="/about" component={AboutContainer} />
          <Route path="/causes" component={CausesContainer} />
          <Route path="/artists/:id" component={ArtistContainer} />
          <Route path="/performances" component={PerformancesContainer} />
          <Route path="/contact" component={ContactContainer} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
