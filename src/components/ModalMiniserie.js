import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../styles/ModalMiniserie.css";

import Year from "../images/year.png";
import Chapters from "../images/capitulos.png";
import FilesMiniserie from "../images/files-miniserie.png";
import Download from "../images/como-descargar.png";

import { Tooltip } from 'reactstrap';

class ModalMiniserie extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);

    this.toggleEstreno = this.toggleEstreno.bind(this);
    this.toggleCapitulos = this.toggleCapitulos.bind(this);
    this.toggleTamaño = this.toggleTamaño.bind(this);

    this.state = {
      tooltipEstreno: false,
      tooltipCapitulos: false,
      tooltipTamaño: false
    }
  }

  toggleEstreno() {
    this.setState({
      tooltipEstreno: !this.state.tooltipEstreno
    });
  }

  toggleCapitulos() {
    this.setState({
      tooltipCapitulos: !this.state.tooltipCapitulos
    });
  }

  toggleTamaño() {
    this.setState({
      tooltipTamaño: !this.state.tooltipTamaño
    });
  }

  handleSave() {
    this.props.closeModal();
  }

  obtenerFormatoTamaño(){
    const size = this.props.miniserie.size;
    if(Number.isInteger(size)){ return size + " MB"}
    else{ return size+" GB" }
  }

  verTrailer(){ 
    if (this.props.miniserie.trailer !== undefined) {
      return (
        <div className="modal-miniserie-trailer-container">
          <div className="modal-miniserie-trailer-texto"><b>Tráiler</b></div>
          <iframe id="modal-miniserie-trailer-iframe" src={this.props.miniserie.trailer+'?autoplay=0&mute=0&loop=0'} title={this.props.miniserie.title}/>
        </div>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <Modal contentClassName="modal-content-miniserie" size="lg" scrollable="true" isOpen={this.props.estadoModal} centered>
 
          <ModalHeader
            toggle={this.handleSave}
            cssModule={{ "modal-title": "w-100 text-center m-0" }}
            className="modal-miniserie-header"
          >
            <span className="modal-miniserie-titulo">
              <b>{this.props.miniserie.title}</b>
            </span>
          </ModalHeader>
 
          <ModalBody
            className="modal-miniserie-body"
          >
            <div id="modal-info">
              <img className="modal-miniserie-img" src={this.props.miniserie.photo} alt={this.props.miniserie.title}/>
              <div className="row align-items-center mb-4 pt-3">
                <div className="col-6 align-content-column">
                  <div id="TooltipEstreno" className="align-content-info-miniserie">
                    <img src={Year} alt="year" className="modal-miniserie-img-info"/>
                    <span className="modal-miniserie-info-body">{this.props.miniserie.year}</span>
                  </div>
                </div>
                <div className="col-6 align-content-column">
                  <div id="TooltipCapitulos" className="align-content-info-miniserie">
                    <img src={Chapters} alt="chapters" className="modal-miniserie-img-info"/>
                    <span className="modal-miniserie-info-body">{this.props.miniserie.chapters}</span>
                  </div>
                </div>
              </div>
              <div className="modal-miniserie-info-body mb-3"><b>Sinopsis: </b>{this.props.miniserie.synopsis}</div>
              <div className="modal-miniserie-info-body"><b>Género: </b>{this.props.miniserie.genre.join(" | ")}</div>
            </div>
            {this.verTrailer()}
          </ModalBody>
          
          <ModalFooter className="modal-miniserie-footer">
            <div className="row align-items-center" style={{ width: "100%", margin: "0" }}>
              <div className="col-6 align-content-column">
                <div id="TooltipTamaño" className="align-content-info-miniserie">
                  <img src={FilesMiniserie} alt="file-miniserie" className="modal-miniserie-img-info"/>
                  <span className="modal-miniserie-info-footer">{this.obtenerFormatoTamaño()}</span>
                </div>
              </div>

              <div className="col-6 align-content-column">
              <a href={this.props.miniserie.download} target="blank">
                <button type="button" href={this.props.miniserie.download} className="btn btn-dark btn-sm btn-block">
                  <div className="align-content-column">
                    <img src={Download} alt="download" className="modal-miniserie-img-info"/>
                    <span className="modal-miniserie-info-footer">Descargar</span>
                  </div>
                </button>
              </a>
              </div>
            </div>
          </ModalFooter>

          <Tooltip placement="top" isOpen={this.state.tooltipEstreno} target="TooltipEstreno" toggle={this.toggleEstreno}>
            <span className="tooltip-modal-miniserie">Estreno</span>
          </Tooltip>
          <Tooltip placement="top" isOpen={this.state.tooltipCapitulos} target="TooltipCapitulos" toggle={this.toggleCapitulos}>
            <span className="tooltip-modal-miniserie">Capítulos</span>
          </Tooltip>
          <Tooltip placement="top" isOpen={this.state.tooltipTamaño} target="TooltipTamaño" toggle={this.toggleTamaño}>
            <span className="tooltip-modal-miniserie">Tamaño</span>
          </Tooltip>
          
        </Modal>

      </React.Fragment>
    );  
  }
}

export default ModalMiniserie;
