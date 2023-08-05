import React from "react";

import { Link } from "react-router-dom";

import MovieVersion from "../images/movie-version.png";

import Peliculas from "../images/peliculas.png";
import Documentales from "../images/documentales.png";
import Miniseries from "../images/miniseries.png";
import Terabox from "../images/como-descargar.png";

import "../styles/MenuSidebar.css";

class MenuSidebar extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/*Header logo*/}
        <section id="section-logo-img-txt">
          <Link to="/home" id="sidebar-link-home">
            <div id="contain-logo-img-txt">
              <img id="logo-img" src={MovieVersion} alt="MovieVersion" />
              <div id="logo-txt">Movie Version</div>
            </div>
          </Link>
        </section>

        {/* Links */}
        <section id="section-links">
          <Link
            to="/peliculas"
            onClick={this.closeToggle}
            className="link-sidebar items-sidebar"
          >
            <div className="section-link-sidebar">
              <img
                src={Peliculas}
                className="sidebar-link-img"
                alt="peliculas"
              />
              <span className="section-link-txt">Películas</span>
            </div>
          </Link>
          <Link
            to="/documentales"
            onClick={this.closeToggle}
            className="link-sidebar items-sidebar"
          >
            <div className="section-link-sidebar">
              <img
                src={Documentales}
                className="sidebar-link-img"
                alt="documentales"
              />
              <span className="section-link-txt">Documentales</span>
            </div>
          </Link>
          <Link
            to="/miniseries"
            onClick={this.closeToggle}
            className="link-sidebar items-sidebar"
          >
            <div className="section-link-sidebar">
              <img
                src={Miniseries}
                className="sidebar-link-img"
                alt="miniseries"
              />
              <span className="section-link-txt">Miniseries</span>
            </div>
          </Link>
          <Link
            to="/como-descargar"
            onClick={this.closeToggle}
            className="link-sidebar items-sidebar"
          >
            <div className="section-link-sidebar">
              <img src={Terabox} className="sidebar-link-img" alt="terabox" />
              <span className="section-link-txt">¿ Cómo descargar ?</span>
            </div>
          </Link>
        </section>
      </React.Fragment>
    );
  }
}
export default MenuSidebar;
