import React from "react";

import MenuSidebar from "../components/MenuSidebar.js";
import Recomendacion from "../components/Recomendacion.js";

import "../styles/SideBar.css";

class SideBar extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div id="component-sidebar" className="overflow-auto">
        <section id="section-sidebar-links">
          <MenuSidebar/>
        </section>
        <section id="section-sidebar-recommendation">
          <Recomendacion/>
        </section>
      </div>
      </React.Fragment>
    );
  }
}

export default SideBar;
