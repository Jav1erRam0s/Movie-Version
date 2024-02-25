import React from "react";

import "../styles/Documentales.css";

import ListaDocumentales from "../containers/ListaDocumentales.js";

class Documentales extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id="top" className="ancla">
          <div id="body-documentales">
            <ListaDocumentales />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Documentales;
