import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../styles/ModalPelicula.css";

import Year from "../images/year.png";
import Duration from "../images/duration.png";
import FilePelicula from "../images/file-pelicula.png";
import Download from "../images/como-descargar.png";

class ModalPelicula extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    this.props.closeModal();
  }

  convertirHora(){
    const hora = Math.floor(this.props.pelicula.duration / 60);
    const minutos = this.props.pelicula.duration % 60;
    if(hora !== 0) return hora + "h:" + minutos.toString().padStart(2, '0') + "min";
    else return minutos + "min";
  }

  obtenerFormatoTamaño(){
    const size = this.props.pelicula.size;
    if(Number.isInteger(size)){ return size + " MB"}
    else{ return size+" GB" }
  }

  verTrailer(){ 
    if (this.props.pelicula.trailer !== undefined) {
      return <div className="modal-pelicula-trailer"><iframe id="iframe-pelicula" src={this.props.pelicula.trailer+'?autoplay=0&mute=0&loop=0'} title={this.props.pelicula.title}></iframe></div>
    }
  }

  render() {
    return (
      <React.Fragment>
        <Modal size="lg" scrollable="true" isOpen={this.props.estadoModal} centered>
 
          <ModalHeader
            toggle={this.handleSave}
            cssModule={{ "modal-title": "w-100 text-center m-0" }}
            className="modal-pelicula-header"
          >
            <span className="modal-pelicula-titulo">
              <b>{this.props.pelicula.title}</b>
            </span>
          </ModalHeader>
 
          <ModalBody>
            <div id="modal-info">
              <img className="modal-pelicula-img" src={this.props.pelicula.photo} alt={this.props.pelicula.title}/>
              <div className="row align-items-center mb-4 pt-3">
                <div className="col-6 align-content-column">
                  <img src={Year} alt="year" className="modal-pelicula-img-info"/>
                  <span className="modal-pelicula-info-body">{this.props.pelicula.year}</span>
                </div>
                <div className="col-6 align-content-column">
                  <img src={Duration} alt="duration" className="modal-pelicula-img-info"/>
                  <span className="modal-pelicula-info-body">{this.convertirHora()}</span>
                </div>
              </div>
              <div className="modal-pelicula-info-body mb-3"><b>Sinopsis: </b>{this.props.pelicula.synopsis}</div>
              <div className="modal-pelicula-info-body"><b>Genero: </b>{this.props.pelicula.genre.join(" | ")}</div>
            </div>
            {this.verTrailer()}
          </ModalBody>
          
          <ModalFooter className="modal-pelicula-footer">
            <div className="row align-items-center" style={{ width: "100%", margin: "0" }}>
              <div className="col-6 align-content-column">
                <img src={FilePelicula} alt="file-pelicula" className="modal-pelicula-img-info"/>
                <span className="modal-pelicula-info-footer">{this.obtenerFormatoTamaño()}</span>
              </div>

              <div className="col-6 align-content-column">
              <a href={this.props.pelicula.download} target="blank">
                <button type="button" href={this.props.pelicula.download} className="btn btn-dark btn-sm btn-block">
                  <div className="align-content-column">
                    <img src={Download} alt="download" className="modal-pelicula-img-info"/>
                    <span className="modal-pelicula-info-footer">Descargar</span>
                  </div>
                </button>
              </a>
              </div>
            </div>
          </ModalFooter>

        </Modal>
      </React.Fragment>
    );  
  }
}

export default ModalPelicula;
