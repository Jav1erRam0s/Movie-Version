import React from "react";

import SideBar from "./SideBar.js";
import NavBar from "./NavBar.js";

import "../styles/Layout.css";

function Layout(props) {
  return (
    <React.Fragment>
      <div id="menu-sidebar" className="col-3">
        <SideBar />
      </div>
      <div id="menu-navbar" className="col-12">
        <NavBar />
      </div>
    </React.Fragment>
  );
}

export default Layout;
