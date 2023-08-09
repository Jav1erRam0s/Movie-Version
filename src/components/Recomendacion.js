import React from "react";

import axios from "axios";
import url from "../config/url.js";

import "../styles/Recomendacion.css";

import ModalRecomendacion from "./ModalRecomendacion.js";

import Reproducir from "../images/reproducir.png";

class Recomendacion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.setState({ estadoModal: true });
  };

  closeModal = () => {
    this.setState({ estadoModal: false });
  };

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

  badgeForTypeVideo() {
    switch (this.state.recomendacionDelMes.type) {
      case "Pelicula":
        return (
          <span
            id="recomendacion-badge-type-pelicula"
            className="recomendacion-badge"
          >
            Película
          </span>
        );
      case "Documental":
        return (
          <span
            id="recomendacion-badge-type-documental"
            className="recomendacion-badge"
          >
            {this.state.recomendacionDelMes.type}
          </span>
        );
      case "Miniserie":
        return (
          <span
            id="recomendacion-badge-type-miniserie"
            className="recomendacion-badge"
          >
            {this.state.recomendacionDelMes.type}
          </span>
        );
      default:
        break;
    }
  }

  verTrailer() {
    if (this.state.recomendacionDelMes.trailer !== undefined) {
      return (
        <div id="recomendacion-play">
          <img
            src={Reproducir}
            alt="recomendacion-play"
            onClick={this.showDetails}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="container-recomendacion">
          {/* Header */}
          <div id="recomendacion-header">
            <div id="container-marquee-title">
              <div className="alt-marquee">
                <span id="recomendacion-title">
                  <div id="recomendacion-title-txt">Recomendación de</div>
                  <div id="recomendacion-title-mounth">
                    {this.obtenerMes(this.state.recomendacionDelMes.mounth)}
                  </div>
                </span>
              </div>
            </div>
          </div>
          {/* Body */}
          <div id="recomendacion-body">
            <img
              id="recomendacion-img"
              src={this.state.recomendacionDelMes.photo}
              alt="recomendacion-img"
            />
            {this.verTrailer()}
          </div>
          {/* Footer */}
          <div id="recomendacion-footer">
            {this.badgeForTypeVideo()}
            <span id="recomendacion-badge-year" className="recomendacion-badge">
              {this.state.recomendacionDelMes.year}
            </span>
          </div>
        </div>

        <ModalRecomendacion
          recomendacion={this.state.recomendacionDelMes}
          estadoModal={this.state.estadoModal}
          closeModal={this.closeModal}
        />
      </React.Fragment>
    );
  }
}
export default Recomendacion;
