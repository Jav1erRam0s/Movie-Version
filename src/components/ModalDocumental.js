import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../styles/ModalDocumental.css";

import Year from "../images/year.png";
import Duration from "../images/duration.png";
import FileDocumental from "../images/file-documental.png";
import Download from "../images/como-descargar.png";

class ModalDocumental extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
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
      return <div className="modal-documental-trailer"><iframe id="iframe-documental" src={this.props.documental.trailer+'?autoplay=0&mute=0&loop=0'} title={this.props.documental.title}></iframe></div>
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
                  <img src={Year} alt="year" className="modal-documental-img-info"/>
                  <span className="modal-documental-info-body">{this.props.documental.year}</span>
                </div>
                <div className="col-6 align-content-column">
                  <img src={Duration} alt="duration" className="modal-documental-img-info"/>
                  <span className="modal-documental-info-body">{this.convertirHora()}</span>
                </div>
              </div>
              <div className="modal-documental-info-body mb-3"><b>Sinopsis: </b>{this.props.documental.synopsis}</div>
              <div className="modal-documental-info-body"><b>Genero: </b>{this.props.documental.genre.join(" | ")}</div>
            </div>
            {this.verTrailer()}
          </ModalBody>
          
          <ModalFooter className="modal-documental-footer">
            <div className="row align-items-center" style={{ width: "100%", margin: "0" }}>
              <div className="col-6 align-content-column">
                <img src={FileDocumental} alt="file-documental" className="modal-documental-img-info"/>
                <span className="modal-documental-info-footer">{this.obtenerFormatoTamaño()}</span>
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

        </Modal>
      </React.Fragment>
    );  
  }
}

export default ModalDocumental;
