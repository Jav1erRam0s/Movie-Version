import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../styles/ModalMiniserie.css";

import Year from "../images/year.png";
import Chapters from "../images/capitulos.png";
import FilesMiniserie from "../images/files-miniserie.png";
import Download from "../images/como-descargar.png";

class ModalMiniserie extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
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
      return <div className="modal-miniserie-trailer"><iframe id="iframe-miniserie" src={this.props.miniserie.trailer+'?autoplay=0&mute=0&loop=0'} title={this.props.miniserie.title}></iframe></div>
    }
  }

  render() {
    return (
      <React.Fragment>
        <Modal size="lg" scrollable="true" isOpen={this.props.estadoModal} centered>
 
          <ModalHeader
            toggle={this.handleSave}
            cssModule={{ "modal-title": "w-100 text-center m-0" }}
            className="modal-miniserie-header"
          >
            <span className="modal-miniserie-titulo">
              <b>{this.props.miniserie.title}</b>
            </span>
          </ModalHeader>
 
          <ModalBody>
            <div id="modal-info">
              <img className="modal-miniserie-img" src={this.props.miniserie.photo} alt={this.props.miniserie.title}/>
              <div className="row align-items-center mb-4 pt-3">
                <div className="col-6 align-content-column">
                  <img src={Year} alt="year" className="modal-miniserie-img-info"/>
                  <span className="modal-miniserie-info-body">{this.props.miniserie.year}</span>
                </div>
                <div className="col-6 align-content-column">
                  <img src={Chapters} alt="chapters" className="modal-miniserie-img-info"/>
                  <span className="modal-miniserie-info-body">{this.props.miniserie.chapters}</span>
                </div>
              </div>
              <div className="modal-miniserie-info-body mb-3"><b>Sinopsis: </b>{this.props.miniserie.synopsis}</div>
              <div className="modal-miniserie-info-body"><b>Genero: </b>{this.props.miniserie.genre.join(" | ")}</div>
            </div>
            {this.verTrailer()}
          </ModalBody>
          
          <ModalFooter className="modal-miniserie-footer">
            <div className="row align-items-center" style={{ width: "100%", margin: "0" }}>
              <div className="col-6 align-content-column">
                <img src={FilesMiniserie} alt="file-miniserie" className="modal-miniserie-img-info"/>
                <span className="modal-miniserie-info-footer">{this.obtenerFormatoTamaño()}</span>
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

        </Modal>
      </React.Fragment>
    );  
  }
}

export default ModalMiniserie;
