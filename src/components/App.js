import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

// Components
import ArtistContainer from "./Artist/ArtistContainer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/artists/:id" component={ArtistContainer} />
      </BrowserRouter>
    </div>
  );
};

export default App;
