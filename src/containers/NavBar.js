import React from "react";

import axios from "axios";
import url from "../config/url.js";

import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import Peliculas from "../images/peliculas.png";
import Documentales from "../images/documentales.png";
import Miniseries from "../images/miniseries.png";
import Terabox from "../images/como-descargar.png";

import "../styles/NavBar.css";

import ModalRecomendacion from "../components/ModalRecomendacion";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.closeToggle = this.closeToggle.bind(this);

    this.state = {
      isOpen: false,
      estadoModal: false,
      recomendacionDelMes: [],
    };
  }

  loadRecomendacion() {
    axios.get(`${url.path}/recomendaciones.json`).then((res) => {
      const fecha = new Date();
      const mesActual = fecha.getMonth() + 1;

      const recomendacion = res.data.filter(
        (reco) => reco.mounth === mesActual
      )[0];

      this.setState({
        recomendacionDelMes: recomendacion,
      });
    });
  }

  componentDidMount() {
    this.loadRecomendacion();
  }

  showDetails = () => {
    this.setState({
      isOpen: false,
      estadoModal: true,
    });
  };

  closeModal = () => {
    this.setState({ estadoModal: false });
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  closeToggle() {
    this.setState({
      isOpen: false,
    });
  }

  obtenerMes(keyMes) {
    var dictMes = {
      1: "Enero",
      2: "Febrero",
      3: "Marzo",
      4: "Abril",
      5: "Mayo",
      6: "Junio",
      7: "Julio",
      8: "Agosto",
      9: "Septiembre",
      10: "Octubre",
      11: "Noviembre",
      12: "Diciembre",
    };
    var valueMes = dictMes[keyMes];
    return valueMes;
  }

  verTrailer(){
    if (this.state.recomendacionDelMes.trailer !== undefined) {
      return (
        <div id="button-ver-trailer" onClick={this.showDetails}>Ver trailer</div>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar color="dark" expand="lg" fixed="top">
          <NavbarBrand>
            {/*<img src={Logo} className="imgLogo" alt="..." />*/}
          </NavbarBrand>
          <Link to="/home" onClick={this.closeToggle} className="items-navbar">
            <h3 id="titleNavMobile">Movie Version</h3>
          </Link>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem className="styleItems styleItemEnd">
                <NavLink>
                  <Link
                    to="/peliculas"
                    onClick={this.closeToggle}
                    className="link-navbar items-navbar"
                  >
                    <img
                      src={Peliculas}
                      className="navbar-link-img"
                      alt="peliculas"
                    />
                    Películas
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="styleItems styleItemEnd">
                <NavLink>
                  <Link
                    to="/documentales"
                    onClick={this.closeToggle}
                    className="link-navbar items-navbar"
                  >
                    <img
                      src={Documentales}
                      className="navbar-link-img"
                      alt="documentales"
                    />
                    Documentales
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="styleItems styleItemEnd">
                <NavLink>
                  <Link
                    to="/miniseries"
                    onClick={this.closeToggle}
                    className="link-navbar items-navbar"
                  >
                    <img
                      src={Miniseries}
                      className="navbar-link-img"
                      alt="miniseries"
                    />
                    Miniseries
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="styleItems styleItemEnd">
                <NavLink>
                  <Link
                    to="/como-descargar"
                    onClick={this.closeToggle}
                    className="link-navbar items-navbar"
                  >
                    <img
                      src={Terabox}
                      className="navbar-link-img"
                      alt="terabox"
                    />
                    ¿ Cómo descargar ?
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="styleItems styleItemEnd" style={{padding: "var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x)"}}>
                <div id="section-navbar-recomendacion">
                  <div id="container-marquee-info">
                    <div className="alt-marquee-navbar">
                      <span id="recomendacion-info">
                        <div>Recomendación de</div>
                        <div id="recomendacion-info-mounth">
                          {this.obtenerMes(this.state.recomendacionDelMes.mounth)}
                        </div>
                        <div>-</div>
                        <div id="recomendacion-navbar-info">{this.state.recomendacionDelMes.type}: {this.state.recomendacionDelMes.title}, {this.state.recomendacionDelMes.year}. </div>
                        {this.verTrailer()}
                      </span>
                    </div>
                  </div>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <ModalRecomendacion
          recomendacion={this.state.recomendacionDelMes}
          estadoModal={this.state.estadoModal}
          closeModal={this.closeModal}
        />
      </React.Fragment>
    );
  }
}

export default NavBar;
