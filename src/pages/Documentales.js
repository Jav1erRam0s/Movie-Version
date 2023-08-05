import React from "react";

import "../styles/Documentales.css";

import ListaDocumentales from "../containers/ListaDocumentales.js";

class Documentales extends React.Component {
  render() {
    return (
      <React.Fragment>
        <a name="up" href="-">
          {""}
        </a>
        <div id="body-documentales">
          <ListaDocumentales />
        </div>
      </React.Fragment>
    );
  }
}

export default Documentales;
