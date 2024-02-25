import React from "react";

import "../styles/Miniseries.css";

import ListaMiniseries from "../containers/ListaMiniseries.js";

class Series extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id="top" className="ancla">
          <div id="body-miniseries">
            <ListaMiniseries />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Series;
