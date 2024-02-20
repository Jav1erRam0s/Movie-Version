import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../styles/ModalPelicula.css";

import Year from "../images/year.png";
import Duration from "../images/duration.png";
import FilePelicula from "../images/file-pelicula.png";
import Download from "../images/como-descargar.png";

import { Tooltip } from "reactstrap";

class ModalPelicula extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);

    this.toggleEstreno = this.toggleEstreno.bind(this);
    this.toggleTiempo = this.toggleTiempo.bind(this);
    this.toggleTamaño = this.toggleTamaño.bind(this);

    this.state = {
      tooltipEstreno: false,
      tooltipTiempo: false,
      tooltipTamaño: false,
    };
  }

  toggleEstreno() {
    this.setState({
      tooltipEstreno: !this.state.tooltipEstreno,
    });
  }

  toggleTiempo() {
    this.setState({
      tooltipTiempo: !this.state.tooltipTiempo,
    });
  }

  toggleTamaño() {
    this.setState({
      tooltipTamaño: !this.state.tooltipTamaño,
    });
  }

  handleSave() {
    this.props.closeModal();
  }

  convertirHora() {
    const hora = Math.floor(this.props.pelicula.duration / 60);
    const minutos = this.props.pelicula.duration % 60;
    if (hora !== 0)
      return hora + "h:" + minutos.toString().padStart(2, "0") + "min";
    else return minutos + "min";
  }

  obtenerFormatoTamaño() {
    const size = this.props.pelicula.size;
    if (Number.isInteger(size)) {
      return size + " MB";
    } else {
      return size + " GB";
    }
  }

  verTrailer() {
    if (this.props.pelicula.trailer !== undefined) {
      return (
        <div className="modal-pelicula-trailer-container">
          <div className="modal-pelicula-trailer-texto">
            <b>Tráiler</b>
          </div>
          <iframe
            id="modal-pelicula-trailer-iframe"
            src={this.props.pelicula.trailer + "?autoplay=0&mute=0&loop=0"}
            title={this.props.pelicula.title}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <Modal
          contentClassName="modal-content-pelicula"
          size="lg"
          scrollable="true"
          isOpen={this.props.estadoModal}
          centered
        >
          <ModalHeader
            toggle={this.handleSave}
            cssModule={{ "modal-title": "w-100 text-center m-0" }}
            className="modal-pelicula-header"
          >
            <span className="modal-pelicula-titulo">
              <b>{this.props.pelicula.title}</b>
            </span>
          </ModalHeader>

          <ModalBody className="modal-pelicula-body">
            <div id="modal-info">
              <img
                className="modal-pelicula-img"
                src={this.props.pelicula.photo}
                alt={this.props.pelicula.title}
              />
              <div className="row align-items-center mb-4 pt-3">
                <div className="col-6 align-content-column">
                  <div
                    id="TooltipEstreno"
                    className="align-content-info-pelicula"
                  >
                    <img
                      src={Year}
                      alt="year"
                      className="modal-pelicula-img-info"
                    />
                    <span className="modal-pelicula-info-body">
                      {this.props.pelicula.year}
                    </span>
                  </div>
                </div>
                <div className="col-6 align-content-column">
                  <div
                    id="TooltipTiempo"
                    className="align-content-info-pelicula"
                  >
                    <img
                      src={Duration}
                      alt="duration"
                      className="modal-pelicula-img-info"
                    />
                    <span className="modal-pelicula-info-body">
                      {this.convertirHora()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="modal-pelicula-info-body mb-3">
                <b>Sinopsis: </b>
                {this.props.pelicula.synopsis}
              </div>
              <div className="modal-pelicula-info-body">
                <b>Género: </b>
                {this.props.pelicula.genre.join(" | ")}
              </div>
            </div>
            {this.verTrailer()}
          </ModalBody>

          <ModalFooter className="modal-pelicula-footer">
            <div
              className="row align-items-center"
              style={{ width: "100%", margin: "0" }}
            >
              <div className="col-6 align-content-column">
                <div id="TooltipTamaño" className="align-content-info-pelicula">
                  <img
                    src={FilePelicula}
                    alt="file-pelicula"
                    className="modal-pelicula-img-info"
                  />
                  <span className="modal-pelicula-info-footer">
                    {this.obtenerFormatoTamaño()}
                  </span>
                </div>
              </div>

              <div className="col-6 align-content-column">
                <a href={this.props.pelicula.download} target="blank" rel="noreferrer nofollow noopener">
                  <button
                    type="button"
                    href={this.props.pelicula.download}
                    className="btn btn-dark btn-sm btn-block"
                  >
                    <div className="align-content-column">
                      <img
                        src={Download}
                        alt="download"
                        className="modal-pelicula-img-info"
                      />
                      <span className="modal-pelicula-info-footer">
                        Descargar
                      </span>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </ModalFooter>

          <Tooltip
            className="tooltip-modal-pelicula"
            placement="top"
            isOpen={this.state.tooltipEstreno}
            target="TooltipEstreno"
            toggle={this.toggleEstreno}
          >
            <span className="tooltip-modal-pelicula">Estreno</span>
          </Tooltip>
          <Tooltip
            placement="top"
            isOpen={this.state.tooltipTiempo}
            target="TooltipTiempo"
            toggle={this.toggleTiempo}
          >
            <span className="tooltip-modal-pelicula">Duración</span>
          </Tooltip>
          <Tooltip
            className="tooltip-modal-pelicula"
            placement="top"
            isOpen={this.state.tooltipTamaño}
            target="TooltipTamaño"
            toggle={this.toggleTamaño}
          >
            <span className="tooltip-modal-pelicula">Tamaño</span>
          </Tooltip>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ModalPelicula;
