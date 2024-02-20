import React from "react";

import "../styles/Peliculas.css";

import ListaPeliculas from "../containers/ListaPeliculas.js";

class Peliculas extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id="top" className="ancla">
          <div id="body-peliculas">
            <ListaPeliculas />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Peliculas;
