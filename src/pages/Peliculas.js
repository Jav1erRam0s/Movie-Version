import React from "react";

import "../styles/Peliculas.css";

import ListaPeliculas from "../containers/ListaPeliculas.js";

class Peliculas extends React.Component {
  render() {
    return (
      <React.Fragment>
        <a name="up" href="-">
          {""}
        </a>
        <div id="body-peliculas">
          <ListaPeliculas />
        </div>
      </React.Fragment>
    );
  }
}

export default Peliculas;
