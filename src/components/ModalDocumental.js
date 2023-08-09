import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../styles/ModalDocumental.css";

import Year from "../images/year.png";
import Duration from "../images/duration.png";
import FileDocumental from "../images/file-documental.png";
import Download from "../images/como-descargar.png";

import { Tooltip } from 'reactstrap';

class ModalDocumental extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    
    this.toggleEstreno = this.toggleEstreno.bind(this);
    this.toggleTiempo = this.toggleTiempo.bind(this);
    this.toggleTamaño = this.toggleTamaño.bind(this);

    this.state = {
      tooltipEstreno: false,
      tooltipTiempo: false,
      tooltipTamaño: false
    }
  }

  toggleEstreno() {
    this.setState({
      tooltipEstreno: !this.state.tooltipEstreno
    });
  }

  toggleTiempo() {
    this.setState({
      tooltipTiempo: !this.state.tooltipTiempo
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

  convertirHora(){
    const hora = Math.floor(this.props.documental.duration / 60);
    const minutos = this.props.documental.duration % 60;
    if(hora !== 0) return hora + "h:" + minutos.toString().padStart(2, '0') + "min";
    else return minutos + "min";
  }

  obtenerFormatoTamaño(){
    const size = this.props.documental.size;
    if(Number.isInteger(size)){ return size + " MB"}
    else{ return size+" GB" }
  }

  verTrailer(){ 
    if (this.props.documental.trailer !== undefined) {
      return (
        <div className="modal-documental-trailer-container">
          <div className="modal-documental-trailer-texto"><b>Tráiler</b></div>
          <iframe id="modal-documental-trailer-iframe" src={this.props.documental.trailer+'?autoplay=0&mute=0&loop=0'} title={this.props.documental.title}/>
        </div>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <Modal size="lg" scrollable="true" isOpen={this.props.estadoModal} centered>
 
          <ModalHeader
            toggle={this.handleSave}
            cssModule={{ "modal-title": "w-100 text-center m-0" }}
            className="modal-documental-header"
          >
            <span className="modal-documental-titulo">
              <b>{this.props.documental.title}</b>
            </span>
          </ModalHeader>
 
          <ModalBody>
            <div id="modal-info">
              <img className="modal-documental-img" src={this.props.documental.photo} alt={this.props.documental.title}/>
              <div className="row align-items-center mb-4 pt-3">
                <div className="col-6 align-content-column">
                  <div id="TooltipEstreno" className="align-content-info-documental">
                    <img src={Year} alt="year" className="modal-documental-img-info"/>
                    <span className="modal-documental-info-body">{this.props.documental.year}</span>
                  </div>
                </div>
                <div className="col-6 align-content-column">
                  <div id="TooltipTiempo" className="align-content-info-documental">
                    <img src={Duration} alt="duration" className="modal-documental-img-info"/>
                    <span className="modal-documental-info-body">{this.convertirHora()}</span>
                  </div>
                </div>
              </div>
              <div className="modal-documental-info-body mb-3"><b>Sinopsis: </b>{this.props.documental.synopsis}</div>
              <div className="modal-documental-info-body"><b>Género: </b>{this.props.documental.genre.join(" | ")}</div>
            </div>
            {this.verTrailer()}
          </ModalBody>
          
          <ModalFooter className="modal-documental-footer">
            <div className="row align-items-center" style={{ width: "100%", margin: "0" }}>
              <div className="col-6 align-content-column">
                <div id="TooltipTamaño" className="align-content-info-documental">
                  <img src={FileDocumental} alt="file-documental" className="modal-documental-img-info"/>
                  <span className="modal-documental-info-footer">{this.obtenerFormatoTamaño()}</span>
                </div>
              </div>

              <div className="col-6 align-content-column">
              <a href={this.props.documental.download} target="blank">
                <button type="button" href={this.props.documental.download} className="btn btn-dark btn-sm btn-block">
                  <div className="align-content-column">
                    <img src={Download} alt="download" className="modal-documental-img-info"/>
                    <span className="modal-documental-info-footer">Descargar</span>
                  </div>
                </button>
              </a>
              </div>
            </div>
          </ModalFooter>

          <Tooltip placement="top" isOpen={this.state.tooltipEstreno} target="TooltipEstreno" toggle={this.toggleEstreno}>
            <span className="tooltip-modal-documental">Estreno</span>
          </Tooltip>
          <Tooltip placement="top" isOpen={this.state.tooltipTiempo} target="TooltipTiempo" toggle={this.toggleTiempo}>
            <span className="tooltip-modal-documental">Duración</span>
          </Tooltip>
          <Tooltip placement="top" isOpen={this.state.tooltipTamaño} target="TooltipTamaño" toggle={this.toggleTamaño}>
            <span className="tooltip-modal-documental">Tamaño</span>
          </Tooltip>

        </Modal>
      </React.Fragment>
    );  
  }
}

export default ModalDocumental;
