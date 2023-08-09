import React from "react";

import "../styles/Miniseries.css";

import ListaMiniseries from "../containers/ListaMiniseries.js";

class Series extends React.Component {
  render() {
    return (
      <React.Fragment>
        <a name="up" href="-">
          {""}
        </a>
        <div id="body-miniseries">
          <ListaMiniseries />
        </div>
      </React.Fragment>
    );
  }
}

export default Series;
